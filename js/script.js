/*CODE AFFICHER PLUS AVEC LE "+" POUR LA PAGE SERVICES */ 
window.addEventListener('load', function() {
  const toggleList = document.querySelectorAll('.toggle');

  toggleList.forEach(function(toggle) {
    toggle.addEventListener('click', function() {
      const content = toggle.parentElement.nextElementSibling;

      if (content.style.display === 'none') {
        content.style.display = 'block';
        toggle.textContent = '-';
      } else {
        content.style.display = 'none';
        toggle.textContent = '+';
      }
    });
  });
});

/*CODE AFFICHER VOIR PLUS POUR LA PAGE ARCHIVES */ 

window.addEventListener('load', function() {
  const seeMoreButton = document.getElementById('see-more');
  const hiddenCards = document.getElementById('hidden-cards');

  seeMoreButton.addEventListener('click', function() {
    hiddenCards.style.display = 'block';
    seeMoreButton.style.display = 'none';
  });
});
