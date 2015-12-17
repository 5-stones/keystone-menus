var MenuBuilder = require('./dist/Menu/MenuBuilder');
var KeystoneHelper = require('./dist/Keystone/KeystoneHelper');
var Menu = require('./dist/Menu/Menu');

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
