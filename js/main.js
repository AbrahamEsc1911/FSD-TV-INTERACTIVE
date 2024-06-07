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

let screen = document.getElementById("Screen");
let chanelUp = document.getElementById("chanel-up");
let countUp = 0;

let chanelDown = document.getElementById("chanel-down");



onOfButton.addEventListener("click", () => {
    interruptor = !interruptor;
    tvLed.classList.toggle("tv-led-on")
    screen.innerHTML = `<img id="size-screen" src="./img/on.gif" alt="inicial">`
    infoDate.classList.toggle("info-hide")
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
        countUp -= 1 >= 1
        screen.innerHTML = `<img id="size-screen" src="./img/ch${countUp}.gif" alt="inicial"><div id="Canal">Canal ${countUp}</div>`
    } else if (interruptor && countUp <= 2) {
        screen.innerHTML = `<img id="size-screen" src="./img/ch${countUp}.gif" alt="inicial"><div id="Canal">Canal ${countUp}</div>`
    } else {
        null
    }
})

infobtn.addEventListener("click", () => {
  if(interruptor)  {
    infoDate.classList.toggle("hide-info-temporary")
    infoDate.innerHTML = `<p>fecha: ${currentDate}</p>`
  } else{
    null
  }
})