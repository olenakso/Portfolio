var send = document.getElementById("send");
var elem = document.forms[0].elements
var errors = document.getElementById("errors");
send.onclick = function(e){
    for(i=0; i<elem.length;i++){
        if(elem[i].value == "") {
            errors.style.display = "block";
            return false;
       }
    }
  
}


for (i=0; i<elem.length;i++){
    elem[i].onchange = function(e){
        var pattern = this.dataset.val;
        var correctMail = this.value;
        var  msj = this.dataset.msj;
        var userMailMsj = this.dataset.msjId;
      var res = correctMail.search(pattern);
      if (res == -1){
        document.getElementById(userMailMsj).innerHTML = msj;
        document.getElementById(userMailMsj).style.display = "inline";
        this.className = "error";
      }else{
        document.getElementById(userMailMsj).style.display = "none"; 
        this.className = "valid";
      }
    }
}

var password = document.forms[0].pass;
var Confermpassword = document.forms[0].passConferm;
var userPassMsj = document.getElementById("userPassMsj");
var userPassConfMsj = document.getElementById("userPassConfMsj");


Confermpassword.onchange = function(){
    if(password.value !== Confermpassword.value){
        userPassConfMsj.style.display = "inline";
        Confermpassword.className = "error";
    }else{
        Confermpassword.classList.remove("error");
        userPassConfMsj.style.display = "none";
    }
}


