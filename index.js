dice = document.getElementById('buttonDiceRoll')
clock = document.getElementById('buttonClock')
goToVoid = document.getElementById('void')

dice.addEventListener('click', diceFun)
clock.addEventListener('click', clockFun)

function diceFun() {
    window.location.replace("./diceRoll.html")
    window.history.pushState({}, '', '/../index.html');
}

function clockFun() {

}

function voidFun() {

}