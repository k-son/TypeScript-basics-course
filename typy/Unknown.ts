{
  let xx : unknown;

  xx = "Olgierd";
  xx = 3;
  xx = {};
  xx = () => {};

  if (typeof xx === 'number') {
    let xage : number = xx;
  }

  if (typeof xx === 'object' && xx !== null) {
    if ((xx as {age: number}).age !== undefined) {  // jakioś zrzutować trzeba, nie zajarzyłem tego

    }
  }

  if (typeof xx === 'function') {
    xx();
  }

}