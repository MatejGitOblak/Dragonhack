clock = document.getElementById('buttonClock')
goToVoid = document.getElementById('void')
coin = document.getElementById('coin')

clock.addEventListener('click', clockFun)
goToVoid.addEventListener('click', voidFun)
coin.addEventListener('click', coinFun)

function coinFun() {
    window.location.replace("./coin.html")
    window.history.pushState({}, '', '/../index.html');
}

function clockFun() {
    window.location.replace("./testAnim/testAnim.html")
    window.history.pushState({}, '', '/../index.html');
}

let stevecVoid = 0

function voidFun() {
    console.log(stevecVoid)
    btn = document.getElementById('void')
    if (stevecVoid == 0) {
        btn.style.backgroundImage = 'radial-gradient(100% 100% at 100% 0, #5adaff 0, #FF8000 100%)'
        btn.innerHTML = ('STOP IT')
        stevecVoid++
    }
    else if (stevecVoid == 1) {
        btn.style.backgroundImage = 'radial-gradient(100% 100% at 100% 0, #5adaff 0, #FF0000 100%)'
        btn.innerHTML = ("I'M WARNING YOU")
        stevecVoid++
    }
    else if (stevecVoid == 2) {
        btn.style.backgroundImage = 'radial-gradient(100% 100% at 100% 0, #5adaff 0, #A40000 100%)'
        btn.innerHTML = ("...")
        stevecVoid++
    }
    else if (stevecVoid == 3) {
        btn.style.backgroundImage = 'radial-gradient(100% 100% at 100% 0, #5adaff 0, #7D0000 100%)'
        btn.innerHTML = ("LAST CHANCE")
        stevecVoid++
    }
    else if (stevecVoid == 4) {
        window.location.replace("./void.html")
        window.history.pushState({}, '', '/../index.html');
    }
}