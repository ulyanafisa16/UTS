/*===== toggle icon navbar =====*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};




/*=====scroll section active=====*/
window.addEventListener("scroll", function() {
    var currentSection = "";
    var sections = document.querySelectorAll("section");
    var navLinks = document.querySelectorAll("nav a");
  
    sections.forEach(function(section) {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 4) {
        currentSection = section.getAttribute("id");
      }
    });
  
    navLinks.forEach(function(navLink) {
      navLink.classList.remove("active");
      if (navLink.getAttribute("href").slice(1) === currentSection) {
        navLink.classList.add("active");
      }
    });

    /*=====Sticky navbar=====*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*=====remove toggle icon=====*/
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');


  });

  /*=====scroll reveal=====*/


  
  


  