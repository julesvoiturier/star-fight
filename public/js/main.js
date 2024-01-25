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

let startsFirst = Math.floor(Math.random() * 2) + 1
if (startsFirst == 1) {
    console.log("he starts");
    // INSTANCE.attackButtons.style.pointerEvents = "none"
    FUNCTION.otherAttack()
}
startsFirst = 1

INSTANCE.attackButtons.addEventListener("click", (e) => {
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