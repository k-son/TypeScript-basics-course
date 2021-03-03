"use strict";
{
    var logical = true;
    var age_1 = 33;
    var name_1 = 'Olgierd';
    if (typeof age_1 === "number") {
        console.log(age_1 + " jest liczb\u0105.");
    }
    var something = void 0;
    if (typeof something === "string") { // kiedy tu podamy warunek, np. że jeśli jest stringiem
        something.toLowerCase(); // to tu po something. zacznie nam edytor podpowiadać dostępne metody
    }
    else if (typeof something === "number") {
        something.toFixed(); // tu podpowiedział kilka metod dla numberów
    }
    else if (typeof something === "function") {
        something(); // i jest ok, nie wywołuje błędu
    }
}
