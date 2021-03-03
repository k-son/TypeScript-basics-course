{

  let flag : true | false;

  let dice : 1 | 2 | 3 | 4 | 5 | 6;
  dice = 5;
  dice = 7;

  let names: 'Kacper' | 'Melchior' | 'Dartanią';
  names = 'Melchior';
  names = 'Portos';

  let miszmasz : "x" | true | 123 | number[];



  const noChange = "dom";

  let dontChangeMe : "dom";
  dontChangeMe = "dom";



  let aFlag : boolean = true;
  let anotherFlag : true | false = false;
  aFlag = anotherFlag;
  anotherFlag = aFlag;



  let boy : 'Olo' | 'Bolo' | 'Lolo' = 'Bolo';
  let text : string;
  text = boy; // ok, bo typy 'boy' zawierają się w 'string'
  boy = text; // błąd, bo zbiór 'string' jest o wiele szerszy niż dopuszczalne typy 'boy'



  let mytest : number[] | string[];
  mytest = [12, 'word', true];

  let mytest2 : (number | string) [];
  mytest2 = [12, 'words mean nothing', true];

}