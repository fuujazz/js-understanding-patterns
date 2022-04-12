//  1-Global variable naming conflicts

// var name = "yusuf";
// var name = "kagan";

// console.log(name);

//  2-Encapsulation

// var Counter = {
//   number: 0,
//   increment: function () {
//     return ++this.number;
//   },
//   decrement: function () {
//     return --this.number;
//   },
// };

// console.log(Counter.increment());
// console.log(Counter.increment());
// console.log(Counter.increment());
// Counter.number = 10;
// console.log(Counter.decrement());

//  IIFE (Immediately Invoked Function Expressions)

// (function () {
//   var name = "Yusuf";
//   console.log(name);
// })();

// (function () {
//   var name = "kagan";
//   console.log(name);
// })();

// var Module = (function () {
//   //  private members
//   let number = 0;
//   let increment = function () {
//     return ++number;
//   };
//   let decrement = function () {
//     return --number;
//   };

//   return {
//     //  public members
//     increment,
//     decrement,
//   };
// })();

// console.log(Module.increment());
// console.log(Module.increment());
// console.log(Module.increment());

// var Module = (function () {
//   var privateMethod = function () {};

//   return {
//     publicMethod: function () {},
//   };
// })();

const products = [
  { name: "Samsung s8", price: 3000 },
  { name: "Samsung s7", price: 2000 },
  { name: "Samsung s6", price: 1000 },
];

var ProductController = (function (data) {
  var collections = data || [];
  const addProduct = function (product) {
    collections.push(product);
  };

  const removeProduct = function (product) {
    var index = collections.indexOf(product);
    if (index >= 0) {
      collections.splice(index, 1);
    }
  };

  const getProduct = function () {
    return collections;
  };

  return {
    addProduct,
    removeProduct,
    getProduct,
  };
})(products);

// console.log(ProductController.getProduct());

//  Module extending

var extended = (function (module) {
  module.sayHello = () => {
    console.log("hello from extended module");
  };

  return module;
})(ProductController || {});

extended.sayHello();
console.log(extended.getProduct());
