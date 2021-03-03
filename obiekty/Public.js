"use strict";
// ograniczyć dostęp do zmiennych w naszych klasach
/*
 są 3 poziomy dostępu w TS
 public, private i protect

 public to typ domyślny

*/
{
    var Email = /** @class */ (function () {
        // konstruktory są publiczne z defaultu
        function Email(name, domain) {
            var _this = this;
            this.toString = function () {
                return _this.name + "@" + _this.domain;
            };
            this.name = name;
            this.domain = domain;
        }
        return Email;
    }());
    var Person = /** @class */ (function () {
        function Person(firstName, email) {
            var _this = this;
            this.toString = function () {
                return _this.firstName + " " + _this.email;
            };
            this.firstName = firstName;
            this.email = email;
        }
        return Person;
    }());
    var olo = new Person('Olgierd', new Email('olo', 'giemail.kom'));
}
