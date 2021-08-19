const data = [
  {
    id: "",
    img: "hero.jpg",
    name: "Deku",
    save: "",
    delivery: "In 3 - 4 days",
    ItemInCart: false,
  },

  {
    id: "",
    img: "",
    name: "",
    save: "",
    delivery: "In 3 - 4 days",
    ItemInCart: false,
  },

  {
    id: "",
    img: "",
    name: "",
    save: "",
    delivery: "In 3 - 4 days",
    ItemInCart: false,
  },

  {
    id: "",
    img: "",
    name: "",
    save: "",
    delivery: "In 3 - 4 days",
    ItemInCart: false,
  },

  {
    id: "",
    img: "",
    name: "",
    save: "",
    delivery: "In 3 - 4 days",
    ItemInCart: false,
  },

  {
    id: "",
    img: "",
    name: "",
    save: "",
    delivery: "In 3 - 4 days",
    ItemInCart: false,
  },

  {
    id: "",
    img: "",
    name: "",
    save: "",
    delivery: "In 3 - 4 days",
    ItemInCart: false,
  },

  {
    id: "",
    img: "",
    name: "",
    save: "",
    delivery: "In 3 - 4 days",
    ItemInCart: false,
  },

  {
    id: "",
    img: "",
    name: "",
    save: "",
    delivery: "In 3 - 4 days",
    ItemInCart: false,
  },

  {
    id: "",
    img: "",
    name: "",
    save: "",
    delivery: "In 3 - 4 days",
    ItemInCart: false,
  },
];
let cartlist = []; //array to the cart list
var i;
var details = document.getElementsByClassName('cart-item');
var detailsImg = document.getElementById('details-img');
var detailTitle = document.getElementById('detail-title');
var detailprice = document.getElementById('detail-price');
var youSave = document.getElementById('you-save');
var detailTitle = document.getElementById('detail-title');
var detailspage = document.getElementById('detail-page');
var back = document.getElementById('back');
back.addEventListener('click',refreshpage); // click to go to the home page
var addtoCarts = document.querySelectorAll('#add-to-cart');
var cart = document.getElementById('cart');

cart.addEventListener('click',displaycart); // click to see the cart display

var carts = document.getElementById('carts');
carts.addEventListener('click',()=>addtoCarts()); // adding items from details page
var getId;

var home = document.getElementsById('home');
home.addEventListener('click',hideCart); // to hide the cart 










