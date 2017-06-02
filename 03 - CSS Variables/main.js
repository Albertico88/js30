const inputs = document.querySelectorAll('.controls input');
// returns node list, not array

function handleUpdate() {
  const suffix = this.dataset.sizing || ''; // Object containing all 'data-' attributes
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
