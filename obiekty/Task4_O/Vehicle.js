"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Unit_1 = __importDefault(require("./Unit"));
var Vehicle = /** @class */ (function (_super) {
    __extends(Vehicle, _super);
    //private fuelMax: number;
    //private fuelLeft: number;
    //private fuelConsumptionPerMove: number;
    function Vehicle(name, hitPointsMax, hitPointsLeft, moveDistance, weapons, // te są z Unit i Weapon
    fuelMax, fuelLeft, fuelConsumptionPerMove) {
        var _this = _super.call(this, name, hitPointsMax, hitPointsLeft, moveDistance, weapons) || this;
        _this.fuelMax = fuelMax;
        _this.fuelLeft = fuelLeft;
        _this.fuelConsumptionPerMove = fuelConsumptionPerMove;
        return _this;
        //this.fuelMax = fuelMax;
        //this.fuelLeft = fuelLeft;
        //this.fuelConsumptionPerMove = fuelConsumptionPerMove;
    }
    return Vehicle;
}(Unit_1.default));
