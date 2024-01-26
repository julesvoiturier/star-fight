import * as INSTANCE from './instances.js'


export let noClick = false

export let otherAttack = () => {

    noClick = true


    let randomAttack = Math.floor(Math.random() * 4) +1

    switch (randomAttack) {
        case 1:
            INSTANCE.otherFighter1.attack1(INSTANCE.fighter1)
            INSTANCE.fightMessages.innerHTML = `${INSTANCE.otherFighter1.characterName} USES ${INSTANCE.otherFighter1.attackName1}`
            break;
        case 2:
            INSTANCE.otherFighter1.attack2(INSTANCE.fighter1)
            INSTANCE.fightMessages.innerHTML = `${INSTANCE.otherFighter1.characterName} USES ${INSTANCE.otherFighter1.attackName2}`
            break;
        case 3:
            INSTANCE.otherFighter1.attack3(INSTANCE.fighter1)
            INSTANCE.fightMessages.innerHTML = `${INSTANCE.otherFighter1.characterName} USES ${INSTANCE.otherFighter1.attackName3}`
            break;
        case 4:
            INSTANCE.otherFighter1.attack4(INSTANCE.fighter1)
            INSTANCE.fightMessages.innerHTML = `${INSTANCE.otherFighter1.characterName} USES ${INSTANCE.otherFighter1.attackName4}`
            break;
    }

    setTimeout(() => {
        INSTANCE.fightMessages.classList.add("messageAnimation")
    }, 500);


    let ratio = 0
    ratio = INSTANCE.fighter1.healthPoints / INSTANCE.fighter1.maxHealthPoints
    ratio = ratio * 100
    ratio = 100 - ratio

    setTimeout(() => {
        if (ratio > 80) {
            INSTANCE.yourHealthBar.style.background = "red"
        } else if (ratio > 50){
            INSTANCE.yourHealthBar.style.background = "rgb(255, 231, 48)"
        }
        INSTANCE.yourHealthBar.style.right = `${ratio}%`
        INSTANCE.fightMessages.classList.remove("messageAnimation")
    }, 2000);

    setTimeout(() => {
        if (ratio > 100) {
            setTimeout(() => {
                alert("YOU LOOSE")
            }, 2500);
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
        console.log("hello");
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

    setTimeout(() => {

        if (ratio > 80) {
            INSTANCE.othersHealthBar.style.background = "red"
        } else if (ratio > 50){
            INSTANCE.othersHealthBar.style.background = "rgb(255, 231, 48)"
        }

        INSTANCE.othersHealthBar.style.right = `${ratio}%`
        INSTANCE.fightMessages.classList.remove("messageAnimation")

    }, 1000);

    setTimeout(() => {

        if (ratio > 100) {
            alert("YOU WIN")
        } else {
            INSTANCE.fightMessages.classList.add("messageAnimation")
            otherAttack()
        }
        
    }, 2000);
}