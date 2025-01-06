let interval;

    let minutes=25;
    let seconds=0;
    let numberOfBreaks=1;
    let state="pomodoro";
    let on=false;
    function start(){
  
        on=true;
       interval= setInterval(function() {
            if (minutes==0 && seconds==0) {

                if (numberOfBreaks%4!=0 && state=="pomodoro") {
            
                    switchToShortBreak();
                    state="short break";
                    }
                else if(state=="pomodoro"){
                    switchToLongBreak();
                    state="long break";

                }
                else{
                    switchToShortPomodoro();
                    state="pomodoro";


                }
                

                
            }
            if (seconds>0) {
                seconds--;
                    
                }else if(minutes>0){
                    minutes--;
                    seconds=59;
                }

                display();

        }, 1000);
    }


function display(){


    if (minutes>9) {
        document.getElementById("minutes").textContent=minutes;
        
    }else{
        document.getElementById("minutes").textContent='0'+minutes;

    }


    if (seconds>9) {
        document.getElementById("seconds").textContent=seconds;
        
    }else{
        document.getElementById("seconds").textContent='0'+seconds;

    }
}

function switchToShortPomodoro(){

    document.getElementsByTagName("body")[0].style="";
    document.getElementById("button").style="";
    document.getElementById("pomodoro").style="";
    document.getElementById("shortBreak").style="";
    document.getElementById("longBreak").style="";

    minutes=25;
    seconds=0;
    display();
    clearInterval(interval);
    start();
  
    
    }
    

    function switchToShortBreak(){



 document.getElementsByTagName("body")[0].style="background-color:rgb(56, 133, 138) !important;"






document.getElementById("button").style="color:rgb(56, 133, 138) !important;";

document.getElementById("pomodoro").style="background-color:  transparent !important;";
document.getElementById("shortBreak").style="background-color:  rgba(0, 0, 0, 0.15);";
document.getElementById("longBreak").style="";

minutes=5;
seconds=0;
display();
clearInterval(interval);

start();
numberOfBreaks++;
}

function switchToLongBreak(){
    
    document.getElementsByTagName("body")[0].style="background-color:rgb(57, 112, 151) !important; "
    document.getElementById("button").style="color:rgb(57, 112, 151) !important;";
    
    document.getElementById("pomodoro").style="background-color:  transparent !important;";
    document.getElementById("shortBreak").style="";
    document.getElementById("longBreak").style="background-color:  rgba(0, 0, 0, 0.15);";



    minutes=15;
    seconds=0;
    display();
    clearInterval(interval);

    start();
    numberOfBreaks++;


}





document.getElementById("button").addEventListener("click",()=>{
  
    if(on==false){
        on=true;
        document.getElementById("button").textContent="pause";
    start();


    }else{
        on=false;
        document.getElementById("button").textContent="start";
        clearInterval(interval);
    }




}

);
