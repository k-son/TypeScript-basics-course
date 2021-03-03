{
  let logical : boolean = true;
  let age : number = 33;
  let name : string = 'Olgierd';

  if (typeof age === "number") {
    console.log(`${age} jest liczbą.`);
  }



  let something : any;

  if (typeof something === "string") { // kiedy tu podamy warunek, np. że jeśli jest stringiem
    something.toLowerCase();  // to tu po something. zacznie nam edytor podpowiadać dostępne metody
  } else if ( typeof something === "number") {
    something.toFixed(); // tu podpowiedział kilka metod dla numberów
  } else if ( typeof something === "function") {
    something(); // i jest ok, nie wywołuje błędu
  }

}