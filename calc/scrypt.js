var text =document.getElementById("text");
var but = document.getElementsByClassName("but");
var reset = document.getElementById("reset");
var elem = document.getElementById("container");

    for(var i=0;i<but.length; i++){
        but[i].onclick = function(){ 
            if(this.value === "="){
                text.value = eval(text.value);    
            }            
            else{
                text.value += this.value;
                   }
       }
}
reset.onclick = function(){
    text.value = "";
}


elem.onmousedown = function(e){

    var elemPosX = elem.offsetLeft;
    var elemPosY = elem.offsetTop;

    var mousePosX = e.clientX;
    var mousePosY = e.clientY; 

    var difX = mousePosX-elemPosX;
    var difY = mousePosY-elemPosY;
elem.style.cursor = "pointer";
elem.addEventListener("mousemove", func);

function func(e){
    elem.style.left = (e.clientX-difX)+"px";
    elem.style.top = (e.clientY-difY)+"px";

};
elem.addEventListener("mouseup", function (){
   elem.removeEventListener("mousemove", func);

})
}