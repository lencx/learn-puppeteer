const fg = require('fast-glob');
const { spawn } = require('child_process');
const fs = require('fs');

if (!fs.existsSync('test')) fs.mkdirSync('test');

async function init() {
  const entries = await fg(['**/*.run.js'], { dot: true });

  for await (const entry of entries) {
    // run command
    spawn(`node`, [entry]);
  }
}

init()
  .catch(e => {
    console.log(e)
  });