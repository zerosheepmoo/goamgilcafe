(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Menu.ts":
/*!*********************!*\
  !*** ./src/Menu.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CustomItem = exports.SectorItem = exports.TitleContainer = exports.HotIceItem = exports.TitleItem = exports.MenuItem = exports.SubTextItem = exports.PriceItem = exports.TextItem = exports.DomItem = void 0;\nvar Types_1 = __webpack_require__(/*! ./Types */ \"./src/Types.ts\");\nvar Utils_1 = __webpack_require__(/*! ./Utils */ \"./src/Utils.ts\");\n/**\n * 돔 아이템\n */\nvar DomItem = /** @class */ (function () {\n    function DomItem(domType, styleName) {\n        this._listeners = {};\n        this._childs = [];\n        if (domType) {\n            this._dom = document.createElement(domType);\n            this._styleName = styleName || Types_1.StyleName.NONE;\n            this.dom.className = this._styleName;\n            this.changed();\n        }\n    }\n    Object.defineProperty(DomItem.prototype, \"dom\", {\n        get: function () {\n            return this._dom;\n        },\n        set: function (value) {\n            this._dom = value;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    DomItem.prototype.findChild = function (prop, value) {\n        var len = this._childs.length;\n        for (var i = 0; i < len; i++) {\n            var c = this._childs[i];\n            if (c[prop] === value) {\n                return c;\n            }\n        }\n    };\n    /**\n     * only for Menu class\n     */\n    DomItem.prototype.getChildren = function () {\n        var res = [];\n        for (var i = 0, len = this._childs.length; i < len; i++) {\n            var c = this._childs[i];\n            res.push(c['name']);\n        }\n        return res;\n    };\n    DomItem.prototype.addChild = function (child) {\n        this._childs.push(child);\n        this.dom.appendChild(child.dom);\n    };\n    DomItem.prototype.removeChild = function (index) {\n        this._childs[index].destroy();\n        this._childs.slice(index, 1);\n    };\n    DomItem.prototype.addEvListener = function (ev, listener) {\n        this._listeners[ev] = listener;\n        this.dom.addEventListener(ev, listener);\n    };\n    DomItem.prototype.destroy = function () {\n        var _a;\n        var cLen = this._childs.length;\n        for (var i = cLen - 1; i > -1; i--) {\n            this._childs[i].destroy();\n        }\n        for (var ev in this._listeners) {\n            this.dom.removeEventListener(ev, this._listeners[ev]);\n        }\n        (_a = this.dom.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(this.dom);\n    };\n    return DomItem;\n}());\nexports.DomItem = DomItem;\n/**\n * 텍스트 아이템\n */\nvar TextItem = /** @class */ (function (_super) {\n    __extends(TextItem, _super);\n    function TextItem(styleName) {\n        var _this = _super.call(this, 'div', styleName || Types_1.StyleName.ITEM_TEXT) || this;\n        _this._text = '';\n        return _this;\n    }\n    TextItem.prototype.changed = function () {\n        this.dom.innerHTML = this._text || '';\n    };\n    TextItem.prototype.updateText = function (text) {\n        if (this._text !== text) {\n            this._text = text;\n            this.changed();\n        }\n    };\n    return TextItem;\n}(DomItem));\nexports.TextItem = TextItem;\n/**\n * 가격 아이템\n */\nvar PriceItem = /** @class */ (function (_super) {\n    __extends(PriceItem, _super);\n    function PriceItem() {\n        var _this = _super.call(this, 'div', Types_1.StyleName.ITEM_PRICE) || this;\n        _this._priceHot = 0;\n        _this._priceIce = 0;\n        _this._isUnion = false;\n        _this._price = 0;\n        return _this;\n    }\n    PriceItem.prototype.changed = function () {\n        if (this._isUnion) {\n            this.dom.innerHTML = Utils_1.FF.priceToDotNum(this._price);\n        }\n        else {\n            this.dom.innerHTML = Utils_1.FF.priceToDotNum2(this._priceHot, this._priceIce);\n        }\n    };\n    PriceItem.prototype.updatePrice = function (priceHot, priceIce, isUnion) {\n        if (isUnion) {\n            this._isUnion = true;\n            if (this._price !== priceHot && priceIce === 0) {\n                this._price = priceHot;\n                this.changed();\n            }\n            else if (this._price !== priceIce && priceHot === 0) {\n                this._price = priceIce;\n                this.changed();\n            }\n            else {\n                throw new Error('Union Price cannot be set with hot and ice.');\n            }\n        }\n        else {\n            this._priceHot = priceHot;\n            this._priceIce = priceIce;\n            this.changed();\n        }\n    };\n    return PriceItem;\n}(DomItem));\nexports.PriceItem = PriceItem;\n/**\n * 서브 텍스트 아이템\n */\nvar SubTextItem = /** @class */ (function (_super) {\n    __extends(SubTextItem, _super);\n    function SubTextItem() {\n        return _super.call(this, Types_1.StyleName.SUB_TEXT) || this;\n    }\n    return SubTextItem;\n}(TextItem));\nexports.SubTextItem = SubTextItem;\n/**\n * 메뉴아이템\n */\nvar MenuItem = /** @class */ (function (_super) {\n    __extends(MenuItem, _super);\n    function MenuItem() {\n        var _this = _super.call(this, 'div', Types_1.StyleName.MENU_ITEM) || this;\n        _this._text = new TextItem();\n        _this._price = new PriceItem();\n        _this._subText = new SubTextItem();\n        _this._isPrepared = false;\n        _this._preparedDOM = document.createElement('div');\n        _this._isEvent = false;\n        _this.addChild(_this._text);\n        _this.addChild(_this._price);\n        _this.addChild(_this._subText);\n        _this.addEvListener('click', _this._chagnedPreparedStatus.bind(_this));\n        return _this;\n    }\n    Object.defineProperty(MenuItem.prototype, \"isEvent\", {\n        get: function () {\n            return this._isEvent;\n        },\n        set: function (value) {\n            if (this._isEvent !== value) {\n                if (value === true) {\n                    this.dom.classList.add('event-item');\n                }\n                else {\n                    this.dom.classList.remove('event-item');\n                }\n                this._isEvent = value;\n            }\n        },\n        enumerable: false,\n        configurable: true\n    });\n    MenuItem.prototype._chagnedPreparedStatus = function (ev) {\n        this._isPrepared = !this._isPrepared;\n        if (this._isPrepared === true) {\n            this.dom.appendChild(this._preparedDOM);\n            var rect = this.dom.children[1].getBoundingClientRect();\n            this._preparedDOM.style.position = 'absolute';\n            this._preparedDOM.style.left = rect.x - 38 + 'px';\n            this._preparedDOM.style.top = rect.y + 4 + 'px';\n            this._preparedDOM.innerHTML = '<span style=\"color: white; background-color: rgb(252, 102, 3); text-decoration: none; font-family: LotteMartHappy; font-size: 15px; padding: 3px; border-radius: 8px;\">준비중</span>';\n            this.text.dom.classList.add(Types_1.StyleName.ISPREPARED);\n            this.price.dom.classList.add(Types_1.StyleName.ISPREPARED);\n            this.subText.dom.classList.add(Types_1.StyleName.ISPREPARED);\n        }\n        else {\n            this.text.dom.classList.remove(Types_1.StyleName.ISPREPARED);\n            this.price.dom.classList.remove(Types_1.StyleName.ISPREPARED);\n            this.subText.dom.classList.remove(Types_1.StyleName.ISPREPARED);\n            this.dom.removeChild(this._preparedDOM);\n        }\n    };\n    Object.defineProperty(MenuItem.prototype, \"text\", {\n        get: function () {\n            return this._text;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(MenuItem.prototype, \"price\", {\n        get: function () {\n            return this._price;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(MenuItem.prototype, \"subText\", {\n        get: function () {\n            return this._subText;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    MenuItem.prototype.changed = function () {\n    };\n    return MenuItem;\n}(DomItem));\nexports.MenuItem = MenuItem;\n/**\n * 타이틀\n */\nvar TitleItem = /** @class */ (function (_super) {\n    __extends(TitleItem, _super);\n    function TitleItem() {\n        return _super.call(this, Types_1.StyleName.TITLE_TEXT) || this;\n    }\n    return TitleItem;\n}(TextItem));\nexports.TitleItem = TitleItem;\nvar HotIceItem = /** @class */ (function (_super) {\n    __extends(HotIceItem, _super);\n    function HotIceItem() {\n        return _super.call(this, Types_1.StyleName.HOT_ICE_TYPE) || this;\n    }\n    return HotIceItem;\n}(TextItem));\nexports.HotIceItem = HotIceItem;\nvar TitleContainer = /** @class */ (function (_super) {\n    __extends(TitleContainer, _super);\n    function TitleContainer() {\n        var _this = _super.call(this, 'div', Types_1.StyleName.TITLE_CON) || this;\n        _this._titleText = new TitleItem();\n        _this._hotIceText = new HotIceItem();\n        _this.addChild(_this._titleText);\n        _this.addChild(_this._hotIceText);\n        return _this;\n    }\n    Object.defineProperty(TitleContainer.prototype, \"text\", {\n        get: function () {\n            return this._titleText;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(TitleContainer.prototype, \"hotIceText\", {\n        get: function () {\n            return this._hotIceText;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    TitleContainer.prototype.changed = function () {\n    };\n    return TitleContainer;\n}(DomItem));\nexports.TitleContainer = TitleContainer;\n/**\n * 섹터\n */\nvar SectorItem = /** @class */ (function (_super) {\n    __extends(SectorItem, _super);\n    function SectorItem(name, hotIceType) {\n        var _this = _super.call(this, 'div', Types_1.StyleName.SECTOR) || this;\n        _this._title = new TitleContainer();\n        _this._menuItems = [];\n        _this._hotIceType = Types_1.HotIceType.NONE;\n        _this._name = name;\n        _this._title.text.updateText(name);\n        _this.addChild(_this._title);\n        _this.hotIceType = hotIceType;\n        return _this;\n    }\n    Object.defineProperty(SectorItem.prototype, \"name\", {\n        get: function () {\n            return this._name;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(SectorItem.prototype, \"hotIceType\", {\n        get: function () {\n            return this._hotIceType;\n        },\n        set: function (value) {\n            if (this._hotIceType !== value) {\n                this._hotIceType = value;\n                var res = Utils_1.FF.getHotIceType(this._hotIceType);\n                this._title.hotIceText.updateText(res);\n                if (this._hotIceType === Types_1.HotIceType.NONE) {\n                    this._title.hotIceText.dom.style.width = '0px';\n                }\n            }\n        },\n        enumerable: false,\n        configurable: true\n    });\n    SectorItem.prototype.addChildItems = function (text, priceHot, priceIce, isUnion, subText) {\n        if (priceHot === void 0) { priceHot = 0; }\n        if (priceIce === void 0) { priceIce = 0; }\n        if (isUnion === void 0) { isUnion = false; }\n        if (subText === void 0) { subText = ''; }\n        var mItem = new MenuItem();\n        mItem.text.updateText(text);\n        mItem.price.updatePrice(priceHot, priceIce, isUnion);\n        mItem.subText.updateText(subText);\n        this._menuItems.push(mItem);\n        this.addChild(mItem);\n    };\n    SectorItem.prototype.removeChildItems = function (index) {\n    };\n    SectorItem.prototype.changed = function () {\n    };\n    return SectorItem;\n}(DomItem));\nexports.SectorItem = SectorItem;\nvar CustomItem = /** @class */ (function (_super) {\n    __extends(CustomItem, _super);\n    function CustomItem() {\n        return _super.call(this, 'div') || this;\n    }\n    CustomItem.prototype.changed = function () {\n    };\n    return CustomItem;\n}(DomItem));\nexports.CustomItem = CustomItem;\n\n\n//# sourceURL=webpack:///./src/Menu.ts?");

/***/ }),

/***/ "./src/Types.ts":
/*!**********************!*\
  !*** ./src/Types.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.HotIceType = exports.StyleName = void 0;\nvar StyleName;\n(function (StyleName) {\n    StyleName[\"MENU_CON\"] = \"menu-container\";\n    StyleName[\"MENU_ITEM\"] = \"menu-item\";\n    StyleName[\"ITEM_TEXT\"] = \"text-item\";\n    StyleName[\"ITEM_PRICE\"] = \"price-item\";\n    StyleName[\"SUB_TEXT\"] = \"subtext-item\";\n    StyleName[\"TITLE_TEXT\"] = \"title-item\";\n    StyleName[\"HOT_ICE_TYPE\"] = \"hot-ice-item\";\n    StyleName[\"TITLE_CON\"] = \"title-container\";\n    StyleName[\"SECTOR\"] = \"sector-item\";\n    StyleName[\"NONE\"] = \"none\";\n    StyleName[\"ISPREPARED\"] = \"is-prepared\";\n})(StyleName = exports.StyleName || (exports.StyleName = {}));\nvar HotIceType;\n(function (HotIceType) {\n    HotIceType[\"HOT\"] = \"hot\";\n    HotIceType[\"ICE\"] = \"ice\";\n    HotIceType[\"HI\"] = \"hotAndIce\";\n    HotIceType[\"NONE\"] = \"none\";\n})(HotIceType = exports.HotIceType || (exports.HotIceType = {}));\n\n\n//# sourceURL=webpack:///./src/Types.ts?");

/***/ }),

/***/ "./src/Utils.ts":
/*!**********************!*\
  !*** ./src/Utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.FF = void 0;\nvar Types_1 = __webpack_require__(/*! ./Types */ \"./src/Types.ts\");\nvar FF = /** @class */ (function () {\n    function FF() {\n    }\n    FF.priceToDotNum = function (price) {\n        if (price === 0) {\n            return '- -';\n        }\n        else {\n            return (price / 1000).toFixed(1) + '';\n        }\n    };\n    FF.priceToDotNum2 = function (priceHot, priceIce) {\n        var resHot = FF.priceToDotNum(priceHot);\n        var resIce = FF.priceToDotNum(priceIce);\n        return resHot + ' / ' + resIce;\n    };\n    FF.getHotIceType = function (data) {\n        if (data === Types_1.HotIceType.HOT) {\n            return 'HOT';\n        }\n        else if (data === Types_1.HotIceType.ICE) {\n            return 'ICE';\n        }\n        else if (data === Types_1.HotIceType.HI) {\n            return 'HOT / ICE';\n        }\n        else if (data === Types_1.HotIceType.NONE) {\n            return '';\n        }\n        else {\n            return data;\n        }\n    };\n    return FF;\n}());\nexports.FF = FF;\n\n\n//# sourceURL=webpack:///./src/Utils.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Menu = void 0;\nvar Menu_1 = __webpack_require__(/*! ./Menu */ \"./src/Menu.ts\");\nvar Types_1 = __webpack_require__(/*! ./Types */ \"./src/Types.ts\");\nvar Menu = /** @class */ (function (_super) {\n    __extends(Menu, _super);\n    function Menu() {\n        return _super.call(this, 'div', Types_1.StyleName.MENU_CON) || this;\n    }\n    Menu.prototype.changed = function () {\n        if (this._parent) {\n            // append\n            this._parent.appendChild(this.dom);\n        }\n    };\n    Menu.prototype.connectFrom = function (id) {\n        var p = document.getElementById(id);\n        if (p) {\n            this._parent = p;\n        }\n        else {\n            throw new Error('There is no such element having id: ' + id);\n        }\n        this.changed();\n    };\n    Menu.prototype.addSector = function (name, hotAndIce) {\n        if (hotAndIce === void 0) { hotAndIce = Types_1.HotIceType.NONE; }\n        var sItem = new Menu_1.SectorItem(name, hotAndIce);\n        this.addChild(sItem);\n    };\n    Menu.prototype.findSector = function (name) {\n        return this.findChild('name', name);\n    };\n    Menu.prototype.removeSector = function (index) {\n        this.removeChild(index);\n    };\n    return Menu;\n}(Menu_1.DomItem));\nexports.Menu = Menu;\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ })));