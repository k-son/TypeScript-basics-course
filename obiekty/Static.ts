{
  // static to słowo kluczowe, które możemy używać z polami bądź z funkcjami
  // elementy statyczne są powiązane z klasą a nie z nowymi instancjami na bazie danej klasy, więc można się do nich od razu odwoływać. nie są to właściwości obiektów, a są to właściwości klasy
  // przy zmiennych statycznych nie możemy nigdzie używać 'this'


  class Person {

    public static info = "Text jakis";
    public static address: string;

    public firstName: string;
    public lastName: string;

    constructor(firstName: string, lastName: string, /* address: string */) {
      this.firstName = firstName;
      this.lastName = lastName;
      /* this.address = address; */ // tu byłby błąd, bo address jest static, nie można używać z this. address nie należy od do obiektu, a do klasy
    }

    public toString = () => {
      return `${this.firstName} ${this.lastName}`;
    }

    public static getStaticInfo() {
      return `${Person.info}`;
    }
  }

  Person.info; // i jest ok

  const alojz = new Person("Alojz", "Sztaba");
  alojz.info; // a tu jest błąd, bo info jest static, czyli nie należy do obiektów tworzonych na bazie klasy Person, a do samej klasy Person
  alojz.toString(); // ok
  alojz.getStaticInfo(); // błąd
}