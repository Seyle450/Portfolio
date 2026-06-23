function toggleDisplay(container) {
  let ingredients = container.querySelector('.ingredient');
  let nutrients = container.querySelector('.nutritiens'); // Corrected class name

  if (ingredients.style.display !== 'none') {
    ingredients.style.display = 'none';
    nutrients.style.display = 'block'; // Changed to valid display value
  } else {
    nutrients.style.display = 'none';
    ingredients.style.display = 'block'; // Changed to valid display value
  }
}

document.querySelectorAll('.container').forEach(container => {
  let intervalId;
  let timeoutId;

  container.addEventListener('mouseenter', () => {
    if (!intervalId) {
      // Ensure one of the elements appears after 1 second
      timeoutId = setTimeout(() => {
        let ingredients = container.querySelector('.ingredient');
        let nutrients = container.querySelector('.nutritiens'); // Corrected class name
        ingredients.style.display = 'none';
        nutrients.style.display = 'block';
        
        // Start the interval to toggle display every 2.5 seconds
        intervalId = setInterval(() => toggleDisplay(container), 2500);
      }, 100); // 1 second delay
    }
  });

  container.addEventListener('mouseleave', () => {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    // Ensure both elements disappear when mouse leaves
    container.querySelector('.ingredient').style.display = 'none';
    container.querySelector('.nutritiens').style.display = 'none';
  });
});