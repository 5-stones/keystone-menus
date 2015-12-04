
'use strict';

var jade = require('jade');

/**
 * The object representing a menu
 */
class Menu {

  /**
   * Constructor for the Menu object
   * @param  {Menu} menu The instance of the Menu model to be used for rendering
   */
  constructor(menu){
    var menu = menu;
  };

  /**
   * Return the menu as an html element
   *
   * @return {?} An HTML representation of the menu
   */
  render(){

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
