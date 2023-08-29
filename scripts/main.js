
import { Game } from "./game.js";
import { headerText, formatValue, createInventoryItem, mine, updateInventory} from "./functions.js";
import { updateData } from "./dom.js";
import { switchTab } from "./tabs.js";
import { settingsInit } from "./settings.js";

let dataDisplays = {}

const containers = {
    "mine": $("#container-tab-1"),
    "refinary": $("#container-tab-2"),
    "fabricator": $("#container-tab-3"),
    "packager": $("#container-tab-4"),
    "shop": $("#container-tab-5"),
    "settings": $("#container-tab-99")
}

$(document).ready(function() {
    init();
    tick();  // Stats game loop
});


function init() {
    console.log("init start");
    window.game = new Game();

    setup(game, containers, createInventoryItem);
    dataDisplays.money = $("#data-money");


    settingsInit();
    

    $("#tab0").on("click", function() {switchTab(0, game);});
    $("#tab1").on("click", function() {switchTab(1, game);});
    $("#tab2").on("click", function() {switchTab(2, game);});
    $("#tab3").on("click", function() {switchTab(3, game);});
    $("#tab4").on("click", function() {switchTab(4, game);});
    $("#tab99").on("click", function() {switchTab(5, game);});


    let x = setInterval(mine, 1000, game);
    updateData(dataDisplays, game, formatValue);
    switchTab(game.tab, game, true)
    headerText("Hi :)");
    console.log("init complete");
}

function tick() {
    game.frameCount++;
    // Runs every 60 frames
    if (game.frameCount >= 60 / game.fpsLimit) {
        game.gameFrame++; // First
        
        if (game.data.mined == true) {
            mine(game);
        }
        updateData(dataDisplays, game, formatValue);
        
        game.frameCount = 0; // Last
    }        
    requestAnimationFrame(tick);
}