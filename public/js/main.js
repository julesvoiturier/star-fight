import * as FUNCTION from './modules/functions.js'
import * as INSTANCE from './modules/instances.js'


//! CHOOSE FIGHTER CLICK EFFECT

let chose1 = false
let chose2 = true

INSTANCE.choseFighter1.addEventListener("click", () => {
    chose1 = true
    chose2 = true
    INSTANCE.choseFighter1.firstElementChild.classList.add("theChosenOne")
    INSTANCE.choseFighter1.nextElementSibling.firstElementChild.classList.remove("theChosenOne")
})

INSTANCE.choseFighter2.addEventListener("click", () => {
    chose2 = true
    chose1 = false
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
    window.location.reload();
    console.log("hello");
})

//! END OF GAME SCREEN

INSTANCE.body.addEventListener("click", () => {
    if (FUNCTION.endGame == true) {
        window.location.reload();
    }
})

INSTANCE.body.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault()
        INSTANCE.body.click()
    }
})


//! START GAME BUTTON EVENT

INSTANCE.startGame.addEventListener("click", () => {

    if (INSTANCE.fighter1 != null) {
        INSTANCE.soundtrack.play()

        if (chose1 == true) {
            INSTANCE.fighterN1.classList.add("fightPosition1")
        } else if (chose2 == true) {
            INSTANCE.fighterN1.classList.add("fightPosition1Bis")
        }

        INSTANCE.fighterN1.classList.add("fightPosition1")

        INSTANCE.menu.style.display = "none"
        INSTANCE.game.style.display = "flex"
        INSTANCE.detailsSection.display = "none"

        INSTANCE.setButtons()

        let startsFirst = Math.floor(Math.random() * 2) + 1
        if (startsFirst == 1) {
            INSTANCE.animation.classList.add("youAttack")
            INSTANCE.animation.classList.remove("heAttacks")
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
    }
})



//! ATTACK WHEN CLICK

INSTANCE.attackButtons.addEventListener("click", (e) => {
    if (FUNCTION.noClick != true) {

        let button = e.target
        INSTANCE.fighterN1.classList.add("attackmove")
        setTimeout(() => {
            INSTANCE.fighterN1.classList.remove("attackmove")
        }, 200);
        FUNCTION.chooseAnimation(button)
        if (button.innerHTML != "STARSHIELD") {
            setTimeout(() => {
                INSTANCE.fighterN2.classList.toggle("blink")
            }, 200);
            setTimeout(() => {
                INSTANCE.fighterN2.classList.toggle("blink")
            }, 300);
            setTimeout(() => {
                INSTANCE.fighterN2.classList.toggle("blink")
            }, 400);
            setTimeout(() => {
                INSTANCE.fighterN2.classList.toggle("blink")
            }, 500);
    
        }

        INSTANCE.fightMessages.classList.remove("messageAnimation")
        setTimeout(() => {

            if (FUNCTION.noClick != true) {

                INSTANCE.fightMessages.innerHTML = `YOU USED ${button.innerHTML}`
                INSTANCE.fightMessages.classList.add("messageAnimation")
                FUNCTION.attack(button)
            }
        }, 500);
    }
})