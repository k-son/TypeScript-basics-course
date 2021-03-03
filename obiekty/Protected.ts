{
  // protected sa widoczne tylko w obrebie klasy w ktorej sa zdefiniowane oraz w klasach dziedziczacych

  
  class Rectangle {

    protected a : number;
    private b : number;

    constructor(a : number, b : number) {
      this.a = a;
      this.b = b;
    }

    public area = () : number => {
      return this.a * this.b;
    }
  }


  class Square extends Rectangle {

    constructor(a : number) {
      super(a, a);  // super odnosi sie do rodzica klasy
    }

    public toString = () : string => {
      return `Jestem kwadratem o boku ${super.a}`;  // ma dostep do pola 'a' z klasy Rectangle (nie wiem czemu tu krzyczy kompilator)
    }
  }


  let prostokat : Rectangle = new Rectangle(10, 5);
  let kwadrat : Square = new Square(8);

  console.log(prostokat.area());
  console.log(kwadrat.area());
  console.log(kwadrat.toString());
}