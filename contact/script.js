

 var forms = document.querySelectorAll('.myForm');

 for(var i=0; i<forms.length; i++){
    forms[i].addEventListener("click",function cleare(){
        this.style.border= "2px solid gray"  
    })
}


