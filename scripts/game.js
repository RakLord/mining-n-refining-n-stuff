class Game {
    constructor(data) {
        this.version = "0.0.1";

        this.fpsLimit = 30;
        this.gameFrame = 0;
        this.frameCount = 0;

        this.tab = 0;

        this.points = 0;
        
        this.data = {
            "money": new Decimal("10"),
            "minePower": 1,
            "mined": false,
            "upgradesBought": {
                
            },
            "mineTable": {
                "stone": 1,
                "coal": 0.01,
                "iron": 0.001,
                "gold": 0.000001,
                "copper": 0.000001,
                "nickel": 0.000001,
                "zinc": 0.000001,
                "aluminum": 0.000001,
                "silver": 0.000001,
                "tin": 0.000001
            },
            "rawMaterials": {

            },
            "refinedMaterials": {

            },
            "processedMaterials": {

            },
            "soldMaterials": {

            }
        }
    }

    saveGame() {
        let gameData = JSON.stringify(this);
        localStorage.setItem("gameData", gameData);
        console.log("saved");
    }

    loadGame() {
        let gameData = localStorage.getItem("gameData");
        let savedGame = JSON.parse(gameData);
        Object.assign(this, savedGame);
        this.convertDecimal();

        console.log(this);
        console.log("loaded");
    }

    convertDecimal() {
        this.data.money = new Decimal(this.data.money);
    }
}


