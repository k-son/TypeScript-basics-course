// ograniczyć dostęp do zmiennych w naszych klasach
/* 
 są 3 poziomy dostępu w TS
 public, private i protect

 public to typ domyślny

*/


{
  class Email {

    public name: string;
    public domain: string;

    // konstruktory są publiczne z defaultu
    constructor(name: string, domain: string) {
      this.name = name;
      this.domain = domain;
    }

    public toString = () => {
      return `${this.name}@${this.domain}`;
    }
  }

  class Person {
    
    public firstName: string;
    public email: Email;

    constructor(firstName: string, email: Email) {
      this.firstName = firstName;
      this.email = email;
    }

    public toString = () => {
      return `${this.firstName} ${this.email}`;
    }
  }

  const olo = new Person('Olgierd', new Email('olo', 'giemail.kom'));
}