let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

$(document).on('touchstart', function(e) {
    if (e.target.nodeName !== 'INPUT') {
        e.preventDefault();
    }
});

$(document).on('touchmove', function(e) {
    if (e.target.nodeName == 'INPUT') {
        e.preventDefault();
    }
});