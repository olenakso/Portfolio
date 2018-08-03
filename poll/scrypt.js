var button = document.getElementById("check");
var parent = document.getElementById("parent")
var elem = document.querySelectorAll('input[type=radio]');

var correct = [];
var wrong = [];
sum1 = 0;
sum2 = 0;
button.onclick = function(){
    for(var i=0;i<elem.length;i++){
       if(elem[i].checked && elem[i].dataset.type =="true"){
        correct.push(1);
       }else if(elem[i].checked && !elem[i].dataset.type) {
        wrong.push(1);
       }
    }


    for(var i=0; i<correct.length; i++){
        sum1 +=correct[i];
    }
    for(var j=0; j<wrong.length; j++){
        sum2 +=wrong[j];
    }

    var persent = (sum1/(sum1+sum2)*100).toFixed(2);
    if(correct.length ==0 && wrong.length ==0){
        alert("Вы не ответили на вопросы!");
        return false;
    }else{
            alert("правильных ответов: "+ sum1 +"\n" + "неправильных ответов: " + sum2+ "\n" + "процент правильных ответов: " + persent + "%") ;
        }
 
   

}

