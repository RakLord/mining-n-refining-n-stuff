
export function updateData(dataDisplays, game, formatValue) {
    dataDisplays.money.children().last().html(formatValue(game.data.money));
}