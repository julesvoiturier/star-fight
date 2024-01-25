import * as CLASS from './class.js'

export let fighter1 = new CLASS.YourFighter1 ("James", 100, 140, 140 )
export let yourFighter2 = new CLASS.Fighter ("Rick", 50, 200, 200 )





// WHEN PAGE RELOADS, RANDOMLY CREATES THE OTHER FITGHER

export let otherFighter1
export let otherFighterN1 = new CLASS.OtherFighter ("mechant", 50, 200, 200 )
export let otherFighterN2 = new CLASS.OtherFighter ("mechant", 50, 200, 200 )
export let otherFighterN3 = new CLASS.OtherFighter ("mechant", 50, 200, 200 )

let randomFighter = Math.floor(Math.random() * 3) + 1
switch (randomFighter) {
    case 1:
        otherFighter1 = otherFighterN1
        break;
    case 2:
        otherFighter1 = otherFighterN2
        break;
    case 3:
        otherFighter1 = otherFighterN3
        break;
}

// CHOOSE FIGHTER
export let choseFighter1 =document.querySelector(".fighter1")
export let choseFighter2 =document.querySelector(".fighter2")


// ATTACK BUTTONS
export let attackButtons = document.querySelector("#attacks")


// HEALTH BARS
export let yourHealthBar = document.querySelector(".fighter1 .healthBar .actualHealth")
export let othersHealthBar = document.querySelector(".fighter2 .healthBar .actualHealth")

// START GAME BUTTON
export let startGame = document.querySelector("#startGame")
export let fightersDiv = document.querySelector(".fighters")

//PERCENTAGE RATIO FOR HEALTHBARS
export let yourHealthRatio = 100 // %
export let othersHealthRatio = 100 // %


// GAME RUNNING
export let game = true

// FIGHTM ESSAGES
export let fightMessages = document.querySelector("#fightMessages")