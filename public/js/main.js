import * as FUNCTION from './modules/functions.js'
import * as CLASS from './modules/class.js'
import * as INSTANCE from './modules/instances.js'

INSTANCE.choseFighter1.addEventListener("click", () => {
    INSTANCE.choseFighter1.firstElementChild.classList.add("theChosenOne")
    INSTANCE.choseFighter1.nextElementSibling.firstElementChild.classList.remove("theChosenOne")
})

INSTANCE.choseFighter2.addEventListener("click", () => {
    INSTANCE.choseFighter2.firstElementChild.classList.add("theChosenOne")
    INSTANCE.choseFighter2.previousElementSibling.firstElementChild.classList.remove("theChosenOne")
})

// INSTANCE.startGame.addEventListener("click", () => {
//     INSTANCE.choseFighter1.style.pointerEvents = "none"
//     INSTANCE.choseFighter2.style.pointerEvents = "none"
// })

let startsFirst = Math.floor(Math.random() * 2) + 1
if (startsFirst == 1) {
    INSTANCE.fightMessages.innerHTML = "FIGHTER 2 STARTS"
    INSTANCE.fightMessages.classList.add("messageAnimation")
    setTimeout(() => {
        // INSTANCE.attackButtons.style.pointerEvents = "none"
        INSTANCE.fightMessages.classList.remove("messageAnimation")
        FUNCTION.otherAttack()
    }, 3000);
} else if (startsFirst == 2){
        INSTANCE.fightMessages.innerHTML = "YOU START"
}
startsFirst = 3

INSTANCE.attackButtons.addEventListener("click", (e) => {
    INSTANCE.fightMessages.classList.add("messageAnimation")

    let button = e.target
    FUNCTION.attack(button)
})


// if (startsFirst == 1) {
//     console.log("you start");
// } else {
//     console.log("he starts");
// }

// while (INSTANCE.game == true) {

//     if (INSTANCE.game == true) {

//         if (startsFirst == 1) {
//             console.log("you attack");
//             FUNCTION.attack()
//         }
//     }

//     if (INSTANCE.game == true) {
//         console.log("he attacks");
//         FUNCTION.otherAttack()
//     }
//     startsFirst = 1
// }