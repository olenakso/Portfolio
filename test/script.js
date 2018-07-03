


    
 /* accordion */   
    $(".acc-head").on("click",function func(){
        $(this).next().toggleClass("show");
  })

/* tabs */
$('#tabs').tabs();

/*  $(".item").click(function func(){
   $(this).css({background:"white", border:"1px solid gray", borderBottom:"none"});   
   $(this).unbind("click", func);
})

$(".item").one("click", ".item-color",function fu(){
    $(this).css('color',"#228ebe");
    $(this).unbind("click", fu); 
 })
   */


 //* scroll up */
var ups = document.getElementById("up");
window.onscroll = function up(){
    ups.style.display = (window.pageYOffset>"200"?"block":"none");
}


/* var item = document.querySelectorAll(".item");


  
    for(i=0; i<item.length;i++){
        item[i].addEventListener("click", function func(){             
       this.style.background = "white";
       this.style.border = "1px solid gray";
       this.style.borderBottom = "1px solid white";   
       
    })};

    var itemColor = document.querySelectorAll(".item-color");
    for(j=0; j<itemColor.length;j++){
        itemColor[j].addEventListener("click", function fu(){             
        this.style.color = "#228ebe";   
     
    })} */
    