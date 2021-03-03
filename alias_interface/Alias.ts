{
  type d6 = 1 | 2 | 3 | 4 | 5 | 6;

  type basicType = number | string | boolean;

  type d8 = d6 | 7 | 8;
  
  type extendedBoolean = boolean | 'Y' | 'y' | 'N' | 'n' | 1  | 0;

  
  let dice : d6;
  let dice2 : d6;

  let someArray : basicType[];
}