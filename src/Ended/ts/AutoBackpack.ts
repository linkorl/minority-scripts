let autoBackPack: ScriptDescription = {};

const whereScriptMenuArray = ['Linkor', 'AutoBackPack'];

let myLocalHero: Hero = EntitySystem.GetLocalHero();
let gameStart: boolean = true;
let isActiveScript: boolean = false;

// MENU
Menu.AddToggle(whereScriptMenuArray, "On/Off", isActiveScript).OnChange((state => {
    isActiveScript = state.newValue
}))

function moveItem(self: Hero | Courier | NPC, item: Item, slot: number) {
    EntitySystem.GetLocalPlayer().PrepareUnitOrders(
        Enum.UnitOrder.DOTA_UNIT_ORDER_MOVE_ITEM,
        slot,
        null,
        item,
        3,
        self
    );
}


autoBackPack.OnUpdate = () => {
    if (gameStart && myLocalHero && isActiveScript) {
        let items = myLocalHero.GetItems(true);

        if (items.length < 6) {
            let items_in_backpack = () => {
                let backpack = []
                for (let itemIndex = 6; itemIndex < 9; itemIndex++) {
                    let item = myLocalHero.GetItemByIndex(itemIndex);
                    if (item) {
                        backpack.push(item);
                    }
                }
                return backpack
            }
            let most_expensive_item: Item = items_in_backpack()[0]
            items_in_backpack().forEach((item) => {
                if (items.indexOf(item) === -1) {
                    if (most_expensive_item && most_expensive_item.GetCost() < item.GetCost()) {
                        most_expensive_item = item
                    }
                }
            })
            for(let indexItem = 0; indexItem < 6; indexItem++) {
                let item = myLocalHero.GetItemByIndex(indexItem);
                if (!item) {
                    moveItem(myLocalHero, most_expensive_item, indexItem)
                    break
                }
            }
        }
    }
}


autoBackPack.OnGameStart = () => {
    myLocalHero = EntitySystem.GetLocalHero();
    gameStart = true;
}


autoBackPack.OnGameEnd = () => {
    myLocalHero = null;
    gameStart = false;
}


RegisterScript(autoBackPack);

