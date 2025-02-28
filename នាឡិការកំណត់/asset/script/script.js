
var x = document.getElementById("count_up");
var second=0;
var minute=0;
var hour=0;

function count_up(){

    if(second == 60){
        minute++;
        second=0;
    }

    if(minute == 60){
        hour++;
        minute=0;
        second=0;
    }


    x.innerText = `${hour}:${minute}:${second}`;
    second = second+1;   

}

setInterval(count_up,1000);
count_up()