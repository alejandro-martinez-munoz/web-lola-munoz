// dev-server.mjs — Runs Astro dev server in foreground, bypassing daemon mode.
// Astro v7 auto-detects AI agent environments and daemonizes,
// which doesn't survive on Windows. This script runs it inline.

import devServer from './node_modules/astro/dist/core/dev/index.js';

const server = await devServer({
  root: process.cwd(),
  mode: 'development',
  server: {
    host: '0.0.0.0',
    port: 4321,
  },
});

console.log(`\n  Dev server running at http://localhost:${server.address.port}\n`);

// Keep process alive
process.on('SIGINT', async () => {
  await server.stop();
  process.exit(0);
});
