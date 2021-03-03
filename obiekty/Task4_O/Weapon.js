"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Weapon = /** @class */ (function () {
    function Weapon(name, damage, ammoMax, ammoLeft, rateOfFire, range) {
        this.name = name;
        this.damage = damage;
        this.ammoMax = ammoMax;
        this.ammoLeft = ammoLeft;
        this.rateOfFire = rateOfFire;
        this.range = range;
    }
    return Weapon;
}());
exports.default = Weapon;
