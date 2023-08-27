const tabs = {
    "0": "container-tab-1",
    "1": "container-tab-2",
    "2": "container-tab-3",
    "3": "container-tab-4",
    "4": "container-tab-5",
    "99": "container-tab-99",
}

function switchTab(newTab, game, first=false) {
    let currentTabString = tabs[Object.keys(tabs)[game.tab]];
    let newTabString = tabs[Object.keys(tabs)[newTab]];
    console.log(currentTabString, newTabString)
    
    if (first) {
        $("#"+newTabString).toggle(); // Initializes last tab opened on game start
    }
    else {
        if (newTab != game.tab) {
            $("#"+currentTabString).toggle();
            game.tab = newTab;
            $("#"+newTabString).toggle();
        }
    }
}