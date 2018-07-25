var hours= document.getElementById("hours");
var min= document.getElementById("min");
var sec= document.getElementById("sec");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");
i=0;
count =0;
ho = 0;

function zero(num){
        if(num<10){
            return "0"+num;
        }else{
   return num;
        }
    }
    var timeSec;
    start.onclick = function(){

    var timeSec = setInterval(second,1000);
    
    function second(){ 
        i++;
        sec.innerHTML = zero(i);
        if(i == 60){
            sec.innerHTML = "00";
            i=0;
            count++
            min.innerHTML = zero(count);
            if(count == 60){
                min.innerHTML = "00";
                count=0;
                ho++;
                hours.innerHTML = zero(ho);
            }
        }

} 
stop.onclick = function (){
    clearInterval(timeSec);
}

reset.onclick = function(){
    hours.innerHTML = "00";
    min.innerHTML ="00";
    sec.innerHTML ="00";
}

}
 