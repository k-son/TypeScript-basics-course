{
   interface Person {
     age: number,
     name: string,
     email?: string
   }

   interface Pet {
     age: number,
     name: string,
     breed?: string
   }

   let bolek : Person = {
     age: 29,
     name: 'Bolesław',
     email: 'bolo@jang.fajt'
   }

   let kocur : Pet = {
     age: 4,
     name: 'Puszek'
   }

   bolek = kocur;
   kocur = bolek; // oba ok bo email i breed nie sa obowiazkowe




   interface Person2 {
    age: number,
    name: string,
    email: string
  }

  interface Pet2 {
    age: number,
    name: string,
    breed: string
  }

  let bolek2 : Person2 = {
    age: 29,
    name: 'Bolesław',
    email: 'bolo@jang.fajt'
  }

  let kocur2 : Pet2 = {
    age: 4,
    name: 'Puszek',
    breed: 'cat'
  }

  bolek2 = kocur2;
  kocur2 = bolek2; // oba error, bo jeden ma obowiązkowy email, a drugi obowiazkowy breed

}