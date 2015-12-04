var MenuBuilder = require('./lib/Menu/MenuBuilder');

module.exports = function(keystone){
  console.log('importing menus')
  global.keystone = keystone;
  keystone.import('node_modules/keystone-menus/models');

  return new MenuBuilder()
}
