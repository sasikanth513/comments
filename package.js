Package.describe({
  name: 'sasi513:comments',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('sasi513:comments.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('sasi513:comments');
  api.addFiles('sasi513:comments-tests.js');
});
