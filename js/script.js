

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
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*=====remove toggle icon=====*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  });

  /*=====scroll reveal=====*/
  ScrollReveal({
    /*reset: true,*/
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .education-container, .skills-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*=====typed js=====*/
const typed = new Typed('.multiple-text',{
    strings:['Mahasiswa IT', 'Blogger', 'Anggota Kelas RPL B'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



  
  


  