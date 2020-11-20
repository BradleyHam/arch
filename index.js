import './styles/style.scss';

var hamburger = document.querySelector('.hamburger');
var contentSelectorList = document.querySelectorAll('.hero__content-selector div');
var contentSelectorArray = Array.from(contentSelectorList);

hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active')
    }
)

contentSelectorArray.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        contentSelectorArray.forEach((item)=>{
            item.classList.remove('active')
        })
        e.target.classList.add('active')
    })
})