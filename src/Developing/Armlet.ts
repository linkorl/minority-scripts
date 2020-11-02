let ArmletAbuse: ScriptDescription = {};

const whereScriptMenuArray = ['Linkor'];
const itemArmlet = "item_armlet"
const modiferName = "modifier_item_armlet_unholy_strength"
const timeToFullStrenght = 0.6

let myLocalHero: Hero = EntitySystem.GetLocalHero();
let gameStart: boolean = true;
let isActiveScript: boolean = false;

let timeToggleArmlet = 0;
let hpToActive = 350;
let whoDisableArmlet = 0; // 0 - Player, 1 - Script
let lastRecentDamage = 0

let arrayIllusionCreatingSpellNames = ["naga_siren_mirror_image", "chaos_knight_phantasm"];
let arrayStateSpell = [true, true]

let autoToggleValue = 3;

function arraySpellNamesToArraySpellImagePath(arraySpellNames: string[]) {
    let arraySpellImagePath = []

    arraySpellNames.forEach((spellName) => {
        arraySpellImagePath.push(`panorama/images/spellicons/${spellName}_png.vtex_c`)
    })

    return arraySpellImagePath
}


// MENU
Menu.AddToggle(whereScriptMenuArray, "On/Off Abuse Armlet", isActiveScript).OnChange((state => {
    isActiveScript = state.newValue
}))

Menu.AddSlider(whereScriptMenuArray, "HP to active", 100, 500, 350, 1)
    .OnChange((state => {
        hpToActive = state.newValue
    }))

Menu.AddMultiSelect(whereScriptMenuArray,
    "Auto Toggle after spells",
    arraySpellNamesToArraySpellImagePath(arrayIllusionCreatingSpellNames),
    arrayStateSpell)
    .OnChange(state => {
        arrayStateSpell = state.newValue
    })

Menu.AddComboBox(whereScriptMenuArray, 'Auto Toggle', ['All', "Hero", "Creep", "Off"], 3)
    .OnChange(state => {
        autoToggleValue = state.newValue
    })

ArmletAbuse.OnUpdate = () => {
    if (gameStart && myLocalHero && isActiveScript && Engine.OnceAt(0.1)) {
        let armletItem = myLocalHero.GetItem(itemArmlet, true);
        if (armletItem) {
            let timeNow = GameRules.GetGameTime();
            let hpMyLocalHeroNow = myLocalHero.GetHealth();
            let underModifer: boolean = Boolean(myLocalHero.GetModifier(modiferName));
            console.log(myLocalHero.GetRecentDamage(), lastRecentDamage)
            let myLocalHeroRecentDamageNow = myLocalHero.GetRecentDamage();
            if (hpMyLocalHeroNow <= hpToActive) {
                if (myLocalHeroRecentDamageNow > lastRecentDamage && underModifer) {
                    // console.log("Toggle off")
                    armletItem.Toggle()
                    whoDisableArmlet = 1

                } else if (myLocalHeroRecentDamageNow == myLocalHeroRecentDamageNow && whoDisableArmlet) {
                    if (!underModifer && hpMyLocalHeroNow <= hpToActive && timeNow - timeToggleArmlet) {
                        armletItem.Toggle()
                        // console.log("Toggle On")
                        timeToggleArmlet = timeNow;
                    } else if (underModifer && hpMyLocalHeroNow <= hpToActive && timeNow - timeToggleArmlet >= timeToFullStrenght && myLocalHeroRecentDamageNow === 0.0) {
                        armletItem.Toggle()
                        // console.log("Toggle off 2")
                        whoDisableArmlet = 1
                    }
                }
            }
            lastRecentDamage = myLocalHeroRecentDamageNow
        }
    }
}

ArmletAbuse.OnPrepareUnitOrders = (order) => {
    // track disable armlet by player
    if (order.ability && order.npc && order.ability.GetName() === itemArmlet && order.npc === myLocalHero && order.ability.GetToggleState()) {
        whoDisableArmlet = 0
    }


    if (gameStart && myLocalHero && isActiveScript) {
        let armlet: Item = myLocalHero.GetItem(itemArmlet, true)
        let underModifer: boolean = Boolean(myLocalHero.GetModifier(modiferName));
        // Auto Toggle Armlet after spells
        if (order.ability && arrayStateSpell[arrayIllusionCreatingSpellNames.indexOf(order.ability.GetName())]) {
            if (!underModifer) {
                armlet.Toggle()
                return
            }
        }
        if (!underModifer && order.order === Enum.UnitOrder.DOTA_UNIT_ORDER_ATTACK_TARGET && Engine.OnceAt(0.1)) {

            if (autoToggleValue === 0) {
                armlet.Toggle()
            } else if (autoToggleValue === 1 && order.target.IsHero()) {
                armlet.Toggle()
            } else if (autoToggleValue === 2 && order.target.IsCreep()) {
                armlet.Toggle()
            }
        }
    }

}


ArmletAbuse.OnGameStart = () => {
    myLocalHero = EntitySystem.GetLocalHero();
    gameStart = true;
}


ArmletAbuse.OnGameEnd = () => {
    myLocalHero = null;
    gameStart = false;
}


RegisterScript(ArmletAbuse);

