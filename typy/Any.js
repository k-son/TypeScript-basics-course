"use strict";
var xx;
xx = 'Abecadło';
xx = 666;
xx = {};
xx = function () { };
xx = false;
var xAge = xx; // niepokojące, że to przechodzi
xx.age;
xx();
// przy 'any' nie dostajemy też podpowiedzi z edytora
// 'any' jest w zasadzie po to, by ułatwić migrację starego kodu JS do TypeScript
