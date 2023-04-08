# Install dependencies only when needed
FROM node:18-alpine3.15 AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* ./
RUN yarn --frozen-lockfile;

# Rebuild the source code only when needed
FROM node:18-alpine3.15 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN yarn build

# Production image, copy all the files and run next
FROM node:18-alpine3.15 AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
RUN apk add --no-cache nano

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

ARG SSL_CERT_BASE64
ARG SSL_KEY_BASE64

RUN mkdir -p /app/ssl && \
    echo "$SSL_CERT_BASE64" | base64 -d > /app/ssl/cert.pem && \
    echo "$SSL_KEY_BASE64" | base64 -d > /app/ssl/key.pem

COPY --chown=nextjs:nodejs ./server.js ./server_new.js
COPY --chown=nextjs:nodejs ./init.sh /app/init.sh

USER nextjs

EXPOSE 4431

ENV PORT 4431

RUN chmod +x /app/init.sh
