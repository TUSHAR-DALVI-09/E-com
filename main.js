 /*===================== sticky navbar ====================*/
//  let header = document.querySelector('nav-bar');
//  header.classList.toggle('sticky', window.scrollY > 100);

/*===================== scroll reveal ====================*/
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('p,h1', { origin: 'top' });
// ScrollReveal().reveal('.contact form', { origin: 'button' });
ScrollReveal().reveal('.box, .box-content', { origin: 'left' });
ScrollReveal().reveal('.box, .box-content', { origin: 'bottom' });