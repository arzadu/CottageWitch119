BlockEvents.rightClicked(event => {
    const {
        block,
        item
    } = event;
    if (!block.hasTag("minecraft:candles")) return;
    if (block.properties.get('lit') === false || block.properties.get('lighting') === 'none' || block.properties.get('on') === false) return;
    if (item.id == 'ae2:certus_quartz_crystal') {
        item.count--
        block.popItem('ae2:charged_certus_quartz_crystal')
    }
});