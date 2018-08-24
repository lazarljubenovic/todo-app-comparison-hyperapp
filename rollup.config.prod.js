import resolve from 'rollup-plugin-node-resolve'
import copy from 'rollup-plugin-copy'
import {terser} from 'rollup-plugin-terser'

const plugins = [
  resolve({
    jsnext: true,
  }),
  copy({
    'src/index.html': 'dist/index.html',
    'styles/main.css': 'dist/main.css',
  }),
  terser(),
]

export default {
  input: 'src/index.js',
  output: {
    name: 'todo-comparison-app-hyperapp',
    file: 'dist/index.js',
    format: 'es',
  },
  plugins,
}
