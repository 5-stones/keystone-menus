'use strict';

var jade = require('jade');
var KeystoneHelper = require('../Keystone/KeystoneHelper');
var _ = require('lodash');

/**
 * The object representing a menu
 */
class Menu {

  /**
   * Constructor for the Menu object
   * @param  {Menu} menu The instance of the Menu model to be used for rendering
   */
  constructor(menu){
    var self = this;
    self.menu = menu;
  };

  /**
   * Return the menu as an html element
   *
   * @return {?} An HTML representation of the menu
   */
  render(path, ulAttributes, liAttributes, aAttributes){
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
   * Alias for Render
   * @return {[type]} [description]
   */
  toString(path){
    var self = this;

    return self.render(path);
  }

}

module.exports = Menu;
