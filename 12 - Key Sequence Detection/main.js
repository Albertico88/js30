// Konami Code: UP UP DOWN DOWN LEFT RIGHT LEFT RIGHT B A ENTER
const keysPressed =[];
const secretCode = 'unicorn';


window.addEventListener('keyup', (event) => {
  keysPressed.push(event.key);
  keysPressed.splice
    (-secretCode.length - 1, keysPressed.length - secretCode.length);
  console.log(keysPressed);

  if (keysPressed.join('').includes(secretCode)) {
    console.log('Secred Code Pressed 🔑');
    cornify_add();
  }
});
