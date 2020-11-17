import './styles/style.scss';
import './styles/header.scss';
import './styles/hamburger.css';

var hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active')
    }
)