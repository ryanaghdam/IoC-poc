var deepmerge = require('deepmerge');

function getEnvironmentDependencies() {
  var environment = process.env.NODE_ENV;
  if (typeof process.env.NODE_ENV === 'undefined') {
    environment = 'development';
  }

  try {
    return require('./' + environment);
  } catch (e) {
    return {};
  }
}

module.exports = deepmerge(require('./default'), getEnvironmentDependencies());
