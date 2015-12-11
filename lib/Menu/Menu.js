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
   * Render the menu object as a jade template
   * @param  {String} path The current request path. Used for setting the active <li>
   * @param  {JSONObject} ulAttributes HTML attributes to apply to the menu's <ul>, example: {'class': 'nav navbar-left'}
   * @param  {JSONObject} liAttributes HTML attributes to apply to the menu's <li>s, example: {'class': 'nav-item'}
   * @param  {JSONObject} aAttributes HTML attributes to apply to the menu's <a>s, example: {'class': 'nav-link'}
   * @return {jade template} Compiled Jade template representing the menu
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
   * Render the menu object as a String
   * @param  {String} path The current request path. Used for setting the active <li>
   * @param  {JSONObject} ulAttributes HTML attributes to apply to the menu's <ul>, example: {'class': 'nav navbar-left'}
   * @param  {JSONObject} liAttributes HTML attributes to apply to the menu's <li>s, example: {'class': 'nav-item'}
   * @param  {JSONObject} aAttributes HTML attributes to apply to the menu's <a>s, example: {'class': 'nav-link'}
   * @return {jade template} Compiled Jade template representing the menu
   */
  toString(path, ulAttributes, liAttributes, aAttributes){
    var self = this;

    return self.render(path, ulAttributes, liAttributes, aAttributes);
  }

}

module.exports = Menu;
