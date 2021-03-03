// ograniczyć dostęp do zmiennych w naszych klasach
/* 
 są 3 poziomy dostępu w TS
 public, private i protect

private - nikt nie ma do tego dostępu spoza klasy, w której są one zdefiniowane

*/

{
  class Email {

    private name: string;  // tu private i nic się nie dzieje, bo private name i private domain są używane tylko tu w konstruktorze i w wewnętrznej funkcji toString. Gdy private, to możemy z nich korzystac tylko z wnętrza.
    private domain: string;

    // konstruktory są publiczne z defaultu, ale mogą być prywatne, np przy wzorcu fabrykującym
    constructor(name: string, domain: string) {
      this.name = name;
      this.domain = domain;
    }

    private toString = () => {
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

  const email : Email = new Email('Dana', 'odrana.tk');
}