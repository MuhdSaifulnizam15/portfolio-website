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
    })
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