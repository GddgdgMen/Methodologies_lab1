import { createInterface } from 'readline';
import { solveQuadEqu } from './quadEquation.js';

const input = async (text, rl) => {
  const question = (text) => new Promise((arg) => rl.question(text, arg));
  let num = NaN;
  while (true) {
    num = await question(text);
    if (isNaN(Number(num))) {
      console.log(`${num} is not a number. Input valid number.`);
    } else {
      break;
    }
  }

  return Number(num);
};

const interactiveMode = async () => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let a = NaN;
  while (true) {
    a = await input('a = ', rl);
    if (a === 0) {
      console.log('A cannot be 0. Try again.');
    } else {
      break;
    }
  }

  const b = await input('b = ', rl);
  const c = await input('c = ', rl);

  rl.close();
  solveQuadEqu(a, b, c);
};

export { interactiveMode };