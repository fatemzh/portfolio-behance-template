window.addEventListener('load', function() {
    const toggle = document.querySelector('.toggle');
    const content = document.querySelector('.content');
  
    toggle.addEventListener('click', function() {
      if (content.style.display === 'none') {
        content.style.display = 'block';
        toggle.textContent = '-';
      } else {
        content.style.display = 'none';
        toggle.textContent = '+';
      }
    });
  });
  