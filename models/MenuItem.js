var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Product Model
 * =============
 */

var MenuItem = new keystone.List('MenuItem', {
  autokey: { path: 'slug', from: 'name', unique: true },
  drilldown: 'menus',
  defaultColumns: 'name, key, menus, href, active'
});

MenuItem.add({
	name: { type: String, required: true },
	slug: { type: String, readonly: true },
	menus: { type: Types.Relationship, ref: 'Menu', many: true, required: true, initial: true },
  href: { type: Types.Url, required: true, initial: true },
  active: { type: Boolean, default: true }
});

MenuItem.schema.virtual('classes').get(function() {
  classes = [];
  for(i in this.categories)
    classes.push(this.categories[i].slug);
  return classes;
});

MenuItem.register();
