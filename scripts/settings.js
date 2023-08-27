export function settingsInit(game, tabContainer) {

    let saveButton = $("#save-game");
    saveButton.click(function() {
        game.saveGame()
    });

    let loadButton = $("#load-game");
    loadButton.click(function() {
        game.loadGame();
    })
}