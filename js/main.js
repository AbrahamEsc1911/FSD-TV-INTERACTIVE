let onOfButton = document.getElementById("turn-button-section");
let interruptor = false;
let tvLed = document.getElementById("tv-led");
let btns = document.getElementsByClassName("general-buttons");
let arrayBtns = Array.from(btns);

let netflix = document.getElementById("netflix-btn");
let infobtn = document.getElementById("info-btn")
let today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();
let currentDate = `${day}/${month}/${year}`;
let infoDate = document.getElementById("info")

// SCREEN
let screen = document.getElementById("Screen");

// CHANNEL
let chanelUp = document.getElementById("chanel-up");
let countUp = 1;
let chanelDown = document.getElementById("chanel-down");

// VOLUMEN
let volUp = document.getElementById("vol-up");
let volDown = document.getElementById("vol-down");
let countVol = 0;
let volumenTotal = document.getElementById("volumen")



onOfButton.addEventListener("click", () => {
    interruptor = !interruptor;
    tvLed.classList.toggle("tv-led-on")
    screen.innerHTML = `<img id="size-screen" src="./img/on.gif" alt="inicial">`
    infoDate.classList.toggle("info-hide")
    volumenTotal.classList.toggle("volumen-hide")
    !interruptor
        ? screen.innerHTML = ``
        : null
})

for (let i = 0; i < arrayBtns.length; i++) {
    arrayBtns[i].addEventListener("click", () => {
        interruptor
            ? screen.innerHTML = `<img id="size-screen" src="./img/ch${i + 1}.gif" alt="inicial"><div id="Canal">Canal ${i + 1}</div>`
            : null
    })
}

netflix.addEventListener("click", () => {
    interruptor
        ? screen.innerHTML = `<img id="size-screen" src="./img/net.gif" alt="inicial">`
        : null
})

{/* <video id="size-screen" autoplay muted loop><source src="./img/ch6.mp4" type="video/mp4">
Your browser does not support the video tag.</video> */}


chanelUp.addEventListener("click", () => {

    if (interruptor && countUp <= 5) {
        countUp += 1
        screen.innerHTML = `<img id="size-screen" src="./img/ch${countUp}.gif" alt="inicial"><div id="Canal">Canal ${countUp}</div>`
    } else if (interruptor && countUp >= 5) {
        screen.innerHTML = `<img id="size-screen" src="./img/ch${countUp}.gif" alt="inicial"><div id="Canal">Canal ${countUp}</div>`
    } else {
        null
    }

})

chanelDown.addEventListener("click", () => {
    if (interruptor && countUp >= 2) {
        countUp -= 1 
        screen.innerHTML = `<img id="size-screen" src="./img/ch${countUp}.gif" alt="inicial"><div id="Canal">Canal ${countUp}</div>`
    } else if (interruptor && countUp <= 2) {
        screen.innerHTML = `<img id="size-screen" src="./img/ch${countUp}.gif" alt="inicial"><div id="Canal">Canal ${countUp}</div>`
    } else {
        null
    }
})

volUp.addEventListener("click", () => {
    volumenTotal.classList.remove("volumen-hide-transition") 
    if (interruptor && countVol <= 3) {
        countVol += 1
        volumenTotal.classList.add(`volumen${countVol}`)
        volumenTotal.innerHTML = ``
        console.log(volumenTotal)
    } else {
        null
    }
})

volDown.addEventListener("click", () => {
    volumenTotal.classList.remove("volumen-hide-transition")
    if(interruptor && countVol >= 1){
        countVol = countVol - 1
        volumenTotal.classList.remove(`volumen${countVol+1}`)
        volumenTotal.innerHTML = ``
        console.log(`le he dado al vol down y count vale ${countVol}`)
    } else if (interruptor && countVol == 0) {
        volumenTotal.innerHTML = `<img id="volumen" src="./img/mute.png" alt="mute">`
    } else {
        null
    }
        
})

volUp.addEventListener("mouseleave", () => {
    volumenTotal.classList.add("volumen-hide-transition")
})

volDown.addEventListener("mouseleave", () => {
    volumenTotal.classList.add("volumen-hide-transition")
})



infobtn.addEventListener("click", () => {
    if (interruptor) {
        infoDate.classList.toggle("hide-info-temporary")
        infoDate.innerHTML = `<p>fecha: ${currentDate}</p>`
    } else {
        null
    }
})