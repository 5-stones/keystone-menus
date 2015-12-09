'use strict';
var Menu = require('./Menu');
var KeystoneHelper = require('../Keystone/KeystoneHelper');
var Promise = require('bluebird')

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
    return Promise.resolve(KeystoneHelper.getKeystone()
      .list('Menu').model
      .findOne({ 'name' : menuName })
      .populate('items')
      .exec())
      .then(function(menu){
        var menuObject =  new Menu(menu);

        return menuObject;
      });
  }

}

module.exports = MenuBuilder;
