// Toggle navbar
let menuIcon = document.getElementById('menu-icon');
let navbar = document.querySelector('.nav');

menuIcon.onclick  = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}

// Scroll sections active links
let sections = document.querySelectorAll('section')
let navlinks = document.querySelectorAll ('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // sticky navbar
    let header = document.querySelector('header')
    header.classList.toggle('sticky',scrollY>100)

    // reemove toggle icon when click navbar link (scroll)
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
};

    // Scroll reveal

    ScrollReveal({
        reset:true,
        distance:'80px',
        duration: 2000,
        delay: 200,
    });

    ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form,', {origin: 'bottom'});
    ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
    ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});

    // Read more About Page

    function togglepopup1() {
        document.getElementById('popup-1').classList.toggle('active')
        
    }

    function togglepopup2() {
        document.getElementById('popup-2').classList.toggle('active')
    }
    
    function togglepopup3() {
        document.getElementById('popup-3').classList.toggle('active')
    }

    let portfolio1 = document.getElementById('portfolio-1') 
    function Change(){
        portfolio1.innerHTML = `
        <video onended="onending()" controls autoplay id="vedio1" src="blk - Search Results - Facebook.mp4"></video>
        `
    }

    function onending(){
        portfolio1.innerHTML = `<img src="BLK.jpg" alt="">
<div class="potfolio-layer">
    <h4>Qahwa BLK</h4>
    <p>A coffee shop located in Amman, Jordan utilized an aluminum section 
        that matches the desired aesthetic for the project, 
        incorporating multiple curves to achieve 
        consistency between the interior and exterior design.</p>
        <button onclick="Change()" class="btn" href="#">Watch Vedio</button>
</div>

`
    }

    // Galley-1

    let gallery1 = document.getElementById('gallery-1')
    
    function getGallery1(){
        gallery1.style.display = 'block'
    }

    function hideGallery(){
        gallery1.style.display = 'none'
        gallery2.style.display = 'none'
        gallery3.style.display = 'none'
        gallery4.style.display = 'none'
        gallery5.style.display = 'none'
    }

    let gallery2 = document.getElementById('gallery-2')
    function getGallery2(){
        gallery2.style.display = 'block'
    }

    let gallery3 = document.getElementById('gallery-3')
    function getGallery3(){
        gallery3.style.display = 'block'
    }

    let gallery4 = document.getElementById('gallery-4')
    function getGallery4(){
        gallery4.style.display = 'block'
    }

    let gallery5 = document.getElementById('gallery-5')
    function getGallery5(){
        gallery5.style.display = 'block'
    }
    

    

  

    

