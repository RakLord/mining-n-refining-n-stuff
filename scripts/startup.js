function setup(game, containers) {
    let mineButton = $("<button>").text("Dig")
    .addClass("button")
    .on("click", function() {
        console.log("mine");
        game.data.mined = true;
    })
    
    containers.mine.append(mineButton)
}

