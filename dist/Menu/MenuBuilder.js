'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Menu = require('./Menu');
var KeystoneHelper = require('../Keystone/KeystoneHelper');
var Promise = require('bluebird');

/**
 * A builder class used to builder an instance of Menu from the MongoDB
 */

var MenuBuilder = (function () {
  function MenuBuilder() {
    _classCallCheck(this, MenuBuilder);
  }

  _createClass(MenuBuilder, [{
    key: 'build',

    /**
     * Get and initialize a Menu instance based on a given name
     * @param  {String} menuName The name to find a menu by. ex. "subNav"
     * @return {Menu} The menu object that maps to that name
     */
    value: function build(menuName) {
      // get and create menu instance
      return Promise.resolve(KeystoneHelper.getKeystone().list('Menu').model.findOne({ 'name': menuName }).populate('items').exec()).then(function (menu) {
        var menuObject = new Menu(menu);

        return menuObject;
      });
    }
  }]);

  return MenuBuilder;
})();

module.exports = MenuBuilder;
//# sourceMappingURL=MenuBuilder.js.map
