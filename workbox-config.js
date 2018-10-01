module.exports = {
  'globDirectory': 'public/',
  'globPatterns': [
    '**/*.{html,css,js}',
    'img/*.{jpeg,ico,jpg,png,gif}'
  ],
  'globIgnores': [
    'categories/**/*',
    'tags/**/*'
  ],
  'swDest': 'public/sw.js',
  'swSrc': 'src-sw.js'
};
