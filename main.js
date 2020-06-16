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

    let lastScroll = 0;

    let modal = document.getElementById('modal');
    let overflow = document.getElementsByTagName('html')[0];
    let overlay = document.getElementById('overlay');
    let msgOverlay = document.getElementById('msg-overlay');
    let closeBtn = document.getElementById('close-btn');
    let heroHeight = document.getElementById('hero').offsetHeight;
    let navLinks = document.querySelectorAll('a.nav-link');
    let header = document.getElementsByTagName('header')[0];
    let headerHeight = header.offsetHeight;
    let combinedHeight = heroHeight - headerHeight + 60;
    let menuBtn = document.getElementById('mobile-menu');
    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";

    setTimeout(() => {
        modal.classList.add('show');
        msgOverlay.classList.add('show');
        overflow.style.overflowY = 'hidden';
    }, 1500);

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

    //scroll
    window.addEventListener('scroll', () => {

        if (pageWidth > 768 && window.pageYOffset > combinedHeight) {
            header.classList.add('scrolled');
            menuBtn.classList.add('scrolled');
        }
        else {
            header.classList.remove('scrolled');
            menuBtn.classList.remove('scrolled');
        }

        const currentScroll = window.pageYOffset;
        if (currentScroll == 0) {
            header.classList.remove(scrollUp);
            return;
        }
        if (currentScroll > lastScroll && !header.classList.contains(scrollDown)) {
            // down
            header.classList.remove(scrollUp);
            header.classList.add(scrollDown);
        } else if (currentScroll < lastScroll && header.classList.contains(scrollDown)) {
            // up
            header.classList.remove(scrollDown);
            header.classList.add(scrollUp);
        }
        lastScroll = currentScroll;

    }, false);


});