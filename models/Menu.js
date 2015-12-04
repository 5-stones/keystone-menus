var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Menu Model
 * =============
 */

var Menu = new keystone.List('Menu', {
  autokey: { path: 'slug', from: 'name', unique: true },
  drilldown: 'menus',
  defaultColumns: 'name, menus, active'
});

Menu.add({
	name: { type: String, required: true },
	slug: { type: String, readonly: true },

	menus: { type: Types.Relationship, ref: 'Menu', many: true },

  active: { type: Boolean, default: true }
});

Menu.schema.virtual('classes').get(function() {
  classes = [];
  for(i in this.categories)
    classes.push(this.categories[i].slug);
  return classes;
});

Menu.register();
