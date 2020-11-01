let rememberMe: ScriptDescription = {};

const whereScriptMenuArray = ['Linkor', 'Remember Me'];

let myLocalHero: Hero = EntitySystem.GetLocalHero();
let gameStart: boolean = true;
let isActiveScript: boolean = false;

let cells = {

}

function loadFromConfig() {
    // TODO
}

// MENU
let inputBox = Menu.AddInputBox(whereScriptMenuArray.concat(['Settings']), 'New cell', 'New cell')
Menu.AddButton(whereScriptMenuArray.concat(['Settings']), "Add", () => {
    let value = inputBox.GetValue()

    if (Object.keys(cells).indexOf(value) === -1) {
        Menu.AddLabel(whereScriptMenuArray.concat([value]), value)
        cells[value] = {
            "label": [value, 0]
        }
    }
})
Menu.AddLabel(whereScriptMenuArray.concat(['Settings']), ' ')
Menu.AddToggle(whereScriptMenuArray.concat(['Settings']), "On/Off", isActiveScript).OnChange((state => {
    isActiveScript = state.newValue
}))


rememberMe.OnUpdate = () => {
    if (gameStart && isActiveScript) {

    }
}


rememberMe.OnGameStart = () => {
    myLocalHero = EntitySystem.GetLocalHero();
    gameStart = true;
}


rememberMe.OnGameEnd = () => {
    myLocalHero = null;
    gameStart = false;
}


RegisterScript(rememberMe);

