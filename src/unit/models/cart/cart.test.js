const Cart = require('./cart.js');

test('addToCart function can add an item to the cart', () => {
  const testCart = new Cart();
  testCart.addToCart('cheesecake');

  expect(testCart.items).toEqual(['cheesecake']);
});

test('removeFromCart function can remove an existing item from the cart', () => {
  const testCart = new Cart();
  testCart.addToCart('cheesecake');
  testCart.removeFromCart('cheesecake');

  expect(testCart.items).toEqual([]);
});
