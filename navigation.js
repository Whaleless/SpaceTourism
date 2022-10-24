const navButton = document.querySelector('.menu-button');
const navMenu = document.querySelector('.navigation');

navButton.addEventListener('click', () => {
    const visibility = navMenu.getAttribute('data-visible');

    if (visibility == 'false') {
        navMenu.setAttribute('data-visible', 'true');
        navButton.setAttribute('area-expanded', 'true');
    } else {
        navMenu.setAttribute('data-visible', 'false');
        navButton.setAttribute('area-expanded', 'false');
    }
})