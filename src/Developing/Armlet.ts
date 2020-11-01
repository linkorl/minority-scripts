let ArmletAbuse: ScriptDescription = {};

const whereScriptMenuArray = ['Linkor'];

const itemName = "item_armlet"
const modiferName = "modifier_item_armlet_unholy_strength"
const timeToFullStrenght = 0.6

let myLocalHero: Hero = EntitySystem.GetLocalHero();
let gameStart: boolean = true;
let isActiveScript: boolean = false;
let timeToggleArmlet = 0;
let hpToActive = 350;

let whoDisableArmlet = null;
let whoEnableArmlet = null;

// MENU
Menu.AddToggle(whereScriptMenuArray, "On/Off Abuse Armlet", isActiveScript).OnChange((state => {
    isActiveScript = state.newValue
}))
Menu.AddSlider(whereScriptMenuArray, "HP to active", 100, 500, 350, 1)
    .OnChange((state => {
        hpToActive = state.newValue
    }))

ArmletAbuse.OnUpdate = () => {
    if (gameStart && myLocalHero && isActiveScript) {
        let armletItem = myLocalHero.GetItem(itemName, true);
        if (armletItem) {
            let timeNow = GameRules.GetGameTime();
            let hpMyLocalHeroNow = myLocalHero.GetHealth();
            let underModifer: boolean = Boolean(myLocalHero.GetModifier(modiferName));
            console.log(timeNow - timeToggleArmlet)

            if (!underModifer && hpMyLocalHeroNow <= hpToActive && timeNow - timeToggleArmlet >= 0.05) {
                armletItem.Toggle()
                timeToggleArmlet = timeNow;
            }
            else if (underModifer && hpMyLocalHeroNow <= hpToActive && timeNow - timeToggleArmlet >= timeToFullStrenght) {
                armletItem.Toggle()
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

