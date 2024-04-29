// First task
// document.addEventListener('DOMContentLoaded', function() {
//     let hiderButton = document.getElementById('hider');
//     let textElement = document.getElementById('text');

//     hiderButton.addEventListener('click', function() {
//         textElement.style.display = 'none';
//     });
// });

// Secon task: код выведет 2

// Third task
document.addEventListener('DOMContentLoaded', function() {
    var panes = document.querySelectorAll('.pane');
  
    panes.forEach(function(pane) {
      var closeButton = document.createElement('button');
      closeButton.innerHTML = '[x]';
      closeButton.className = 'remove-button';
  
      closeButton.onclick = function() {
        pane.remove();
      };
  
      pane.insertBefore(closeButton, pane.firstChild);
    });
  });
  