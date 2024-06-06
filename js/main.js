let mainButton = document.getElementById("turn-button-section")
let interruptor = false
let allButtons = document.getElementsByClassName("general-buttons")
let arrayButtons = Array.from(allButtons)
let ligthOnOff = document.getElementById("tv-led")


mainButton.addEventListener("click", () => {
    ligthOnOff.classList.toggle("tv-ligth-turned-on")
    interruptor = !interruptor
    console.log(interruptor)
})
for(let i = 0; i <= allButtons.length; i++){
    allButtons[i].addEventListener("click", () =>{
        interruptor
        ?console.log(`Estás viendo el canal ${i}`)
        :console.log("la tv está apagada")
    })
}