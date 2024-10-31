let mainProduct = document.getElementById("main-product");
let message = document.getElementById("message");
let love = document.getElementById("love");
let container = document.querySelector(".container");

let changeProduct = (product) => {
  mainProduct.src = product;
};

let changeBg = (color) => {
  container.style.background = color;
};

let loveMsg = () => {
  message.style.left = "50%";
  message.style.top = "40%";
};
let loveMsgLeave = () => {
  message.style.left = "1000px";
  message.style.top = "1000px";
};

love.addEventListener("click", loveMsg);
love.addEventListener("dblclick", loveMsgLeave);
