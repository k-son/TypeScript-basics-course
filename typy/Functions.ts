function sum(a, b) {
  return a + b;
} // nie może być domyślnego 'any'

function add(a : any, b : any) {
  return a + b;
}

function addition(a : number, b : number) : number /* ten 'number' mówi jakiego typu będzie zwrócona przez funkcję wartość */ {
  return a + b;
} 
const s = addition(3, 11);


// można oczywiście używać arrow functions
const suma = (a : number, b : number) => a + b;