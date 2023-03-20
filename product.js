class ProductManager {
  static idCounter = 0;
  static products = [];

  static addProduct(product) {
    let found = false;
    let code = product.code;
    for (let i = 0; i < products.length; i++) {
      if (product[i].code == code) {
        found = true;
        break;
      }
    }
    if (!found) {
      idCounter = idCounter++;
      product.setId(idCounter);
      products.push(product);
    }
  }
}