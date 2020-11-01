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

/***/ "./src/Developing/AutoBackpack.ts":
/*!****************************************!*\
  !*** ./src/Developing/AutoBackpack.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

let autoBackPack = {};
const whereScriptMenuArray = ['Linkor', 'AutoBackPack'];
let myLocalHero = EntitySystem.GetLocalHero();
let gameStart = true;
let isActiveScript = false;
// MENU
Menu.AddToggle(whereScriptMenuArray, "On/Off", isActiveScript).OnChange((state => {
    isActiveScript = state.newValue;
}));
function moveItem(self, item, slot) {
    EntitySystem.GetLocalPlayer().PrepareUnitOrders(Enum.UnitOrder.DOTA_UNIT_ORDER_MOVE_ITEM, slot, null, item, 3, self);
}
autoBackPack.OnUpdate = () => {
    if (gameStart && myLocalHero && isActiveScript) {
        let items = myLocalHero.GetItems(true);
        if (items.length < 6) {
            let items_in_backpack = () => {
                let backpack = [];
                for (let itemIndex = 6; itemIndex < 9; itemIndex++) {
                    let item = myLocalHero.GetItemByIndex(itemIndex);
                    if (item) {
                        backpack.push(item);
                    }
                }
                return backpack;
            };
            let most_expensive_item = items_in_backpack()[0];
            items_in_backpack().forEach((item) => {
                if (items.indexOf(item) === -1) {
                    if (most_expensive_item && most_expensive_item.GetCost() < item.GetCost()) {
                        most_expensive_item = item;
                    }
                }
            });
            for (let indexItem = 0; indexItem < 6; indexItem++) {
                let item = myLocalHero.GetItemByIndex(indexItem);
                if (!item) {
                    moveItem(myLocalHero, most_expensive_item, indexItem);
                    break;
                }
            }
        }
    }
};
autoBackPack.OnGameStart = () => {
    myLocalHero = EntitySystem.GetLocalHero();
    gameStart = true;
};
autoBackPack.OnGameEnd = () => {
    myLocalHero = null;
    gameStart = false;
};
RegisterScript(autoBackPack);


/***/ }),

/***/ 0:
/*!**********************************************!*\
  !*** multi ./src/Developing/AutoBackpack.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\1\AppData\Roaming\Minority\scripts\src\Developing\AutoBackpack.ts */"./src/Developing/AutoBackpack.ts");


/***/ })

/******/ });