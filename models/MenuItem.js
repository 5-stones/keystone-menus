var keystone = require('../lib/Keystone/KeystoneHelper').getKeystone();
var Types = keystone.Field.Types;

/**
 * Product Model
 */
var MenuItem = new keystone.List('MenuItem', {
  autokey: { path: 'slug', from: 'name', unique: true },
  defaultColumns: 'name, key, menus, href, active'
});

MenuItem.add({
	name: { type: String, required: true },
	slug: { type: String, readonly: true },
  href: { type: Types.Url, required: true, initial: true },
  active: { type: Boolean, default: true }
});

MenuItem.register();
