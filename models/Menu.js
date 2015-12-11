var keystone = require('../lib/Keystone/KeystoneHelper').getKeystone();
var Types = keystone.Field.Types;

/**
 * Menu Mongoose Model
 */
var Menu = new keystone.List('Menu', {
  autokey: { path: 'slug', from: 'name', unique: true },
  defaultColumns: 'name, active'
});

Menu.add({
	name: { type: String, required: true },
	slug: { type: String, readonly: true },
  items: { type: Types.Relationship, ref: 'MenuItem', many: true },
  active: { type: Boolean, default: true }
});

Menu.register();
