// typ void mówi, że nic dana funkcja nie zwraca

// undefined oznacza zupełny brak wartości
// null oznacza, że dana własność/pole istnieje, ale nie ma przypisanej żadnej wartości


function printText(text : string) {
  console.log(text); // no i taka funkcja nic nie zwraca, najadę na nią kursorem i kompilator podpowiada że zwróci 'void'
}

let person : void = undefined;