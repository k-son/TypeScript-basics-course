{
  interface Person {
    name: string,
    age: number
  }

  interface Child extends Person {
    favouriteColor: string,
    toys: string[]
  }

  interface Adult extends Person {
    email?: string,
    job: string
  }

  const dziecko : Child = {
    name: 'Dżejson',
    age: 6,
    favouriteColor: 'ametystowy',
    toys: ['ciuchcia', 'garnki', 'patyk']
  }

  let someone : Person = dziecko // no i jest ok, chociaz dziecko ma wiecej wlasnosci niz wymaga tego interfejs Person


  
  interface Driver {
    vehicle: string
  }

  interface CoffeeDrinker extends Person, Adult, Driver { // można kilka extendow przypisac
    favouriteCoffee: string
  }
}