let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onClick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



let sections = document.querySelectorAll('section');
let navlink = document.querySelectorAll('header nav a');


window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }

    })
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration:2000,
    delay: 200
});
ScrollReveal().reveal('.home-contact, .heading', { origin:'top' });
ScrollReveal().reveal('.home-img, .services-container,.portfolio-box,.contact form', { origin:'bottom' });

const typed = new Typed('.multiple-text', {
    strings:['Frontend Developer', "Backend Developer"],
    typeSpeed: 100,
    backSpeed:100,
    backDelay: 1000,
    loop: true

});