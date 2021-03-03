{
  class Email {

    name: string;
    domain: string;

    constructor(name: string, domain: string) {
      this.name = name;
      this.domain = domain;
    }

    toString = () => {
      return `${this.name}@${this.domain}`;
    }
  }

  class Person {
    
    firstName: string;
    email: Email;

    constructor(firstName: string, email: Email) {
      this.firstName = firstName;
      this.email = email;
    }

    toString = () => {
      return `${this.firstName} ${this.email}`;
    }
  }

  const olo = new Person('Olgierd', new Email('olo', 'giemail.kom'));

}