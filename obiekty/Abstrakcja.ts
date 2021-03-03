{
  // klasy abstrakcyjne sa to takie klasy na bazie których nie możemy tworzyc nowych obiektow
  // klasy asbstrakcyjne moga se posiadac pola i metody
  // moga definiowac metody abstrakcyjne 

  abstract class ShapeErste {
    a : string;

    constructor(a : string) {
      this.a = a;
    }
  }

  let cos : ShapeErste = new ShapeErste(); // i kuku, nie mozemy


  // z metoda abstrakcyjna
  // wszystkie metody abstrakcyjne ktore beda implementowane musza byc publiczne
  abstract class Shape {

    abstract area : () => string;
  }


  // i sporo jeszcze bylo ale sie nie skupilem

}