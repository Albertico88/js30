// Get DOM Elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const fill = player.querySelector('.progress__filled');
const progress = player.querySelector('.progress');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelector('.player__slider');


// Build Functions
// Play
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Update play/pause button
function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

// Skip
function skip() {
  console.log('skipping');
}



// Hook up Event Listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
