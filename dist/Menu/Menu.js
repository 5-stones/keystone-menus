'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var jade = require('jade');
var KeystoneHelper = require('../Keystone/KeystoneHelper');
var _ = require('lodash');

/**
 * The object representing a menu
 */

var Menu = (function () {

  /**
   * Constructor for the Menu object
   * @param  {Menu} menu The instance of the Menu model to be used for rendering
   */

  function Menu(menu) {
    _classCallCheck(this, Menu);

    var self = this;
    self.menu = menu;
  }

  _createClass(Menu, [{
    key: 'render',

    /**
     * Render the menu object as a jade template
     * @param  {String} path The current request path. Used for setting the active <li>
     * @param  {JSONObject} ulAttributes HTML attributes to apply to the menu's <ul>, example: {'class': 'nav navbar-left'}
     * @param  {JSONObject} liAttributes HTML attributes to apply to the menu's <li>s, example: {'class': 'nav-item'}
     * @param  {JSONObject} aAttributes HTML attributes to apply to the menu's <a>s, example: {'class': 'nav-link'}
     * @return {jade template} Compiled Jade template representing the menu
     */
    value: function render(path, ulAttributes, liAttributes, aAttributes) {
      var self = this;
      var menuItems = self.menu.items;

      var fn = jade.compileFile(__dirname + '/../../templates/layouts/menu.jade');

      return fn({
        menuItems: menuItems,
        path: path,
        ulAttributes: ulAttributes,
        liAttributes: liAttributes,
        aAttributes: aAttributes
      });
    }

    /**
     * Render the menu object as a String
     * @param  {String} path The current request path. Used for setting the active <li>
     * @param  {JSONObject} ulAttributes HTML attributes to apply to the menu's <ul>, example: {'class': 'nav navbar-left'}
     * @param  {JSONObject} liAttributes HTML attributes to apply to the menu's <li>s, example: {'class': 'nav-item'}
     * @param  {JSONObject} aAttributes HTML attributes to apply to the menu's <a>s, example: {'class': 'nav-link'}
     * @return {jade template} Compiled Jade template representing the menu
     */

  }, {
    key: 'toString',
    value: function toString(path, ulAttributes, liAttributes, aAttributes) {
      var self = this;

      return self.render(path, ulAttributes, liAttributes, aAttributes);
    }
  }]);

  return Menu;
})();

module.exports = Menu;
//# sourceMappingURL=Menu.js.map
