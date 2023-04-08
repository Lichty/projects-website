process.env.NODE_ENV = 'production';
process.chdir(__dirname);
const NextServer = require('next/dist/server/next-server').default;
const path = require('path');
const https = require('https');
const { existsSync, readFileSync, writeFileSync, appendFileSync } = require('fs');
const keyFileName = './ssl/key.pem';
const certFileName = './ssl/cert.pem';
const logFile = 'log.txt';

const log = (msg, level = '') => {
  if (!existsSync(logFile)) {
    writeFileSync(logFile, '');
  }
  let output = `${level?`${level}: `:''}${msg}`;
  switch (level) {
    case 'Error':
      console.error(log);
      break;
    case 'Info':
      console.info(msg);
      break;
    default:
      console.log(msg);
  }
  appendFileSync(logFile, `${new Date().toLocaleDateString()}\t${output}\n`);
}

const logError = (msg) => {
  log(msg, 'Error');
}

const logInfo = (msg) => {
  log(msg, 'Info');
}

// Make sure commands gracefully respect termination signals (e.g. from Docker)
// Allow the graceful termination to be manually configurable
if (!process.env.NEXT_MANUAL_SIG_HANDLE) {
  process.on('SIGTERM', () => process.exit(0));
  process.on('SIGINT', () => process.exit(0));
}

const currentPort = parseInt(process.env.PORT, 10) || 3000;

logInfo('Checking SSL files...');

let filesExist = true;
// Check that the file exists locally
const checkFile = (file) => {
  let result = true;
  if (!existsSync(file)) {
    result = false;
    logError(`${file} not found`);
  }
  return result;
}

filesExist = checkFile(keyFileName) && filesExist;
filesExist = checkFile(certFileName) && filesExist;

let key;
let cert;

if (filesExist) {
  logInfo('Loading SSL files...');
  key = readFileSync(keyFileName);
  cert = readFileSync(certFileName);
} else {
  logError("Missing files. Aborting.");
  throw new Error("Missing files. Aborting.");
}

logInfo('SSL files loaded');

let options = {
  key: key,
  cert: cert
};

let handler;

logInfo('Creating server');

const server = https.createServer(options, async (req, res) => {
  try {
    await handler(req, res);
  } catch (err) {
    logError(err);
    res.statusCode = 500;
    res.end('internal server error');
  }
})

logInfo('Server created');

try {
  logInfo('Attempt to listen');
  server.listen(currentPort, err => {
    if (err) {
      logError("Failed to start server");
      logError(err);
      process.exit(1);
    }
    logInfo('Starting server...');
    const nextServer = new NextServer({
      hostname: 'localhost',
      port: currentPort,
      dir: path.join(__dirname),
      dev: false,
      customServer: false,
      conf: {
        "env": {}, "webpackDevMiddleware": null, "eslint": { "ignoreDuringBuilds": false },
        "typescript": {
          "ignoreBuildErrors": false,
          "tsconfigPath": "tsconfig.json"
        },
        "distDir": "./.next",
        "cleanDistDir": true,
        "assetPrefix": "",
        "configOrigin": "next.config.js",
        "useFileSystemPublicRoutes": true,
        "generateEtags": true,
        "pageExtensions": ["tsx", "ts", "jsx", "js"],
        "target": "server",
        "poweredByHeader": true,
        "compress": true,
        "analyticsId": "",
        "images": {
          "deviceSizes": [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          "imageSizes": [16, 32, 48, 64, 96, 128, 256, 384],
          "path": "/_next/image",
          "loader": "default",
          "domains": [],
          "disableStaticImages": false,
          "minimumCacheTTL": 60,
          "formats": ["image/webp"],
          "dangerouslyAllowSVG": false,
          "contentSecurityPolicy": "script-src 'none';frame-src 'none'; sandbox; "
        },
        "devIndicators": {
          "buildActivity": true,
          "buildActivityPosition": "bottom - right"
        },
        "onDemandEntries": { "maxInactiveAge": 15000, "pagesBufferLength": 2 },
        "amp": { "canonicalBase": "" },
        "basePath": "",
        "sassOptions": {},
        "trailingSlash": false,
        "i18n": null,
        "productionBrowserSourceMaps": false,
        "optimizeFonts": true,
        "excludeDefaultMomentLocales": true,
        "serverRuntimeConfig": {},
        "publicRuntimeConfig": {},
        "reactStrictMode": true,
        "httpAgentOptions": { "keepAlive": true },
        "outputFileTracing": true,
        "staticPageGenerationTimeout": 60,
        "swcMinify": false,
        "output": "standalone",
        "experimental": {
          "optimisticClientCache": true,
          "manualClientBasePath": false,
          "legacyBrowsers": true,
          "browsersListForSwc": false,
          "newNextLinkBehavior": false,
          "cpus": 1,
          "sharedPool": true,
          "profiling": false,
          "isrFlushToDisk": true,
          "workerThreads": false,
          "pageEnv": false,
          "optimizeCss": false,
          "nextScriptWorkers": false,
          "scrollRestoration": false,
          "externalDir": false,
          "disableOptimizedLoading": false,
          "gzipSize": true,
          "swcFileReading": true,
          "craCompat": false,
          "esmExternals": true,
          "appDir": false,
          "isrMemoryCacheSize": 52428800,
          "serverComponents": false,
          "fullySpecified": false,
          "outputFileTracingRoot": "",
          "images": { "remotePatterns": [] },
          "swcTraceProfiling": false,
          "forceSwcTransforms": false,
          "largePageDataBytes": 128000,
          "trustHostHeader": false
        },
        "configFileName": "next.config.js"
      },
    })
    logInfo("Server started");

    handler = nextServer.getRequestHandler();

    logInfo(`Listening on port ${currentPort}`);
  })
} catch (err) {
  logError(err);
}
