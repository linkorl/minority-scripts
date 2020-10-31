let tinyAirLines: ScriptDescription = {};

const radiusTakeEntity = 275
const whereScriptMenuArray = ['Linkor', 'Heroes', 'Tiny'];

let myLocalHero: Hero = EntitySystem.GetLocalHero();
let gameStart: boolean = true;
let isActiveScript: boolean = false;
let particle = null

// MENU
Menu.AddLabel(whereScriptMenuArray, "Tiny Air Lines Helper")
Menu.AddToggle(whereScriptMenuArray, "On/Off", isActiveScript).OnChange((state => {
    isActiveScript = state.newValue
}))

let particles_name_array = [
    "range_finder_tower_aoe_target_ring",
    "range_finder_targeted_aoe_rings"
]
let particle_name = particles_name_array[0]

let particle_menu_name = Menu.AddComboBox(whereScriptMenuArray, 'Particle',
    ['Range Finder Targeted Aoe Rings', 'Range Finder Tower Aoe Target Ring'],
    0).OnChange(state => {
        particle_name = particles_name_array[state.newValue]
        if(particle) {
            particle.Destroy();
            particle = null;
        }
});


function isTosseble(entity: Entity, myHero = myLocalHero) {
    return entity.GetAbsOrigin().Distance(myHero.GetAbsOrigin()) < radiusTakeEntity &&
        entity.GetTeamNum() != 0 &&
        !entity.IsAbility() &&
        entity.IsAlive() &&
        entity !== myHero;

}


tinyAirLines.OnUpdate = () => {
    if (gameStart && myLocalHero && isActiveScript) {
        let entityesAroundHero = EntitySystem.GetEntitiesList().filter((entity, index, array) => {
            return (isTosseble(entity) ? entity : null);
        })
        if (entityesAroundHero.length >= 1) {
            let target: Entity = entityesAroundHero[0];
            entityesAroundHero.forEach((entity) => {
                if (myLocalHero.GetAbsOrigin().Distance(entity.GetAbsOrigin()) < target.GetAbsOrigin().Distance(myLocalHero.GetAbsOrigin())) {
                    target = entity;
                }
            })
            if (!particle) {
                particle = Particle.Create(`particles/ui_mouseactions/${particle_name}.vpcf`, Enum.ParticleAttachment.PATTACH_INVALID, target);
                particle.SetControl(2, target.GetAbsOrigin());
                particle.SetControl(6, new Vector(1, 0, 0));
                particle.SetControl(7, target.GetAbsOrigin());
            } else {
                particle.SetControl(2, target.GetAbsOrigin());
                particle.SetControl(7, target.GetAbsOrigin());
            }
        } else if(particle) {
            particle.Destroy();
            particle = null;
        }
    }
}


tinyAirLines.OnGameStart = () => {
    myLocalHero = EntitySystem.GetLocalHero();
    gameStart = true;
}


tinyAirLines.OnGameEnd = () => {
    myLocalHero = null;
    gameStart = false;
}


RegisterScript(tinyAirLines);

