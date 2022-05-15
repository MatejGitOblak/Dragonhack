let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");
let counter = 0
let won = 0 

flipBtn.addEventListener("click", () => {
    counter++
    let option = document.getElementById("opcije").value
    if (counter > 10) {
        document.getElementById('ttl').innerHTML = "It's really not always 50/50 ;)"
    }
    if (counter > 20) {
        document.getElementById('ttl').innerHTML = "50/50? More like 5/95!"
    }
    if (counter > 30) {
        document.getElementById('ttl').innerHTML = "This is really 'odd'"
    }
    if (counter > 40) {
        document.getElementById('ttl').innerHTML = "You are still here?"
    }
    if (counter > 80) {
        document.getElementById('ttl').innerHTML = "Sorry, no " + option + " here..."
    }
    
    let i = Math.floor(Math.random()*100);
    coin.style.animation = "none";
    
    if(option == "Heads"){
        if(i > 95){
            setTimeout(function(){
                coin.style.animation = "spin-heads 0.5s forwards";
            }, 100);
            heads++;
            document.getElementById('divTails').style.display = 'none'
            document.getElementById('divHeads').style.display = 'block'
            won++
        }
        else{
            setTimeout(function(){
                coin.style.animation = "spin-tails 0.5s forwards";
            }, 100);
            document.getElementById('divTails').style.display = 'block'
            document.getElementById('divHeads').style.display = 'none'
            
        }
    setTimeout(3000);
    }
    else{
        if(i<95){
            setTimeout(function(){
                coin.style.animation = "spin-heads 0.5s forwards";
            }, 100);
            document.getElementById('divTails').style.display = 'none'
            document.getElementById('divHeads').style.display = 'block'
        }
        else{
            setTimeout(function(){
                coin.style.animation = "spin-tails 0.5s forwards";
            }, 100);
            document.getElementById('divTails').style.display = 'block'
            document.getElementById('divHeads').style.display = 'none'
        }
    setTimeout(3000);
    }
    document.getElementById('wins').innerHTML = "WINS - " + won
});
