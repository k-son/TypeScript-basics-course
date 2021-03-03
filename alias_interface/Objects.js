"use strict";
{
    var person_1 = {
        name: 'Olgierd',
        age: 33
    };
    person_1 = {
        name: 'Olgierd',
        age: 33,
        email: "olo@polo.de" // error, nie zadeklaroalismy tego wczesniej
    };
    var person2 = {
        name: 'Olgierd',
        age: 33 // error bo 33 nie należy do zbioru age
    };
    var person3 = void 0;
    var kinga = {
        name: 'Kinga',
        age: 21
    };
    // dosyc prosta tablica obiektów jest argumentem w tej funkcji, a tyle się trzeba napisać
    // z pomocą winny tu przyjść interfejsy
    var sendEmail = function (people) {
        people.filter(function (person) { return person.email; }).forEach(function (person) {
            console.log("Sending email to " + person.email + ".");
        });
        return people;
    };
}
