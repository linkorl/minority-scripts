/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Developing/TinyAirLinesHelper.ts":
/*!**********************************************!*\
  !*** ./src/Developing/TinyAirLinesHelper.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

let tinyAirLines = {};
const radiusTakeEntity = 275;
const whereScriptMenuArray = ['Linkor', 'Heroes', 'Tiny'];
let myLocalHero = EntitySystem.GetLocalHero();
let gameStart = true;
let isActiveScript = false;
let particle = null;
// MENU
Menu.AddLabel(whereScriptMenuArray, "Tiny Air Lines Helper");
Menu.AddToggle(whereScriptMenuArray, "On/Off", isActiveScript).OnChange((state => {
    isActiveScript = state.newValue;
}));
let particles_name_array = [
    "range_finder_tower_aoe_target_ring",
    "range_finder_targeted_aoe_rings"
];
let particle_name = particles_name_array[0];
let particle_menu_name = Menu.AddComboBox(whereScriptMenuArray, 'Particle', ['Range Finder Targeted Aoe Rings', 'Range Finder Tower Aoe Target Ring'], 0).OnChange(state => {
    particle_name = particles_name_array[state.newValue];
    if (particle) {
        particle.Destroy();
        particle = null;
    }
});
function isTosseble(entity, myHero = myLocalHero) {
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
        });
        if (entityesAroundHero.length >= 1) {
            let target = entityesAroundHero[0];
            entityesAroundHero.forEach((entity) => {
                if (myLocalHero.GetAbsOrigin().Distance(entity.GetAbsOrigin()) < target.GetAbsOrigin().Distance(myLocalHero.GetAbsOrigin())) {
                    target = entity;
                }
            });
            if (!particle) {
                particle = Particle.Create(`particles/ui_mouseactions/${particle_name}.vpcf`, Enum.ParticleAttachment.PATTACH_INVALID, target);
                particle.SetControl(2, target.GetAbsOrigin());
                particle.SetControl(6, new Vector(1, 0, 0));
                particle.SetControl(7, target.GetAbsOrigin());
            }
            else {
                particle.SetControl(2, target.GetAbsOrigin());
                particle.SetControl(7, target.GetAbsOrigin());
            }
        }
        else if (particle) {
            particle.Destroy();
            particle = null;
        }
    }
};
tinyAirLines.OnGameStart = () => {
    myLocalHero = EntitySystem.GetLocalHero();
    gameStart = true;
};
tinyAirLines.OnGameEnd = () => {
    myLocalHero = null;
    gameStart = false;
};
RegisterScript(tinyAirLines);


/***/ }),

/***/ 0:
/*!****************************************************!*\
  !*** multi ./src/Developing/TinyAirLinesHelper.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\1\AppData\Roaming\Minority\scripts\src\Developing\TinyAirLinesHelper.ts */"./src/Developing/TinyAirLinesHelper.ts");


/***/ })

/******/ });