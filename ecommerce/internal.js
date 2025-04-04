const displaycart= document.getElementById("displayCart");

document.querySelectorAll("#addtocart").forEach(button=>{
    button.addEventListener("click",(e)=>{
        const card= e.target.closest("#card");
        addtocart(card);
        updatenotification();
    })
})


function addtocart(card){
    const name= card.querySelector("#name").textContent;
    const price= card.querySelector("#price").textContent;
    
    let itemfound=false;
    const ifname = displaycart.querySelectorAll("#name");
    
  
    
    for (let item of ifname){
        if(item.textContent===name){
            const increase= item.closest(".div-cart").querySelector("#number");
            let incr= parseInt(increase.textContent);
            incr++;
            increase.textContent=incr;
            itemfound=true;
            break;
        
        }
    }
   if(!itemfound){
    const itemsdiv= document.createElement("div");
    itemsdiv.classList.add("div-cart")
    itemsdiv.innerHTML=`
                        <div>                    
                        <h3 id="name">${name}</h3>
                        <span id="price">${price}</span>
                        </div>
                        <div class="divquantity">
                        <button id="inc">+</button>
                        <span id="number" class="number">1</span>
                        <button id="dec">-</button>
                        </div>
                        <button class="remove">Remove</button>
                        
    `
    displaycart.appendChild(itemsdiv)


    const remove= itemsdiv.querySelectorAll(".remove")
    remove.forEach(button=>{
        button.addEventListener("click",()=>{
            itemsdiv.remove();
            updateprice();
        })
    })

    
    


    const divquantity= itemsdiv.querySelectorAll(".divquantity");
    divquantity.forEach(element=>{
        element.addEventListener("click",event=>{
            const number= itemsdiv.querySelector("#number");
            const dec = itemsdiv.querySelector("#dec");
            let quantity= parseInt(number.textContent);

            if(event.target.id==="dec" && quantity>1){
                quantity--;
                if (quantity===1){
                    dec.style.color= "red"
                }
            }
            else if(event.target.id==="inc"){
                quantity++;
                dec.style.color="green";
            }
            number.textContent=quantity;
            updateprice();
        })
    })
}
updateprice();
}
 
const updatenotification=()=>{
    let notify= document.getElementById("notify")
    let notification= parseInt(notify.textContent);
    
    notify.textContent= notification + 1;
}

function display(){
    let notify= document.getElementById("notify")
    let notification= parseInt(notify.textContent);
    if(notification===0){
        alert("Your cart is empty! Please add something to your cart..")
    }
   else{
    const cart=document.getElementById("displayCart");
    cart.style.visibility = (cart.style.visibility === "hidden")? "visible" : "hidden";
   }
}
document.querySelector(".notify").addEventListener("click", display);


const updateprice=()=>{
    const total= document.getElementById("total")
    const div_cart=  displaycart.querySelectorAll(".div-cart")
    let totalp=0;
     
    div_cart.forEach(cart=>{
        const amount= cart.querySelector("#price");
        const quan= cart.querySelector("#number");
        const tamount= parseFloat(amount.textContent);
        const quantno= parseInt(quan.textContent);

        totalp= tamount*quantno;
    })
    total.textContent= `Total: $${totalp}`;
}
    

function close(){
    const close= document.getElementById("close")
    const displaycart= document.getElementById("displayCart");
    close.addEventListener("click",()=>{
        displaycart.remove();
    })
}
document.getElementById("close").addEventListener("click",close);

