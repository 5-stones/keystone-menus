'use strict';
var Menu = require('./Menu');

/**
 * A builder class used to builder an instance of Menu from the MongoDB
 */
class MenuBuilder {

  /**
   * Get and initialize a Menu instance based of a given name
   * @param  {String} menuName The name to find a menu by. ex. "subNav"
   * @return {Menu} The menu object that maps to that name
   */
  build(menuName){
    // get and create menu instance
    var menu = keystone.list('Menu').model
      .findOne({ 'name' : menuName });


    return new Menu(menu);
  }

}

module.exports = MenuBuilder;
