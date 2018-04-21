import uglify from 'rollup-plugin-uglify';

export default {
  input: 'src/raxx-react.js',
  output: [
    {
      file: 'dist/raxx-react.umd.js',
      format: 'umd',
      name: 'raxxreact'
    },
    {
      file: 'dist/raxx-react.es.js',
      format: 'es',
      name: 'raxxreact'
    }
  ],
  plugins: [ 
    uglify(),
  ]
};