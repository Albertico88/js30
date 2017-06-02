const checkboxes = document.querySelectorAll('.container input[type="checkbox"]');
let lastChecked;

function handleCheck(event) {
  let inBetween = false;

  if (event.shiftKey && this.checked){

    // loop over each checkbox to see if checked
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
