import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import {uglify} from 'rollup-plugin-uglify';
import buble from '@rollup/plugin-buble';

export default {
  input: 'src/main.js',
  output: {
    file: 'build/jexl.js',
    format: 'umd',
    name: 'Jexl',
    sourcemap: true
  },
  plugins: [resolve(), commonjs()]
};
