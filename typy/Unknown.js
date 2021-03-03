"use strict";
{
    var xx_1;
    xx_1 = "Olgierd";
    xx_1 = 3;
    xx_1 = {};
    xx_1 = function () { };
    if (typeof xx_1 === 'number') {
        var xage = xx_1;
    }
    if (typeof xx_1 === 'object' && xx_1 !== null) {
        if (xx_1.age !== undefined) { // jakioś zrzutować trzeba, nie zajarzyłem tego
        }
    }
    if (typeof xx_1 === 'function') {
        xx_1();
    }
}
