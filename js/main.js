$(document).ready(function(e) {
    $win = $(window);
    $navbar = $('#header');
    $toggle = $('.toggle-button');
    var width = $navbar.width();
    toggle_onclick($win, $navbar, width);
    
    // Resize Event
    $win.resize(function(){
        toggle_onclick($win, $navbar, width);
    });

    $toggle.click(function(e){
        $navbar.toggleClass('toggle-left');
    });

    // Click to scroll to top
    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
    });
});

// Scroll to Top when chevron icon clicked
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if(height > 600){
        $('.move-up').fadeIn();
        $('.move-up').style.visibility = "visible";
    } else {
        $('.move-up').fadeOut();
        $('.move-up').style.visibility = "hidden";
    }
});

function toggle_onclick($win, $navbar, width){
    if($win.width() <= 767){
        $navbar.css({left: `-${width}px`});
    } else {
        $navbar.css({left: '0px'});
    }
}

var typed = new Typed('#typed', {
    strings: [
        "Fresh Graduate From MMU Cyberjaya",
        "I'm 22 Years old",
        "I'm from Puchong, Selangor"
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

var typed2 = new Typed('#typed2', {
    strings: [
        "Web Developer",
        "Game Developer",
        "Mobile App Developer"
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'vendor/particles/particles.json', function() {
    console.log('callback - particles.js config loaded');
});

/* Create a Granim instance */
var granimInstance = new Granim({
    element: '#canvas-basic',
    name: 'granim',
    opacity: [1, 1],
    states : {
        "default-state": {
            gradients: [
                ['#93A5CF', '#E4EFE9'], 
                ['#A3BDED', '#6991C7'],
                ['#A1C4FD', '#C2E9FB'],
                ['#29323C', '#485563']
            ]
        }
    }
 });

 // AOS Instance
 AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

  