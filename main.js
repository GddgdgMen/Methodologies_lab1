import { interactiveMode } from './src/interactiveMode.js';
import { nonInteractiveMode } from './src/nonInteractiveMode.js';

if (process.argv.length < 3) {
  interactiveMode();
} else {
    nonInteractiveMode(process.argv[2]);
}