{
  /*   function wrap(x) {
      return {
        value: x
      }
    }

    wrap(5); */
    // otypowanie takiej funkcji nie jest tak oczywistą sprawą, gdyż nie wiemy bo będzie podstawiaone jako parametr funkcji



  // typ generyczny oznaczamy w ostrych nawiasach <>

  interface WrapType<X> {
    value: X
  }

  let age: WrapType<number> = { value: 5};
  age = 'trzicieści'; // no miał być przecież number

  let age2: WrapType<string> = { value: 'pięć'};
  age2 = 13 // błąd bo typ wskazuje na string




  function wrap<FooBar>(x: FooBar): WrapType<FooBar> {
    return {
      value: x
    }
  }

  wrap(5);
  wrap('pięć');


  const abc : WrapType<number> = wrap<number>("5"); // błąd, bo miał być number

  wrap<string>("olgierd");




  interface Person {
    name : string,
    age : number,
    email ?: string
  }

  wrap<Person>({name: 'olgierd', age: 29});
}