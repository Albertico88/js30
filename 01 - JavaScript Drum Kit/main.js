function playSound(event){
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if (!audio)
   return; // If no audio, return out of the function
  audio.currentTime = 0; // rewind to the start;
  audio.play();
  key.classList.add('playing'); // assigns CSS class of 'playing'
}

function removeTransition(event) {
  if (event.propertyName !== 'transform') // skip if not a transform
    return;
  this.classList.remove('playing');  // 'this' = key
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); // executes function to remove 'playing' class

window.addEventListener('keydown', playSound); // When keypress, executes playSound function.
