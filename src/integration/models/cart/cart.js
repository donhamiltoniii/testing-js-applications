const { db } = require('../../../../dbConnection');

const addItem = (cartId, itemName) =>
  db('carts_items').insert({ cartId, itemName });

const createCart = (username) => db('carts').insert({ username });

module.exports = {
  addItem,
  createCart,
};
