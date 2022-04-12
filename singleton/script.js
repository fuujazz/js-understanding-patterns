//  Singleton Pattern

var singleton = (function () {
  var instance;

  const createInstance = function () {
    return {
      randomNumber: Math.random(),
    };
  };

  return {
    getInstance: () => {
      if (!instance) {
        instance = new createInstance();
      }
      return instance;
    },
  };
})();

const instance1 = singleton.getInstance();
const instance2 = singleton.getInstance();

console.log(instance1.randomNumber, instance2.randomNumber);

var singleton = (function () {
  var instance;

  const ProductController = function () {
    const products = [
      { name: "product 1" },
      { name: "product 2" },
      { name: "product 3" },
    ];

    const add = (product) => {
      products.push(product);
    };

    const get = () => {
      return products;
    };

    return { add, get };
  };

  return {
    getInstance: () => {
      if (!instance) {
        instance = new ProductController();
      }
      return instance;
    },
  };
})();

const ProductController1 = singleton.getInstance();
const ProductController2 = singleton.getInstance();

ProductController1.add({ name: "Product 4" });
console.log(ProductController2.get());
console.log(ProductController1.get());
