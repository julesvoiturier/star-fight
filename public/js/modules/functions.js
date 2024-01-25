import * as INSTANCE from './instances.js'


export let otherAttack = () => {

    let randomAttack = Math.floor(Math.random() * 4) +1

    switch (randomAttack) {
        case 1:
            INSTANCE.otherFighter1.attack1(INSTANCE.fighter1)
            INSTANCE.fightMessages.innerHTML = "FIGHTER 2 USES ATTACK 1"
            break;
        case 2:
            INSTANCE.otherFighter1.attack2(INSTANCE.fighter1)
            INSTANCE.fightMessages.innerHTML = "FIGHTER 2 USES ATTACK 2"
            break;
        case 3:
            INSTANCE.otherFighter1.attack3(INSTANCE.fighter1)
            INSTANCE.fightMessages.innerHTML = "FIGHTER 2 USES ATTACK 3"
            break;
        case 4:
            INSTANCE.otherFighter1.attack4(INSTANCE.fighter1)
            INSTANCE.fightMessages.innerHTML = "FIGHTER 2 USES ATTACK 4"
            break;
    }

    let ratio = 0
    ratio = INSTANCE.fighter1.healthPoints / INSTANCE.fighter1.maxHealthPoints
    ratio = ratio * 100
    ratio = 100 - ratio

    setTimeout(() => {
        if (ratio > 75) {
            INSTANCE.yourHealthBar.style.background = "red"
        } else if (ratio > 50){
            INSTANCE.yourHealthBar.style.background = "rgb(255, 231, 48)"
        }
        INSTANCE.yourHealthBar.style.right = `${ratio}%`
    }, 1000);


}


export let attack = (x) => {
    if (x.id == "attack1") {
        INSTANCE.fightMessages.innerHTML = "YOU USE ATTACK 1"
        INSTANCE.fighter1.attack1(INSTANCE.otherFighter1)

    } else if (x.id == "attack2") {
        INSTANCE.fightMessages.innerHTML = "YOU USE ATTACK 2"
        INSTANCE.fighter1.attack2(INSTANCE.otherFighter1)
        console.log(INSTANCE.otherFighter1.healthPoints);

    } else if (x.id == "attack3") {
        INSTANCE.fightMessages.innerHTML = "YOU USE ATTACK 3"
        INSTANCE.fighter1.attack3(INSTANCE.otherFighter1)
        console.log(INSTANCE.otherFighter1.healthPoints);

    } else if (x.id == "attack4") {
        INSTANCE.fightMessages.innerHTML = "YOU USE ATTACK 4"
        INSTANCE.fighter1.attack4(INSTANCE.otherFighter1)
        console.log(INSTANCE.otherFighter1.healthPoints);
    }

    let ratio = 0
    ratio = INSTANCE.otherFighter1.healthPoints / INSTANCE.otherFighter1.maxHealthPoints
    ratio = ratio * 100
    ratio = 100 - ratio

    setTimeout(() => {

        if (ratio > 75) {
            INSTANCE.othersHealthBar.style.background = "red"
        } else if (ratio > 50){
            INSTANCE.othersHealthBar.style.background = "rgb(255, 231, 48)"
        }

        INSTANCE.othersHealthBar.style.right = `${ratio}%`
    }, 1000);

    setTimeout(() => {
        otherAttack()
    }, 3000);
    
}


export let whoStarts = () => {
    
    let randomStart = Math.floor(Math.random() * 2) +1
    
    switch (randomStart){

        case 1:
            otherAttack()
            break;
        case 2:
            attack()
            break;
    }
}