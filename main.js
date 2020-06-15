window.addEventListener('load', () => {
    let el = document.getElementById('modal');

    setTimeout(() => {
        el.classList.add('show');
    }, 1500);

    let overlay = document.getElementById('msg-overlay');
    let closeBtn = document.getElementById('close-btn');

    overlay.addEventListener('click',() => {
        el.classList.remove('show');
    });
    
    closeBtn.addEventListener('click',() => {
        el.classList.remove('show');
    });

    let heroHeight = document.getElementById('hero').offsetHeight
    let header = document.getElementsByTagName('header')[0];

    window.addEventListener('scroll', () => {
        if(window.pageYOffset > heroHeight) {
            header.classList.add('scrolled');
        }
        else {
            header.classList.remove('scrolled'); 
        }
    });
});