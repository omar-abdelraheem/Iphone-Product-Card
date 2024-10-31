let mainProduct = document.getElementById("main-product");
let container = document.querySelector(".container");

let changeProduct = (product) => {
  mainProduct.src = product;
};

let changeBg = (color) => {
  container.style.background = color;
};
