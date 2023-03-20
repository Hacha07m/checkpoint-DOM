let items = [
  {
    id: 1,
    src: "1.png",
    name: "Iphone 11 ",
    price: "1000",
    quantity: 1,
    isLiked: "unliked",
  },
  {
    id: 2,
    src: "2.png",
    name: "Iphone 12",
    price: "2000",
    quantity: 1,
    isLiked: "unliked",
  },
  {
    id: 3,
    src: "3.png",
    name: "Iphone 12",
    price: "1100",
    quantity: 1,
    isLiked: "unliked",
  },
  {
    id: 4,
    src: "4.png",
    name: "Iphone 14",
    price: "1600",
    quantity: 1,
    isLiked: "unliked",
  },
];

let container = document.getElementById("root");
let total, adore;

function showData() {
  let cartItems = "";
  adore = 0;
  total = 0;
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    cartItems += `
          <div class="cart cart${item.isLiked}">
              <img src="./img/${item.src}" alt="${item.name}" title="${
      item.name
    }" class="img">
              <h5 class="num">${item.name}</h5>
              <h5 class="num">$ ${item.price}</h5>
              <h5 class="quant" onclick="decrBtn(${i})">-</h5>
              <h5 class="num">${item.quantity}</h5>
              <h5 class="quant" onclick="incrBtn(${i})">+</h5>
              <h5 class="subTotal">Sub-Total: $ ${
                item.quantity * item.price
              }</h5>
              <button class="del" onclick="deleteItem(${i})">
                <i class="fa-sharp fa-solid fa-trash" title="delete this product from cart"></i>
              </button>
              <i class="fa-regular fa-heart" id="${
                item.isLiked
              }" onclick="loveReact(${i})"></i>
          </div>
          `;

    container.innerHTML = `<h1 class ="title"> Shopping Cart (${
      items.length
    })</h1> 
    ${cartItems}
                              <div class="total">
                                  <h4>Total : $ ${getTotal(i)}</h4>
                                  ${numOfLikes(i)}
                              </div>`;
  }
}

showData();

function deleteItem(i) {
  items.splice(i, 1);

  if (items.length < 1) {
    container.innerHTML = `<h1 class="empty"> sakarna arja3 ghodwa !!</h1>`;
  }
  showData();
}

function getTotal(i) {
  total += +items[i].price * +items[i].quantity;
  return total;
}

function incrBtn(i) {
  items[i].quantity++;
  showData();
}

function decrBtn(i) {
  if (items[i].quantity > 1) {
    items[i].quantity--;
    showData();
  }
}

function loveReact(i) {
  items[i].isLiked === "unliked"
    ? (items[i].isLiked = "liked")
    : (items[i].isLiked = "unliked");
  showData();
}

function numOfLikes(i) {
  if (items[i].isLiked === "liked") {
    adore++;
  }
  if (adore === 0) return "";
  return `<h3 class="adore">Like : ${adore}</h3>`;
}
