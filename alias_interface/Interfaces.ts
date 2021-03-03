{
  interface Person {
    name : string,
    age : number,
    email ?: string
  }

  let kinga : Person = {
    name: 'Kinga',
    age: 21
  }


  const sendEmail = (people : Person[]) : Person[] => {

    people.filter(person => person.email).forEach(person => {
      console.log(`Sending email to ${person.email}.`);
    })

    return people;
  }

}