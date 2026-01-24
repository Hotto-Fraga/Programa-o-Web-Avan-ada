function addToCart(item) {
  let cart = getCart();
  cart.push(item);
  saveCart(cart);
}

function getCart() {
  let cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function clearCart() {
  localStorage.removeItem("cart");
}

function getCartItems() {
  return getCart();
}
