import Cookies from 'js-cookie';

export default () => {
    const messageELement = document.getElementById('cookie-message-bar');
    if (messageELement) {
        const cookieName = 'cookiesConfirmed';
        if (Cookies.get(cookieName)) {
            messageELement.remove();
        } else {
            const confirmCookiesElement = document.getElementById('confirm-cookies-info');
            if (confirmCookiesElement) {
                confirmCookiesElement.addEventListener('click', () => {
                    Cookies.set(cookieName, true);
                    messageELement.classList.add('fadeOut');
                    setTimeout(() => {
                        messageELement.remove();
                    }, 500);
                });
            }
        }
    }
};
