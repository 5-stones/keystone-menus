'use strict';

var jade = require('jade');
var KeystoneHelper = require('../Keystone/KeystoneHelper');
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
  render(){

    var menuItems = [
  		{ active: true, name: 'About',		slug: 'about',		href: '/about' }
  	];

    var fn = jade.compileFile(__dirname + '/../../templates/layouts/menu.jade');

    return fn({
      menuItems: menuItems,
      path: ''
    });
  }

  /**
   * Alias for Render
   * @return {[type]} [description]
   */
  toString(){
    var self = this;

    return self.render();
  }

}

module.exports = Menu;
