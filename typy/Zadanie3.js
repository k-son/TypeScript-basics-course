"use strict";
{
    var sum_1 = function (a, b) {
        if (typeof a === 'number' && typeof b === 'number') {
            return a + b;
        }
        else {
            throw new Error('niepoprawne parametry dla funkcji');
        }
    };
}
