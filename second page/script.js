var button = document.getElementById("up");
window.onscroll = function up(){
   if(window.pageYOffset<200) {
       button.style.display = "none"
   }else{
    button.style.display = "block"
   }
}