

var askForPlay = document.getElementById("askForPlay");
var colors = document.getElementsByClassName("colors");
var randomColor = document.getElementById("randomColor");
var container = document.getElementsByClassName("container")[0];
var correct = document.getElementById("correct");
var wrong = document.getElementById("wrong");
var body = document.querySelector("body");
var mainLine =document.getElementsByClassName("main-line")[0];

askForPlay.addEventListener("click", getRandomColor);

/* Функция которая меняет цвет квадратов */
function getRandomColor(){  
    correct.style.display = "none";
    askForPlay.innerHTML = "New Colors"
    for (var i=0; i<colors.length; i++){        
        colors[i].style.backgroundColor = "rgb(" + getRendom(0,255)+"," + getRendom(0,255)+","+ getRendom(0,255) +")";  
        var j = getRendom(0,colors.length-1);
       randomColor.innerHTML = colors[j].style.backgroundColor;
       randomColor.style.fontSize = "40px";
       randomColor.style.fontStyle = "italic";
       randomColor.style.color = "white"
    }    
}

/* Рандомные числа */
function getRendom(min,max){
       return Math.floor(Math.random()*(max-min+1))+min;
}

/* поиск цвета */
for(i=0;i<colors.length;i++){
    colors[i].onclick = function(e){
        if(randomColor.innerHTML == this.style.backgroundColor ){
            correct.style.display = "block";
            askForPlay.innerHTML = "Play again?";
            wrong.style.display="none";
            mainLine.style.backgroundColor = this.style.backgroundColor;
            var child = container.children;
            for(j=0;j<child.length;j++){
                child[j].style.backgroundColor = this.style.backgroundColor;
            }
          
        }else{
            wrong.style.display="block";
            this.style.backgroundColor = "black";
       
        }
    }
}



