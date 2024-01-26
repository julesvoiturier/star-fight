import * as FUNCTION from './modules/functions.js'
import * as INSTANCE from './modules/instances.js'


//! CHOOSE FIGHTER CLICK EFFECT

INSTANCE.choseFighter1.addEventListener("click", () => {
    INSTANCE.choseFighter1.firstElementChild.classList.add("theChosenOne")
    INSTANCE.choseFighter1.nextElementSibling.firstElementChild.classList.remove("theChosenOne")
})

INSTANCE.choseFighter2.addEventListener("click", () => {
    INSTANCE.choseFighter2.firstElementChild.classList.add("theChosenOne")
    INSTANCE.choseFighter2.previousElementSibling.firstElementChild.classList.remove("theChosenOne")
})

//! DETAILS BUTTON

INSTANCE.details1.addEventListener("click", () => {
    INSTANCE.menu.style.display = "none"
    INSTANCE.game.style.display = "none"
    INSTANCE.detailsSection.style.display = "flex"
})


//! RESUME
INSTANCE.resume.addEventListener("click", () => {
    INSTANCE.menu.style.display = "none"
    INSTANCE.game.style.display = "flex"
    INSTANCE.detailsSection.style.display = "none"
})

//! RESTART BUTTON EVENT

INSTANCE.startAgain.addEventListener("click", () => {
    INSTANCE.menu.style.display = "flex"
    INSTANCE.game.style.display = "none"
    INSTANCE.detailsSection.display = "none"
    INSTANCE.choseFighter1.firstElementChild.classList.remove("theChosenOne")
    INSTANCE.choseFighter1.nextElementSibling.firstElementChild.classList.remove("theChosenOne")
})


//! START GAME BUTTON EVENT

INSTANCE.startGame.addEventListener("click", () => {

    if (INSTANCE.fighter1 != null) {

        INSTANCE.menu.style.display = "none"
        INSTANCE.game.style.display = "flex"
        INSTANCE.detailsSection.display = "none"

        INSTANCE.setButtons()

        let startsFirst = Math.floor(Math.random() * 2) + 1
        if (startsFirst == 1) {
            INSTANCE.fightMessages.innerHTML = `${INSTANCE.otherFighter1.characterName} STARTS`
            INSTANCE.fightMessages.classList.add("messageAnimation")
            setTimeout(() => {
                INSTANCE.fightMessages.classList.remove("messageAnimation")
            }, 1500);
            setTimeout(() => {
                FUNCTION.otherAttack()
            }, 2000);
        } else if (startsFirst == 2){
                INSTANCE.fightMessages.innerHTML = "YOU START"
                INSTANCE.fightMessages.classList.add("messageAnimation")
        }
        startsFirst = 3
    } else {
        alert("you must select a player")
    }
})



//! ATTACK WHEN CLICK

INSTANCE.attackButtons.addEventListener("click", (e) => {
    if (FUNCTION.noClick != true) {
        let button = e.target
        INSTANCE.fightMessages.classList.remove("messageAnimation")
        setTimeout(() => {
            if (FUNCTION.noClick != true) {
                INSTANCE.fightMessages.innerHTML = `YOU USE ${button.innerHTML}`
                INSTANCE.fightMessages.classList.add("messageAnimation")
                FUNCTION.attack(button)
            }
        }, 500);
    }
})