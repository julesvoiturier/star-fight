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
        x.healthPoints = x.healthPoints - 80
    }

    attack2(x){
        let random = Math.floor(Math.random() * 3) + 1
        switch (random) {
            case 1:
                x.healthPoints = x.healthPoints - 40
                break;
            case 2:
                x.healthPoints = x.healthPoints - 80
                break;
            case 3:
                x.healthPoints = x.healthPoints - 120
                break;
        }
    }

    attack3(x){
        this.healthPoints += 70
        if (this.healthPoints > this.maxHealthPoints) {
            this.healthPoints = this.maxHealthPoints
        }
        
    }

    attack4(x){
        x.healthPoints = x.healthPoints - 70
        x.maxHealthPoints = x.maxHealthPoints - 10
    }

}

export class Character2 extends Fighter{
    constructor(characterName, attackPoints, healthPoints, maxHealthPoints, attackName1, attackName2, attackName3, attackName4){
        super(characterName, attackPoints, healthPoints, maxHealthPoints, attackName1, attackName2, attackName3, attackName4);
    }

    attack1(x){
        x.healthPoints = x.healthPoints - 150
        this.healthPoints = this.healthPoints - 100
        if (this.healthPoints <= 0) {
            this.healthPoints = 5
        }
    }

    attack2(x){
        let randomMiss = Math.floor(Math.random() * 3) + 1
        if (randomMiss == 1 || randomMiss == 2) {
            x.healthPoints = x.healthPoints - 100
        }
    }

    attack3(x){
        x.healthPoints = x.healthPoints - 60
        this.healthPoints += 50
        if (this.healthPoints > this.maxHealthPoints) {
            this.healthPoints = this.maxHealthPoints
        }
    }

    attack4(x){
        let criticalHit = Math.floor(Math.random() * 15) + 1
        if (criticalHit == 1) {
            x.healthPoints = 0
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
        x.healthPoints = x.healthPoints - 150
        this.healthPoints = this.healthPoints - 100
        if (this.healthPoints <= 0) {
            this.healthPoints = 5
        }
    }

    attack2(x){
        let randomMiss = Math.floor(Math.random() * 3) + 1
        if (randomMiss == 1 || randomMiss == 2) {
            x.healthPoints = x.healthPoints - 100
        }
    }

    attack3(x){
        x.healthPoints = x.healthPoints - 70
        x.maxHealthPoints = x.maxHealthPoints - 10
    }

    attack4(x){

        let criticalHit = Math.floor(Math.random() * 15) + 1
        if (criticalHit == 1) {
            x.healthPoints = 0
        } else {
            x.healthPoints = x.healthPoints - 50
        }
    }

}

export class OtherFighterBis extends Fighter{
    constructor(characterName, attackPoints, healthPoints, maxHealthPoints, attackName1, attackName2, attackName3, attackName4){
        super(characterName, attackPoints, healthPoints, maxHealthPoints, attackName1, attackName2, attackName3, attackName4);
    }

    attack1(x){
        x.healthPoints = x.healthPoints - 80
    }

    attack2(x){
        let random = Math.floor(Math.random() * 3) + 1
        switch (random) {
            case 1:
                x.healthPoints = x.healthPoints - 40
                break;
            case 2:
                x.healthPoints = x.healthPoints - 80
                break;
            case 3:
                x.healthPoints = x.healthPoints - 120
                break;
        }
    }

    attack3(x){
        this.healthPoints += 70
        if (this.healthPoints > this.maxHealthPoints) {
            this.healthPoints = this.maxHealthPoints
        }
    }

    attack4(x){
        x.healthPoints = x.healthPoints - 60
        this.healthPoints += 50
        if (this.healthPoints > this.maxHealthPoints) {
            this.healthPoints = this.maxHealthPoints
        }
    }

}