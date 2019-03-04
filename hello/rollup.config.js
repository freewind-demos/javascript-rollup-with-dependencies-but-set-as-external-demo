import pkg from './package.json';

export default {
  entry: 'hello.js',
  dest: pkg.main,
  format: 'cjs',
  external: ['force-number']
}
