window.addEventListener('load', () => {

    function getWidth() {
        return Math.max(
            document.body.scrollWidth,
            document.documentElement.scrollWidth,
            document.body.offsetWidth,
            document.documentElement.offsetWidth,
            document.documentElement.clientWidth
        );
    }

    let pageWidth = getWidth();

    let closeBtn = document.getElementById('close-btn');
    let overlay = document.getElementById('overlay');
    let navLinks = document.querySelectorAll('a.nav-link');
    let header = document.getElementsByTagName('header')[0];
    let menuBtn = document.getElementById('mobile-menu');
    let yearEl = document.getElementById('year');
    let hero = document.getElementById('hero');
    let year = new Date; 

    yearEl.innerText = year.getFullYear();

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('open');
        header.classList.toggle('menu-open');
        overlay.classList.toggle('show');
    });

    overlay.addEventListener('click', () => {
        closeMenu();
        closeOverlay();
    });

    navLinks.forEach(item => {
        item.addEventListener('click', event => {
            closeMenu();
            closeOverlay();
        })
    });

    function closeMenu() {
        menuBtn.classList.remove('open');
        header.classList.remove('menu-open');
    }

    function closeOverlay() {
        overlay.classList.remove('show');
    }

    setTimeout(() => {
        hero.classList.add('show-bg');
    }, 1000);


});