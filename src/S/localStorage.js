function ChecknReturn() {
  const isSet = localStorage.getItem("cart");
  if (isSet) {
    return JSON.parse(isSet);
  }
  return [];
}

function savedCart(cart) {
  const cartStr = JSON.stringify(cart);
  localStorage.setItem("cart", cartStr);
}

function addToLS(id) {
  const ls = ChecknReturn();
  ls.push(id);
  savedCart(ls);
}

function removeCartFromLS(id) {
  const cart = ChecknReturn();
  const remaining = cart.filter((newID) => newID !== id);
  savedCart(remaining);
}

export { addToLS, ChecknReturn, removeCartFromLS };
