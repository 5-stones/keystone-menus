var MenuBuilder = require('./lib/Menu/MenuBuilder');
var KeystoneHelper = require('./lib/Keystone/KeystoneHelper');
var Menu = require('./lib/Menu/Menu');

module.exports = {
  import: function(keystone){
    KeystoneHelper.setKeystone(keystone);
    keystone.import('node_modules/keystone-menus/models');
  },
  builder: function(){
    return new MenuBuilder();
  },
  routeParser: function(req, res, next){
    KeystoneHelper.setCurrentRequest(req);
    next();
  }
};
