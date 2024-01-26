export class Fighter {
    constructor(characterName, attackPoints, healthPoints, maxHealthPoints, attackName1, attackName2, attackName3, attackName4){
        this.characterName = characterName;
        this.attackPoints = attackPoints;
        this.healthPoints = healthPoints;
        this.maxHealthPoints = maxHealthPoints;
        this.attackName1 = attackName1;
        this.attackName2 = attackName2;
        this.attackName3 = attackName3;
        this.attackName4 = attackName4;
    }
}

export class Character1 extends Fighter{
    constructor(characterName, attackPoints, healthPoints, maxHealthPoints, attackName1, attackName2, attackName3, attackName4){
        super(characterName, attackPoints, healthPoints, maxHealthPoints, attackName1, attackName2, attackName3, attackName4);
    }

    attack1(x){
        x.healthPoints = x.healthPoints - 50
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
            x.healthPoints = x.healthPoints - 80
        } else {
            x.healthPoints = x.healthPoints - 30
        }
    }

}

export class Character2 extends Fighter{
    constructor(characterName, attackPoints, healthPoints, maxHealthPoints, attackName1, attackName2, attackName3, attackName4){
        super(characterName, attackPoints, healthPoints, maxHealthPoints, attackName1, attackName2, attackName3, attackName4);
    }

    attack1(x){
        x.healthPoints = x.healthPoints - 1000
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
    constructor(characterName, attackPoints, healthPoints, maxHealthPoints, attackName1, attackName2, attackName3, attackName4){
        super(characterName, attackPoints, healthPoints, maxHealthPoints, attackName1, attackName2, attackName3, attackName4);
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