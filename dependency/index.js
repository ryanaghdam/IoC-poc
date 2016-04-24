function getEnvironment() {
  if (typeof process.env.NODE_ENV === 'undefined') {
    return 'development';
  }

  return process.env.NODE_ENV;
}

module.exports = require('./' + getEnvironment());
