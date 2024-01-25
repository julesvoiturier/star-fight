export class Fighter {
    constructor(characterName, attackPoints, healthPoints, maxHealthPoints){
        this.characterName = characterName;
        this.attackPoints = attackPoints;
        this.healthPoints = healthPoints;
        this.maxHealthPoints = maxHealthPoints;
    }
}

export class YourFighter1 extends Fighter{
    constructor(characterName, attackPoints, healthPoints, maxHealthPoints){
        super(characterName, attackPoints, healthPoints, maxHealthPoints);
    }

    attack1(x){
        x.healthPoints = x.healthPoints - 80
    }

    attack2(x){
        x.healthPoints = x.healthPoints - 80
    }

    attack3(x){
        x.healthPoints = x.healthPoints - 80
    }

    attack4(x){
        let criticalHit = Math.floor(Math.random() * 5) + 1

        if (criticalHit == 1) {
            x.healthPoints = x.healthPoints - 100
        } else {
            x.healthPoints = x.healthPoints - 50
        }
    }

}

export class OtherFighter extends Fighter{
    constructor(characterName, attackPoints, healthPoints, maxHealthPoints){
        super(characterName, attackPoints, healthPoints, maxHealthPoints);
    }

    attack1(x){
        x.healthPoints = x.healthPoints - 30
    }

    attack2(x){
        x.healthPoints = x.healthPoints - 50
    }

    attack3(x){
        x.healthPoints = x.healthPoints - 80
    }

    attack4(x){
        let criticalHit = Math.floor(Math.random() * 5) + 1

        if (criticalHit == 1) {
            x.healthPoints = x.healthPoints - 100
        } else {
            x.healthPoints = x.healthPoints - 50
        }
    }

}