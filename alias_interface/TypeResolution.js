"use strict";
{
    var bolek = {
        age: 29,
        name: 'Bolesław',
        email: 'bolo@jang.fajt'
    };
    var kocur = {
        age: 4,
        name: 'Puszek'
    };
    bolek = kocur;
    kocur = bolek; // oba ok bo email i breed nie sa obowiazkowe
    var bolek2 = {
        age: 29,
        name: 'Bolesław',
        email: 'bolo@jang.fajt'
    };
    var kocur2 = {
        age: 4,
        name: 'Puszek',
        breed: 'cat'
    };
    bolek2 = kocur2;
    kocur2 = bolek2; // oba error, bo jeden ma obowiązkowy email, a drugi obowiazkowy breed
}
