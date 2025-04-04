const products = [
    { id: 1, name: "Anjeer(Badam)", price: 550 , src:"0014456_fig-anjeer_370.png"},
    { id: 2, name: "Raisin(Kishmish)", price: 125, src:"0014454_raisin-kishmish_370.png"} ,
    { id: 3, name: "Almond(Badam)", price: 200, src:"0014453_almond-badam_370.png"} ,
    { id: 4, name: "Cashew(Kaju)", price: 400, src:"0014452_cashew-kaju_370.png"},
    { id: 5, name: "Walnut(Akhrot-magaj)", price: 350, src:"0014455_walnut-akhrot-magaj_370.png"},
    { id: 6, name: "Pistachio(Pista)", price: 325, src:"0014457_pistachio-pista_370.png"},
    { id: 7, name: "Hazelnut", price:400 , src:"0014459_hazelnut_370.png"},
    { id: 8, name: "Pecan Nut", price: 600, src:"0014460_pecan-nut_370.png"},
    { id: 9, name: "Pinenut(Chilgoza)", price: 1625 , src:"0014461_pinenut-chilgoza_370.jpeg"}

  ];//initializing an array of product object with properties id, name, price, src 
  
  let cart = [];//initializing an empty array to hold the items added to cart
  
  // Display products
  const productContainer = document.querySelector(".products");
  products.forEach((product) => {           //loop through each product from products array
    const productCard = document.createElement("div"); //creats a div element for each product
    productCard.className = "product-card"; //adding class dor each div named product-card
    productCard.innerHTML = `
      <img src="${product.src}" width="200px" height="200px"/ > 
      <h3>${product.name}</h3>
      <p>Price: Rs ${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Add to Cart</button>
    `;  //sets innerHTML with img, name, price, button 
    productContainer.appendChild(productCard); //appends each product card to product container
  });
  
  // Add to cart
  function addToCart(id, name, price) {  //addTocart() is created with id, name, price as parameters
    const itemIndex = cart.findIndex((item) => item.id === id);  //checks if the product already exists in the cart or not

    if (itemIndex > -1) {  // if product exists then increases the quantity
      cart[itemIndex].quantity += 1;
    } 
    else {  // if not, adds the new product to the cart with quantity of 1
      cart.push({ id, name, price, quantity: 1 });
    }
    displayCart(); //calls the displaycart() to update the cart display
  }
  
  // Display cart
  function displayCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";  //clears the cart display by resetting the innerHTML
    let total = 0;
  
    cart.forEach((item, index) => {
      total += item.price * item.quantity;  //calculates the total price by summing up the price and quantity of each item in the cart
      const itemDiv = document.createElement("div");  //for each item in the cart, creats a div element 
      itemDiv.innerHTML = `
        ${item.name} - Rs ${item.price.toFixed(2)} x ${item.quantity}
        <button onclick="updateQuantity(${index}, 'decrease')">-</button>
        <button onclick="updateQuantity(${index}, 'increase')">+</button>
        <button onclick="removeFromCart(${index})">Remove</button>
      `; //div element displaying the items name, price,quantity, buttons for updating quantity and removing items
      cartItems.appendChild(itemDiv);
    });
  
    document.getElementById("total-price").textContent = `Total: Rs ${total.toFixed(2)}`;// updates the total price display element with the calculated total
  }
  
  // Update quantity()
  function updateQuantity(index, action) {  //increases or decreases the quantity of a cart item based on the action(increase or decrease)
    if (action === "increase") {
      cart[index].quantity += 1;
    } else if (action === "decrease" && cart[index].quantity > 1) {
      cart[index].quantity -= 1;
    }
    displayCart(); //calls the displaycart() to refresh the cart display
  }
  
  // Remove from cart()
  function removeFromCart(index) {  //removes the item from cart array based on its index
    cart.splice(index, 1); //it removes one item from the index
    displayCart(); //calls displaycart() to update cart 
  }
  
  // Checkout
  const modal = document.getElementById("receipt-modal");
  const receiptDetails = document.getElementById("receipt-details");
  
  document.getElementById("checkout-btn").addEventListener("click", () => {
    receiptDetails.innerHTML = cart.map(  //this line first maps through each item in the cart array 
      (item) => `${item.name} - Rs ${item.price.toFixed(2)} x ${item.quantity}`
    ).join("<br>");  //joins all these formatted strings into a single string with <br>(line break) between each item , then assigns it to receiptDetails.innerHTML, effectively displaying a list of cart items in the receipt section
    modal.classList.remove("hidden");  //removes hidden class from it
  });//om clicking on checkout button , lists out cart item details in the receipt and shows the modal
  
  document.getElementById("confirm-btn").addEventListener("click", () => {
    alert("Purchase confirmed!");
    cart = [];
    displayCart();
    modal.classList.add("hidden");
  });//om conforming the purchases , sends an alert, clears the cart , refreshes the cart display, and hides the modal
  
  document.getElementById("close-modal-btn").addEventListener("click", () => {
    modal.classList.add("hidden");
  });// on closing the modal , hides the modal