"use strict";
{
    var age_1 = { value: 5 };
    age_1 = 'trzicieści'; // no miał być przecież number
    var age2 = { value: 'pięć' };
    age2 = 13; // błąd bo typ wskazuje na string
    function wrap(x) {
        return {
            value: x
        };
    }
    wrap(5);
    wrap('pięć');
    var abc_1 = wrap("5"); // błąd, bo miał być number
    wrap("olgierd");
    wrap({ name: 'olgierd', age: 29 });
}
