"use strict";
{
    var kinga = {
        name: 'Kinga',
        age: 21
    };
    var sendEmail = function (people) {
        people.filter(function (person) { return person.email; }).forEach(function (person) {
            console.log("Sending email to " + person.email + ".");
        });
        return people;
    };
}
