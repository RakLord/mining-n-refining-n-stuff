
export function headerText(text){
    let header = $("#header");
    let headerWidth = header.width();
    
    let movingDiv = $("<div><p>"+text+"</p></div>");
    movingDiv.css({
        "position": "absolute",
    })
    movingDiv.appendTo(header);

    movingDiv.animate({"left": headerWidth + 100}, {
        duration: 20000,
        easing: "linear",
        complete: function() {
            movingDiv.remove();
          }
    });

    console.log(text);
}

export function formatValue(value) {

    if (Math.abs(value.e - 2) < 4) {
        return (value.mantissa * Math.pow(10, value.e))
    }
    return (value.mantissa + "e" + value.e)
}

export function createInventoryItem(name, quantity=1, inventory=false) {
    let itemDiv = $('<div>').addClass('inventory-item');
    itemDiv.append($('<h4>').text(name));
    itemDiv.append($('<p>').text(quantity));
    if (!inventory) {
        return itemDiv;
    } else {
        inventory.append(itemDiv);
    }
}

export function mine(game) {
    game.data.mined = false;
    function pickResource() {
        const totalWeight = Object.values(game.data.mineTable).reduce((sum, weight) => sum + weight, 0);
        const randomValue = Math.random() * totalWeight;
    
        let cumulativeWeight = 0;
        for (const resource in game.data.mineTable) {
            cumulativeWeight += game.data.mineTable[resource];
            if (randomValue <= cumulativeWeight) {
                return(resource);
            }
        }
    }

    let resource = pickResource();
    console.log(resource);

    if (game.data.rawMaterials.hasOwnProperty(resource)) {
        game.data.rawMaterials[resource] += game.data.minePower;
        updateInventory("raw");
    } else { // If the item is not in inv display already
        game.data.rawMaterials[resource] = game.data.minePower;
        createInventoryItem(resource, game.data.minePower, $("#raw-materials-inventory"))
        updateInventory("raw");
    }
}

export function updateInventory(inv) {
    switch(inv){
        case "raw":
            console.log("Raw");
            console.log(game.data.rawMaterials)
            for (const resource in game.data.rawMaterials) {
                if (game.data.rawMaterials.hasOwnProperty(resource)) {
                    const newValue = game.data.rawMaterials[resource];
                    const inventoryItem = $(`.inventory-item:has(h4:contains('${resource}'))`);
                    const valueParagraph = inventoryItem.find('p');
                    if (!valueParagraph.first().text()) {
                        createInventoryItem(resource, game.data.minePower, $("#raw-materials-inventory"));
                    }
                    valueParagraph.text(newValue);
                }
            }
    }
}

export function loadAndUpdate() {
    game.loadGame();
    updateInventory("raw");
}