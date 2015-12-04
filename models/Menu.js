var keystone = require('../lib/Keystone/KeystoneHelper').getKeystone();
var Types = keystone.Field.Types;

/**
 * Menu Mongoose Model
 * =============
 */

var Menu = new keystone.List('Menu', {
  autokey: { path: 'slug', from: 'name', unique: true },
  defaultColumns: 'name, active'
});

Menu.add({
	name: { type: String, required: true },
	slug: { type: String, readonly: true },

  active: { type: Boolean, default: true }
});

Menu.schema.virtual('classes').get(function() {
  classes = [];
  for(i in this.categories)
    classes.push(this.categories[i].slug);
  return classes;
});

Menu.register();
