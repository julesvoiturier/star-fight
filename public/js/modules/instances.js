import * as CLASS from './class.js'


// HEROS
export let fighter1 = null
export let fighterChoice1 = new CLASS.Character1 ("DEMOLISHER", 100, 500, 500, "LASERBEAM", "MACHINEGUN", "STARSHIELD", "LIGHTSPEED" )
export let fighterChoice2 = new CLASS.Character2 ("James", 100, 400, 400, "LASERBOMB", "STARSWORD", "MAGNETAR", "DARKMATTER")

// BOSSES
export let otherFighterN1 = new CLASS.OtherFighter ("ENEMY-1", 50, 500, 500, "LASERBOMB", "STARSWORD", "LIGHTSPEED", "DARKMATTER"  )
export let otherFighterN2 = new CLASS.OtherFighter ("ENEMY-2", 50, 500, 500, "LASERBEAM", "MACHINEGUN", "STARSHIELD", "MAGNETAR" )

// CHOOSE FIGHTER
export let choseFighter1 =document.querySelector(".fighter1")
export let choseFighter2 =document.querySelector(".fighter2")


// ATTACK BUTTONS
export let attackButtons = document.querySelector("#attacks")
export let attackButtonsAll = document.querySelectorAll(".attackButton")
export let button1 = document.querySelector("#attack1")
export let button2 = document.querySelector("#attack2")
export let button3 = document.querySelector("#attack3")
export let button4 = document.querySelector("#attack4")


// HEALTH BARS
export let yourHealthBar = document.querySelector(".fighter1 .healthBar .actualHealth")
export let othersHealthBar = document.querySelector(".fighter2 .healthBar .actualHealth")

// START GAME BUTTON
export let startGame = document.querySelector("#startGame")
export let startAgain = document.querySelector(".startAgain")
export let fightersDiv = document.querySelector(".fighters")
export let details1 = document.querySelectorAll(".rules")[0]
export let resume = document.querySelector(".resume")

// FIGHT MESSAGES
export let fightMessages = document.querySelector("#fightMessages")

// GAME SECTIONS
export let menu = document.querySelector("#menu")
export let game = document.querySelector("#game")
export let detailsSection = document.querySelector("#explainAttacks")



// WHEN PAGE RELOADS, RANDOMLY CREATES THE OTHER FIGHTER

export let otherFighter1

export let bossAttack1
export let bossAttack2
export let bossAttack3
export let bossAttack4

startGame.addEventListener("click", () => {
    let randomFighter = Math.floor(Math.random() * 2) + 1
    switch (randomFighter) {
        case 1:
            otherFighter1 = otherFighterN1
            break;
        case 2:
            otherFighter1 = otherFighterN2
            break;
        // case 3:
        //     otherFighter1 = otherFighterN3
        //     break;
    }
    bossAttack1 = otherFighter1.attackName1
    bossAttack2 = otherFighter1.attackName2
    bossAttack3 = otherFighter1.attackName3
    bossAttack4 = otherFighter1.attackName4
})


// DEFINE FIGHTER 1 AS PLAYER'S SELECTION + SETTING ATTACK BUTTONS TITLE

choseFighter1.addEventListener("click", () => {
    fighter1 = fighterChoice1
    console.log("character 1 selected");
})

choseFighter2.addEventListener("click", () => {
    fighter1 = fighterChoice2
    console.log("character 2 selected");
})

export let setButtons = () => {
    button1.innerHTML = fighter1.attackName1
    button2.innerHTML = fighter1.attackName2
    button3.innerHTML = fighter1.attackName3
    button4.innerHTML = fighter1.attackName4
}



// RESET BUTTON EVENT

startAgain.addEventListener("click", () => {
    otherFighter1.healthPoints = otherFighter1.maxHealthPoints
    yourHealthBar.style.right = "0%"
    othersHealthBar.style.right = "0%"
    yourHealthBar.style.background = "rgb(97, 255, 121)"
    othersHealthBar.style.background = "rgb(97, 255, 121)"
})