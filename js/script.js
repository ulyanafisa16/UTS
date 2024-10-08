
/*======alert======*/
let nama = "Hello Welcome to my Portofolio";
alert(nama);


/*======mode======*/
let body = document.body;
function darkMode() {
    console.log('dark mode di klik')
    body.classList.toggle("dark");
}


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
      var navbar = document.getElementById('navbar');
       if (window.scrollY > 0) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    

    /*=====remove toggle icon=====*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  });
  /*=====Sticky navbar=====*/
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  /*=====remove toggle icon=====*/
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

  /*=====scroll reveal=====*/
  ScrollReveal({
    /*reset: true,*/
    distance:'80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .education-container, .skills-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*=====typed js=====*/
const typed = new Typed('.multiple-text',{
    strings:['Software Engineering Students', 'Blogger', 'Web Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Add this script to your existing JavaScript or create a new JS file
document.addEventListener('DOMContentLoaded', function () {
  // Use ScrollReveal to animate the news section
  ScrollReveal().reveal('.news', {
      duration: 1000,
      origin: 'left',
      distance: '50px',
      easing: 'ease-in-out',
  });
});


