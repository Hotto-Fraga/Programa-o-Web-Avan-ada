function addProducts(product) {
  let products = getProducts();
  products.push(product);
  saveProducts(products);
}

function getProducts() {
  let products = localStorage.getItem("products");
  return products ? JSON.parse(products) : [];
}

function saveProducts(products) {
  localStorage.setItem("products", JSON.stringify(products));
}

function removeProducts() {
  localStorage.removeItem("products");
}
