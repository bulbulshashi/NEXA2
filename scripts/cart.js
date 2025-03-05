

const cartProduct = JSON.parse(localStorage.getItem("proToCart"));

console.log(cartProduct);
let cartItems = [
  {
    id: 1,
    productName: "Astronaut T-shirt",
    productImage: "",
    color: "NA",
    size: "L",
    quantity: 1,
    price: 1299,
  },
];

cartItems[0].productImage = cartProduct[4];
cartItems[0].productName = cartProduct[1];
// cartItems[0].color = cartProduct[3];
cartItems[0].size= cartProduct[3];
cartItems[0].quantity = eval(cartProduct[5]*1);
cartItems[0].price =( cartProduct[2]);












// Function to update the cart table
function updateCart() {
  const cartTableBody = document.getElementById("big-t-body");
  cartTableBody.innerHTML = ""; // Clear existing rows

  let totalAmount = 0;
  cartItems.forEach((item) => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td><button onclick="removeItem(${item.id})">X</button></td>
        <td><img src="${item.productImage}" alt="${item.productName}"></td>
        <td>${item.productName}</td>
        <td>${item.color}</td>
        <td>${item.size}</td>
        <td><button onclick="updateQuantity(${item.id}, -1)">-</button> ${item.quantity} <button onclick="updateQuantity(${item.id}, 1)">+</button></td>
        <td>${item.price} BDT</td>
        <td>${item.quantity * item.price} BDT</td>
      `;

    cartTableBody.appendChild(row);
    totalAmount += item.quantity * item.price;
  });

  // Update total price
  document.querySelector("#mini-table tr:nth-child(1) td:nth-child(2)").textContent = `${totalAmount} BDT`;
  document.querySelector("#mini-table tr:nth-child(5) td:nth-child(2)").textContent = `${totalAmount} BDT`;
}

// Function to remove an item from the cart
function removeItem(id) {
  cartItems = cartItems.filter(item => item.id !== id);
  updateCart();
}

// Function to update item quantity (increase or decrease)
function updateQuantity(id, change) {
  const item = cartItems.find(item => item.id === id);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) item.quantity = 1; // Prevent negative or zero quantity
    updateCart();
  }
}

// Function to apply coupon (example)
function applyCoupon() {
  const couponInput = document.querySelector("#coupon-sec input").value;
  if (couponInput === "DISCOUNT10") {
    alert("Coupon applied! 10% discount.");
    // Update total price after applying discount (example)
    let totalAmount = 0;
    cartItems.forEach(item => totalAmount += item.quantity * item.price);
    totalAmount *= 0.9; // Apply 10% discount
    document.querySelector("#mini-table tr:nth-child(5) td:nth-child(2)").textContent = `${totalAmount} BDT`;
  } else {
    alert("Invalid coupon.");
  }
}

// Event listener for the apply coupon button
document.querySelector("#coupon-sec button").addEventListener("click", applyCoupon);

// Initial update of the cart
updateCart();
