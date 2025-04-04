function Display(){
    var time= new Date();
    var hr= time.getHours();
    var min= time.getMinutes();
    var secs= time.getSeconds();
    var session= document.getElementById("session")


    if (hr>= 12){
        session.innerHTML="PM"
    }
    else{
        session.innerHTML="AM"
    }

    document.getElementById("hrs").innerHTML=hr;
    document.getElementById("mins").innerHTML=min;
    document.getElementById("sec").innerHTML=secs;
}
setInterval(Display,1000)