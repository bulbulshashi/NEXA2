
let products = [
  { image1: "images/products/p1/p42.jpg",image2: "images/products/kc.jpg",image3: "images/products/kc.jpg",image4: "images/products/kc.jpg",name: "NEXA Cotton Summer  Short-Sleeved T-Shirt Male Ins Streetwear Students", price: "2199 ",rating:"****",brand: "NEXA",details:"Astronaut T-shirt Astronaut T-shirt Astronaut T-shirt Astronaut T-shirt Astronaut T-shirt Astronaut T-shirt Astronaut T-shirt Astronaut T-shirt Astronaut T-shirt Astronaut T-shirt Astronaut T-shirt Astronaut T-shirt Astronaut T-shirt Astronaut T-shirt Astronaut T-shirt Astronaut T-shirt Astronaut T-shirt Astronaut T-shirt" },
  { image1: "images/products/p2/p4.jpg",image2: "images/products/kc.jpg",image3: "images/products/kc.jpg",image4: "images/products/kc.jpg", name: "NEXA Cotton Summer  Short-Sleeved T-Shirt Male Ins Streetwear Students", price: "2199 ",rating:"****" , brand: "NEXA",details:"" },
  { image1: "images/products/p3/p11.jpg",image2: "images/products/kc.jpg",image3: "images/products/kc.jpg",image4: "images/products/kc.jpg", name: "NEXA Cotton Summer  Short-Sleeved T-Shirt Male Ins Streetwear Students", price: "1999 " ,rating:"****",brand: "NEXA",details:"" },
  { image1: "images/products/p4/p13.jpg",image2: "images/products/kc.jpg",image3: "images/products/kc.jpg",image4: "images/products/kc.jpg", name: "NEXA Cotton Summer  Short-Sleeved T-Shirt Male Ins Streetwear Students", price: "2149 " ,rating:"****",brand: "NEXA",details:"" },
  { image1: "images/products/p5/p8.jpg",image2: "images/products/kc.jpg",image3: "images/products/kc.jpg",image4: "images/products/kc.jpg", name: "NEXA Cotton Summer  Short-Sleeved T-Shirt Male Ins Streetwear Students", price: "2149 " ,rating:"****",brand: "NEXA",details:"" },
  { image1: "images/products/p6/p5.jpg",image2: "images/products/kc.jpg",image3: "images/products/kc.jpg",image4: "images/products/kc.jpg", name: "NEXA Cotton Summer  Short-Sleeved T-Shirt Male Ins Streetwear Students", price: "2149 " ,rating:"****",brand: "NEXA",details:"" },
  { image1: "images/products/p7/p6.jpg",image2: "images/products/kc.jpg",image3: "images/products/kc.jpg",image4: "images/products/kc.jpg", name: "NEXA Cotton Summer  Short-Sleeved T-Shirt Male Ins Streetwear Students", price: "2149 " ,rating:"****",brand: "NEXA",details:"" },
  { image1: "images/products/p8/p9.jpg",image2: "images/products/kc.jpg",image3: "images/products/kc.jpg",image4: "images/products/kc.jpg", name: "NEXA Cotton Summer  Short-Sleeved T-Shirt Male Ins Streetwear Students", price: "2149 " ,rating:"****",brand: "NEXA",details:"" },
  { image1: "images/products/p9/p14.jpg",image2: "images/products/kc.jpg",image3: "images/products/kc.jpg",image4: "images/products/kc.jpg", name: "NEXA Cotton Summer  Short-Sleeved T-Shirt Male Ins Streetwear Students", price: "2149 " ,rating:"****",brand: "NEXA",details:"" },
  { image1: "images/products/p10/p15.jpg",image2: "images/products/kc.jpg",image3: "images/products/kc.jpg",image4: "images/products/kc.jpg", name: "NEXA Cotton Summer  Short-Sleeved T-Shirt Male Ins Streetwear Students", price: "2149 " ,rating:"****",brand: "NEXA",details:"" },
  { image1: "images/products/p11/p12.jpg",image2: "images/products/kc.jpg",image3: "images/products/kc.jpg",image4: "images/products/kc.jpg", name: "NEXA Cotton Summer  Short-Sleeved T-Shirt Male Ins Streetwear Students", price: "2149 " ,rating:"****",brand: "NEXA",details:"" },
  { image1: "images/products/p12/p10.jpg",image2: "images/products/kc.jpg",image3: "images/products/kc.jpg",image4: "images/products/kc.jpg", name: "NEXA Cotton Summer  Short-Sleeved T-Shirt Male Ins Streetwear Students", price: "2149 " ,rating:"****",brand: "NEXA",details:"" }

];

// Display products dynamically
let section = document.getElementById("product1");
products.forEach((product, index) => {
  let div = document.createElement("div");
  div.classList.add("pro-box");
  div.innerHTML = `
      <img src="${product.image1}" alt="${product.name}">
      <h5>${product.brand} </h5>
      <h4>${product.name} </h4>
        <h3>${product.rating}</h3>
      <h2>${product.price+'BDT'}</h2>
  `;
  div.onclick = () => selectProduct(index);
  section.appendChild(div);
});





let section2 = document.getElementById("product2");
products.forEach((product, index) => {
  let div = document.createElement("div");
  div.classList.add("pro-box");
  div.innerHTML = `
      <img src="${product.image1}" alt="${product.name}">
      <h5>${product.brand} </h5>
      <h4>${product.name} </h4>
        <h3>${product.rating}</h3>
      <h2>${product.price+'BDT'}</h2>
  `;
  div.onclick = () => selectProduct(index);
  section2.appendChild(div);
});

let section3 = document.getElementById("product3");
section3.classList.add("product1")

const fBtn = document.createElement('button');
fBtn.classList.add('next');
fBtn.innerText = "1";

fBtn.onclick = () =>{
  alert("Coming SOON!, STAY TUNED :)")
}


const sBtn = document.createElement('button');
sBtn.classList.add('next');
sBtn.innerText = "2";

sBtn.onclick = () =>{
  alert("Coming SOON!, STAY TUNED :)")
}


const nextBtn = document.createElement('button');
nextBtn.classList.add('next');
nextBtn.innerText = "NEXT";

nextBtn.onclick = () =>{
  alert("Coming SOON!, STAY TUNED :)")
}


section3.appendChild(fBtn);
section3.appendChild(sBtn);
section3.appendChild(nextBtn);





function selectProduct(index) {
  localStorage.setItem("selectedProduct", JSON.stringify(products[index]));
  window.location.href = "prodetails.html"; // Redirect
}