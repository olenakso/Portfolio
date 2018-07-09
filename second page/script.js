


var carusel = document.getElementById("myCarousel");
var close = document.getElementById("close1")
var img = document.getElementsByClassName("img-one");
var buttons = document.getElementById("buttonss");

for(var i=0; i<img.length; i++){
    img[i].addEventListener("click",function func(){
        close.style.display = "block";
        close.style.position = "absolute";
        close.style.top = "30%";
        close.style.left = "2%"
        close.style.height = "1500px;"
    })
}

buttons.addEventListener("click",function(){
    close.style.display = "none";
    
    })

    var button = document.getElementById("up");
    window.onscroll = function up(){
       if(window.pageYOffset>200) {
           button.style.display = "block"
       }else{
        button.style.display = "none"
       }
    }