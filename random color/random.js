let clk=document.getElementById("clickmee")
let body=document.getElementById("body")
let colors=["red","green","white","yellow","pink","lime","lemonyellow","blue","violet","purple"]



clk.addEventListener("click",function(){
    const colorIndex=Math.floor(Math.random() * colors.length)
    console.log(colorIndex)
    body.style.backgroundColor=colors[colorIndex]
    body.style.transition="1s linear"
    
    
})