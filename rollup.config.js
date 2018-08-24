import resolve from 'rollup-plugin-node-resolve'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'
import copy from 'rollup-plugin-copy'

const plugins = [
  resolve({
    jsnext: true,
  }),
  serve({
    contentBase: './dist',
    port: 1234,
    open: true,
  }),
  copy({
    'src/index.html': 'dist/index.html',
    'styles/main.css': 'dist/main.css',
  }),
  livereload(),
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
