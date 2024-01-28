import * as INSTANCE from './instances.js'

export let noClick = false
export let endGame = false



export let chooseAnimation = (x) => {

    console.log(INSTANCE.animation);

    INSTANCE.animation.className = "animations"
    console.log(INSTANCE.animation);
    console.log(INSTANCE.fighter1);

    if (x.id == "attack1") {
        if (INSTANCE.fighter1.attackName1 == "LASERBEAM") {
            INSTANCE.animation.classList.add("laserBeam1")
        } else if (INSTANCE.fighter1.attackName1 == "LASERBOMB") {
            INSTANCE.animation.classList.add("laserbomb")
        }
    }

    if (x.id == "attack2") {
        if (INSTANCE.fighter1.attackName2 == "MACHINEGUN") {
            INSTANCE.animation.classList.add("machinegun")
        } else if (INSTANCE.fighter1.attackName2 == "STARSWORD") {
            INSTANCE.animation.classList.add("starsword1")
        }
    }

    if (x.id == "attack3") {
        if (INSTANCE.fighter1.attackName3 == "STARSHIELD") {
            INSTANCE.animation.classList.add("starshield1")
        } else if (INSTANCE.fighter1.attackName3 == "MAGNETAR") {
            INSTANCE.animation.classList.add("magnetar")
        }
    }

    if (x.id == "attack4") {
        if (INSTANCE.fighter1.attackName4 == "LIGHTSPEED") {
            INSTANCE.animation.classList.add("lightspeed")
        } else if (INSTANCE.fighter1.attackName4 == "DARKMATTER") {
            INSTANCE.animation.classList.add("darkmatter")
        }
    }

    INSTANCE.animation.classList.add("youAttack")
    INSTANCE.animation.classList.remove("heAttacks")
}




export let chooseAnimation2 = (x) => {

    INSTANCE.animation.className = "animations"
    console.log(INSTANCE.animation);

    if (x == "attack1") {
        if (INSTANCE.otherFighter1.attackName1 == "LASERBOMB") {
            INSTANCE.animation.classList.add("laserbomb")
        } else if (INSTANCE.otherFighter1.attackName1 == "LASERBEAM") {
            INSTANCE.animation.classList.add("laserBeam2")
        }
    }

    if (x == "attack2") {
        if (INSTANCE.otherFighter1.attackName2 == "STARSWORD") {
            INSTANCE.animation.classList.add("starsword2")
        } else if (INSTANCE.otherFighter1.attackName2 == "MACHINEGUN") {
            INSTANCE.animation.classList.add("machinegun")
        }
    }

    if (x == "attack3") {
        if (INSTANCE.otherFighter1.attackName3 == "LIGHTSPEED") {
            INSTANCE.animation.classList.add("lightspeed2")
        } else if (INSTANCE.otherFighter1.attackName3 == "STARSHIELD") {
            INSTANCE.animation.classList.add("starshield2")
        }
    }

    if (x == "attack4") {
        if (INSTANCE.otherFighter1.attackName4 == "DARKMATTER") {
            INSTANCE.animation.classList.add("darkmatter")
        } else if (INSTANCE.otherFighter1.attackName4 == "MAGNETAR") {
            INSTANCE.animation.classList.add("magnetar")
        }
    }

    INSTANCE.animation.classList.remove("youAttack")
    INSTANCE.animation.classList.add("heAttacks")
}




export let otherAttack = () => {

    noClick = true
    let enemyAttack


    let randomAttack = Math.floor(Math.random() * 4) +1

    switch (randomAttack) {
        case 1:
            INSTANCE.otherFighter1.attack1(INSTANCE.fighter1)
            INSTANCE.fightMessages.innerHTML = `${INSTANCE.otherFighter1.characterName} USES ${INSTANCE.otherFighter1.attackName1}`
            enemyAttack = "attack1"
            break;
        case 2:
            INSTANCE.otherFighter1.attack2(INSTANCE.fighter1)
            INSTANCE.fightMessages.innerHTML = `${INSTANCE.otherFighter1.characterName} USES ${INSTANCE.otherFighter1.attackName2}`
            enemyAttack = "attack2"
            break;
        case 3:
            INSTANCE.otherFighter1.attack3(INSTANCE.fighter1)
            INSTANCE.fightMessages.innerHTML = `${INSTANCE.otherFighter1.characterName} USES ${INSTANCE.otherFighter1.attackName3}`
            enemyAttack = "attack3"
            break;
        case 4:
            INSTANCE.otherFighter1.attack4(INSTANCE.fighter1)
            INSTANCE.fightMessages.innerHTML = `${INSTANCE.otherFighter1.characterName} USES ${INSTANCE.otherFighter1.attackName4}`
            enemyAttack = "attack4"
            break;
    }

    INSTANCE.fighterN2.classList.add("attackmove")
    setTimeout(() => {
        INSTANCE.fighterN2.classList.remove("attackmove")
    }, 200);

    chooseAnimation2(enemyAttack)
    if (INSTANCE.otherFighter1.characterName == "ENEMY-2" && enemyAttack == "attack3") {
    } else {
        setTimeout(() => {
            INSTANCE.fighterN1.classList.toggle("blink")
        }, 300);
        setTimeout(() => {
            INSTANCE.fighterN1.classList.toggle("blink")
        }, 400);
        setTimeout(() => {
            INSTANCE.fighterN1.classList.toggle("blink")
        }, 500);
        setTimeout(() => {
            INSTANCE.fighterN1.classList.toggle("blink")
        }, 600);
    
        setTimeout(() => {
            INSTANCE.fightMessages.classList.add("messageAnimation")
        }, 500);
    }


    let ratio = 0
    ratio = INSTANCE.fighter1.healthPoints / INSTANCE.fighter1.maxHealthPoints
    ratio = ratio * 100
    ratio = 100 - ratio

    let ratio2 = 0
    ratio2 = INSTANCE.otherFighter1.healthPoints / INSTANCE.otherFighter1.maxHealthPoints
    ratio2 = ratio2 * 100
    ratio2 = 100 - ratio2

    if (ratio2 <= 0) {
        ratio2 = 0
    }
    if (ratio <= 0) {
        ratio = 0
    }
    if (ratio >= 100) {
        ratio = 100
        INSTANCE.fighter1.healthPoints = 0 
    }
    if (ratio2 >= 100) {
        ratio2 = 100
        INSTANCE.otherFighter1.healthPoints = 0
    }

    setTimeout(() => {

        if (ratio > 50 && ratio <= 80) {
            INSTANCE.yourHealthBar.style.background = "rgb(255, 231, 48)"
        } else if (ratio > 80){
            INSTANCE.yourHealthBar.style.background = "red"
        } else {
            INSTANCE.yourHealthBar.style.background = "rgb(97, 255, 121)"
        }

        if (ratio2 > 50 && ratio2 <= 80) {
            INSTANCE.othersHealthBar.style.background = "rgb(255, 231, 48)"
        } else if (ratio2 > 80){
            INSTANCE.othersHealthBar.style.background = "red"
        } else {
            INSTANCE.othersHealthBar.style.background = "rgb(97, 255, 121)"
        }

        INSTANCE.lifePercentage1.innerHTML = INSTANCE.fighter1.healthPoints
        INSTANCE.lifePercentage2.innerHTML = INSTANCE.otherFighter1.healthPoints
        INSTANCE.yourHealthBar.style.right = `${ratio}%`
        INSTANCE.othersHealthBar.style.right = `${ratio2}%`
        INSTANCE.fightMessages.classList.remove("messageAnimation")
    }, 2000);

    setTimeout(() => {

        if (ratio >= 100) {
            endGame = true
            INSTANCE.fightMessages.innerHTML = "YOU LOOSE"
            INSTANCE.finalResultDisplay.innerHTML = "YOU LOOSE"
            INSTANCE.finalResult.style.display = "flex"
            INSTANCE.game.style.display = "none"
            INSTANCE.fightMessages.classList.add("messageAnimation")
        } else if (ratio2 >= 100) {
            endGame = true
            INSTANCE.fightMessages.innerHTML = "YOU WIN"
            INSTANCE.finalResult.style.display = "flex"
            INSTANCE.game.style.display = "none"
            INSTANCE.fightMessages.classList.add("messageAnimation")
        } else {
            INSTANCE.fightMessages.innerHTML = "YOUR TURN"
            noClick = false
            INSTANCE.fightMessages.classList.add("messageAnimation")
        }
    }, 3000);
}



export let attack = (x) => {

    noClick = true

    if (x.id == "attack1") {
        INSTANCE.fighter1.attack1(INSTANCE.otherFighter1)
    } else if (x.id == "attack2") {
        INSTANCE.fighter1.attack2(INSTANCE.otherFighter1)
    } else if (x.id == "attack3") {
        INSTANCE.fighter1.attack3(INSTANCE.otherFighter1)
    } else if (x.id == "attack4") {
        INSTANCE.fighter1.attack4(INSTANCE.otherFighter1)
    }

    let ratio = 0
    ratio = INSTANCE.otherFighter1.healthPoints / INSTANCE.otherFighter1.maxHealthPoints
    ratio = ratio * 100
    ratio = 100 - ratio

    let ratio2 = 0
    ratio2 = INSTANCE.fighter1.healthPoints / INSTANCE.fighter1.maxHealthPoints
    ratio2 = ratio2 * 100
    ratio2 = 100 - ratio2

    if (ratio2 <= 0) {
        ratio2 = 0
    }
    if (ratio <= 0) {
        ratio = 0
    }
    if (ratio2 >= 100) { 
        ratio2 = 100
        INSTANCE.fighter1.healthPoints = 0
    }
    if (ratio >= 100) {
        ratio = 100
        INSTANCE.otherFighter1.healthPoints = 0
    }

    setTimeout(() => {

        if (ratio > 50 && ratio <= 80) {
            INSTANCE.othersHealthBar.style.background = "rgb(255, 231, 48)"
        } else if (ratio > 80){
            INSTANCE.othersHealthBar.style.background = "red"
        } else {
            INSTANCE.othersHealthBar.style.background = "rgb(97, 255, 121)"
        }

        if (ratio2 > 50 && ratio2 <= 80) {
            INSTANCE.yourHealthBar.style.background = "rgb(255, 231, 48)"
        } else if (ratio2 > 80){
            INSTANCE.yourHealthBar.style.background = "red"
        } else {
            INSTANCE.yourHealthBar.style.background = "rgb(97, 255, 121)"
        }

        INSTANCE.othersHealthBar.style.right = `${ratio}%`
        INSTANCE.yourHealthBar.style.right = `${ratio2}%`
        INSTANCE.lifePercentage1.innerHTML = INSTANCE.fighter1.healthPoints
        INSTANCE.lifePercentage2.innerHTML = INSTANCE.otherFighter1.healthPoints
        INSTANCE.fightMessages.classList.remove("messageAnimation")

    }, 1000);

    setTimeout(() => {

        if (ratio >= 100) {
            endGame = true
            INSTANCE.fightMessages.innerHTML = "YOU WIN"
            INSTANCE.finalResult.style.display = "flex"
            INSTANCE.game.style.display = "none"
            INSTANCE.fightMessages.classList.add("messageAnimation")
        } else if (ratio2 >= 100){
            endGame = true
            INSTANCE.fightMessages.innerHTML = "YOU LOOSE"
            INSTANCE.finalResultDisplay.innerHTML = "YOU LOOSE"
            INSTANCE.finalResult.style.display = "flex"
            INSTANCE.game.style.display = "none"
            INSTANCE.fightMessages.classList.add("messageAnimation")
        } else {
            INSTANCE.fightMessages.classList.add("messageAnimation")
            otherAttack()
        }
        
    }, 2000);
}


INSTANCE.startAgain.addEventListener("click", () => {
    noClick = false
})