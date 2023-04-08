import { readFileSync, existsSync } from 'fs';
import { solveQuadEqu } from './equation.js';

const nonIntMode = (path) => {
  if (!existsSync(path)) {
    console.log(`File ${path} does not exist`);
    process.exit(404);
  }
  const data = readFileSync(path).toString();
  const format = /^(.*)\s(.*)\s(.*)(\r)?\n$/;
  if (!data.match(format)) {
    console.log('Invalid data format');
    process.exit(400);
  }
  let params = data.trim('\n').split(' ');
  for (const param of params) {
    if (isNaN(Number(param))) {
      console.log(`Error. ${param} is not a number`);
      process.exit(400);
    }
  }
  params = params.map((param) => Number(param));
  if (params[0] === 0) {
    console.log('A cannot be 0');
    process.exit(400);
  }
  solveQuadEqu(params[0], params[1], params[2]);
};

export { nonIntMode };