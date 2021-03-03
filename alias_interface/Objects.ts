{
  let person : { name : string, age : number } = {
    name: 'Olgierd',
    age: 33
  };

  person = {
    name: 'Olgierd',
    age: 33,
    email: "olo@polo.de" // error, nie zadeklaroalismy tego wczesniej
  };



  let person2 : { name : string, age : 20 | 30 | 40 | 50 } = {
    name: 'Olgierd',
    age: 33 // error bo 33 nie należy do zbioru age
  };



  let person3 : {
    name : string,
    age : number,
    email ?: string // może posiadać properties 'email' ktora bedzie stringiem
  };

  let kinga : {
    name : string,
    age : number,
    email ?: string
  } = {
    name: 'Kinga',
    age: 21
  };


  // dosyc prosta tablica obiektów jest argumentem w tej funkcji, a tyle się trzeba napisać
  // z pomocą winny tu przyjść interfejsy
  const sendEmail = (people : {
    name : string,
    age : number, 
    email ?: string
  }[]) : {
    name : string,
    age : number, 
    email ?: string
  }[] => {

    people.filter(person => person.email).forEach(person => {
      console.log(`Sending email to ${person.email}.`);
    })

    return people;
  }

}