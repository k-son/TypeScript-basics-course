{
  const dice : 1 | 2 | 3 | 4 = 4;
  
  
  interface Person {
    name: string,
    age: number,
    email: string
  }

  interface Pet {
    name: string,
    age: number,
    breed: string
  }

  let union : Person | Pet = {
    // i on tu musi mieć 'name' i 'age', oraz chociaż jedno z 'email' lub 'breed', żeby pasował to jednego z interfejsow
    name: 'Połączon',
    age: 123,
    email: 'niepisz@wz.oo',
    //breed: 'pół człowiek pół pasiec'
  }

  let join : Person & Pet = {
    // tu musi miec wszystkie wlasnosci z Person i wszystkie z Pet
    name: 'Połączon',
    age: 123,
    email: 'niepisz@wz.oo',
    breed: 'pół człowiek pół pasiec'
  }

}