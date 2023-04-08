import { readFileSync, existsSync } from 'fs';
import { solveEquation } from './equation.js';

const nonInteractiveMode = (path) => {
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
      console.log(`${param} is not a number. Input valid number.`);
      process.exit(400);
    }
  }
  params = params.map((param) => Number(param));
  if (params[0] === 0) {
    console.log('A cannot be 0. Try again.');
    process.exit(400);
  }
  solveEquation(params[0], params[1], params[2]);
};

export { nonInteractiveMode };