let time = window.prompt("Enter the number: ");

let promoTime = time*60;

let counting = document.getElementById("countdown");

function startTimer(){
    let promoTimer = setInterval(function(){
        if(promoTime <= 0){
            clearInterval(promoTime);
            counting.innerHTML = "Countdown Ended"
        }
        else{
            promoTime--;

            const days = Math.floor(promoTime/3600/24);
            const hours = Math.floor(promoTime/3600) %24;
            const min = Math.floor(promoTime/60)%60;
            const sec = Math.floor(promoTime%60);

            counting.innerHTML = `Time Left: ${zero(days)} days : ${zero(hours)} hours : ${zero(min)} mins : ${zero(sec)} secs`
        }
    },1000)
}

function zero(t){
    if(t<10){
        return `0${t}`;
    }
    else {
        return t;
    }
}

startTimer(time);