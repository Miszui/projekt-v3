export default () => {
    const toggleMenuElement = document.getElementById('toggle-menu');
    if (toggleMenuElement) {
        const menuElement = document.getElementById('togglable-menu');
        const matchMedia = window.matchMedia('(min-width: 992px)');
        matchMedia.addEventListener('change', (event) => {
            if (event.matches) {
                menuElement.classList.remove('visible');
            }
        });

        toggleMenuElement.addEventListener('click', () => {
            const menuElement = document.getElementById('togglable-menu');
            if (menuElement) {
                menuElement.classList.toggle('visible');
            }
        });
    }

    const pageHeaderElement = document.getElementById('js-page-header');
    const menuElements = document.querySelectorAll('#menu .js-menu-element');
    menuElements.forEach((element) => {
        element.addEventListener('click', (event) => {
            pageHeaderElement.innerHTML = element.children[0].innerHTML.trim();

            event.preventDefault();
            return false;
        });
    });
};
