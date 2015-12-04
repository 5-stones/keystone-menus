var MenuBuilder = require('lib/Menu/MenuBuilder');

module.exports = function(keystone){
  keystone.import('models');

  return new MenuBuilder()
}
