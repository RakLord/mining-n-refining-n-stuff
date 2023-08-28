import { loadAndUpdate } from "./functions.js";
export function settingsInit() {

    let saveButton = $("#save-game");
    saveButton.click(function() {
        game.saveGame()
    });

    let loadButton = $("#load-game");
    loadButton.click(loadAndUpdate)
}