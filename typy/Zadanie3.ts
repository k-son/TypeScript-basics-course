{
  const sum = (a : any, b : any) : number => {
    if (typeof a === 'number' && typeof b === 'number') {
      return a + b;
    } else {
      throw new Error('niepoprawne parametry dla funkcji');
    }
  }
}