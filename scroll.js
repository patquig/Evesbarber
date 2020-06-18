
var controller = new ScrollMagic.Controller();

var hero = new ScrollMagic.Scene({
    triggerElement: '#hero',
    duration: document.getElementById('hero').offsetHeight
})
    .setClassToggle('body', 'black')
    .triggerHook(0.1)
    .addTo(controller);

var book = new ScrollMagic.Scene({
    triggerElement: '#book',
    duration: document.getElementById('book').offsetHeight
})
    .setClassToggle('body', 'black')
    .triggerHook(0.1)
    .addTo(controller);

var about = new ScrollMagic.Scene({
    triggerElement: '#about',
    duration: document.getElementById('about').offsetHeight
})
    .setClassToggle('body', 'white')
    .triggerHook(0.1)
    .addTo(controller);

var prices = new ScrollMagic.Scene({
    triggerElement: '#prices',
    duration: document.getElementById('prices').offsetHeight
})
    .setClassToggle('body', 'black')
    .triggerHook(0.1)
    .addTo(controller);

var contact = new ScrollMagic.Scene({
    triggerElement: '#times',
    duration: document.getElementById('times').offsetHeight
})
    .setClassToggle('body', 'white')
    .triggerHook(0)
    .addTo(controller);

var contact = new ScrollMagic.Scene({
    triggerElement: '#contact',
    duration: document.getElementById('contact').offsetHeight
})
    .setClassToggle('body', 'black')
    .triggerHook(0)
    .addTo(controller); 