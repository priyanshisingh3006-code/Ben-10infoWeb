var hamburger = document.getElementById('hamburgerBtn');
var mobileMenu = document.querySelector('.mobileNav');

hamburger.addEventListener('click', function() { mobileMenu.classList.toggle('open');
});

var currentFile = window.location.pathname.split('/').pop();
if (currentFile === '') currentFile = 'index.html';

var allLinks = document.querySelectorAll('.topNav a, .mobileNav a');

for (var i=0; i < allLinks.length; i++) { 
    if (allLinks[i].getAttribute('href') === currentFile) {
        allLinks[i].classList.add('active');
    
    }
}