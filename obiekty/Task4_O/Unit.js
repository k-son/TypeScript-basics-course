"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Unit = /** @class */ (function () {
    function Unit(name, hitPointsMax, hitPointsLeft, moveDistance, weapons) {
        this.name = name;
        this.hitPointsMax = hitPointsMax;
        this.hitPointsLeft = hitPointsLeft;
        this.moveDistance = moveDistance;
        this.weapons = weapons;
    }
    return Unit;
}());
exports.default = Unit;
