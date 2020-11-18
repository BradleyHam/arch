import './styles/style.scss';

var hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active')
    }
)