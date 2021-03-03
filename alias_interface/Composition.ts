{
  interface Email {
    name: string,
    domain: string
  }

  interface Person {
    name: string,
    age: number,
    email: Email // tu podajemy interfejs
  }
  // takie cuś się zwie kompozycją
}