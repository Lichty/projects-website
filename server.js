const { createServer } = require('https');
const { parse } = require('url');
const { readFileSync } = require('fs');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const sslConfig = {
  key: readFileSync('/app/ssl/key.pem'),
  cert: readFileSync('/app/ssl/cert.pem'),
};

app.prepare().then(() => {
  createServer(sslConfig, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(process.env.PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on https://localhost:${process.env.PORT}`);
  });
});
