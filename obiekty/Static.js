"use strict";
{
    // static to słowo kluczowe, które możemy używać z polami bądź z funkcjami
    // elementy statyczne są powiązane z klasą a nie z nowymi instancjami na bazie danej klasy, więc można się do nich od razu odwoływać. nie są to właściwości obiektów, a są to właściwości klasy
    // przy zmiennych statycznych nie możemy nigdzie używać 'this'
    var Person_1 = /** @class */ (function () {
        function Person(firstName, lastName) {
            var _this = this;
            this.toString = function () {
                return _this.firstName + " " + _this.lastName;
            };
            this.firstName = firstName;
            this.lastName = lastName;
            /* this.address = address; */ // tu byłby błąd, bo address jest static, nie można używać z this. address nie należy od do obiektu, a do klasy
        }
        Person.getStaticInfo = function () {
            return "" + Person.info;
        };
        Person.info = "Text jakis";
        return Person;
    }());
    Person_1.info; // i jest ok
    var alojz = new Person_1("Alojz", "Sztaba");
    alojz.info; // a tu jest błąd, bo info jest static, czyli nie należy do obiektów tworzonych na bazie klasy Person, a do samej klasy Person
    alojz.toString(); // ok
    alojz.getStaticInfo(); // błąd
}
