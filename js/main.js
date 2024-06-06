let onOfButton = document.getElementById("turn-button-section");
let interruptor = false;
let tvLed = document.getElementById("tv-led");
let btns = document.getElementsByClassName("general-buttons");
let arrayBtns = Array.from(btns);

let netflix = document.getElementById("netflix-btn")

let time = new Date;

let screen = document.getElementById("Screen");





onOfButton.addEventListener("click", () => {
    interruptor = !interruptor;
    tvLed.classList.toggle("tv-led-on")
    screen.innerHTML = `<img id="size-screen" src="./img/ch1.gif" alt="inicial">`
    !interruptor
    ?screen.innerHTML = ``
    : null
})

for(let i = 0; i<arrayBtns.length; i++){
    arrayBtns[i].addEventListener("click", () => {
        interruptor
        ?screen.innerHTML = `<img id="size-screen" src="./img/ch${i+1}.gif" alt="inicial"><div id="Canal">Canal ${i+1}</div>`
        :null
    })

    }

    netflix.addEventListener("click", () => {
        interruptor
        ?screen.innerHTML = `<img id="size-screen" src="./img/net.gif" alt="inicial">`
        :null
    })

