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

    console.log(pageWidth);


    let modal = document.getElementById('modal');
    let overflow = document.getElementsByTagName('html')[0];
    let overlay = document.getElementById('overlay');
    let msgOverlay = document.getElementById('msg-overlay');
    let closeBtn = document.getElementById('close-btn');
    let navLinks = document.querySelectorAll('a.nav-link');
    let header = document.getElementsByTagName('header')[0];
    let menuBtn = document.getElementById('mobile-menu');
    let yearEl = document.getElementById('year');
    let hero = document.getElementById('hero');
    let year = new Date; 

    yearEl.innerText = year.getFullYear();

    setTimeout(() => {
        modal.classList.add('show');
        msgOverlay.classList.add('show');
        overflow.style.overflowY = 'hidden';
    }, 80000);

    overlay.addEventListener('click', () => {
        closeModal();
        closeMenu();
        closeOverlay();
    });

    msgOverlay.addEventListener('click', () => {
        closeModal();
    });

    closeBtn.addEventListener('click', () => {
        closeModal();
    });

    function closeModal() {
        modal.classList.remove('show');
        overflow.style.overflowY = 'visible';
    }

    function closeMenu() {
        menuBtn.classList.remove('open');
        header.classList.remove('menu-open');
    }

    function closeOverlay() {
        overlay.classList.remove('show');
    }

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('open');
        header.classList.toggle('menu-open');
        overlay.classList.toggle('show');
    });

    navLinks.forEach(item => {
        item.addEventListener('click', event => {
            closeMenu();
            closeOverlay();
        })
    });

    setTimeout(() => {
        hero.classList.add('show-bg');
    }, 3000);


});