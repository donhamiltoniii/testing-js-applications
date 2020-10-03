const { closeConnection, db } = require('../../../../dbConnection');
const { addItem, createCart } = require('./cart');

beforeEach(async () => {
  await db('carts_items').truncate();
  await db('carts').truncate();
});

afterAll(async () => await closeConnection());

test('createCart creates a cart for a username', async () => {
  await createCart('Dondon');

  const result = await db.select('username').from('carts');

  expect(result).toEqual([{ username: 'Dondon' }]);
});

test('addItem adds an item to a cart', async () => {
  const username = 'Dondon';

  await createCart(username);

  const { id: cartId } = await db.select().from('carts').where({ username });

  await addItem(cartId, 'cheesecake');

  const result = await db.select('itemName').from('carts_items');

  expect(result).toEqual([{ cartId, itemName: 'cheesecake' }]);
});
