var myText ="MANGASSOUBA CHEIKH";
var myArray = myText.split("");
var timerLooper;

 function loop(){
   if(myArray.length>0){
      document.getElementById("name").innerHTML += myArray.shift();

            }else {
                clearTimeout(timerLooper);

           }  
            timerLooper= setTimeout('loop()',70);
        }
        loop();


 function beep(){
    var beep=new Audio();
    beep.src ="martian-gun.mp3";
    beep.play();  

        }