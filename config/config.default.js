const paths = require('./paths');

exports.keys = '1501988934419_6659';

exports.title = 'Todolist Demo';

exports.assets = paths.appBuild + '/assets.json';

exports.view = {
  defaultExtension: '.njk',
  defaultViewEngine: 'nunjucks',
};
