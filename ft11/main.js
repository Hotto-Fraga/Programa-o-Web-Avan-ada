function displayProductsAndCart() {
  let products = getProducts();
  let cart = getCart();

  console.log("=== PRODUCTS ===");
  products.forEach((product, index) => {
    console.log(`${index + 1}. ${product.name} - $${product.price}`);
  });

  console.log("\n=== CART ===");
  cart.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - $${item.price}`);
  });

  let total = cart.reduce((sum, item) => sum + item.price, 0);
  console.log(`\nTotal: $${total}`);

  return { products, cart };
}
