"use strict";
{
    // klasy abstrakcyjne sa to takie klasy na bazie których nie możemy tworzyc nowych obiektow
    // klasy asbstrakcyjne moga se posiadac pola i metody
    // moga definiowac metody abstrakcyjne 
    var ShapeErste = /** @class */ (function () {
        function ShapeErste(a) {
            this.a = a;
        }
        return ShapeErste;
    }());
    var cos = new ShapeErste(); // i kuku, nie mozemy
    // z metoda abstrakcyjna
    // wszystkie metody abstrakcyjne ktore beda implementowane musza byc publiczne
    var Shape = /** @class */ (function () {
        function Shape() {
        }
        return Shape;
    }());
    // i sporo jeszcze bylo ale sie nie skupilem
}
