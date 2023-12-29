let navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.top = '0';
}
function hideMenu(){
    navLinks.style.top = '-800px'
}

// Handle navigation clicks
document.querySelectorAll('a[href^="./"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const href = this.getAttribute('href');
  
      // Add a class to the body to trigger the animation
      document.body.classList.add('slide-out');
  
      setTimeout(() => {
        window.location.href = href;
      }, 800); // Adjust the time according to your animation duration
    });
  });
  