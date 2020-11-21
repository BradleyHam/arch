import './styles/index.scss';

var hamburger = document.querySelector('.hamburger');
var contentSelectorList = document.querySelectorAll('.hero__content-selector div');
var contentSelectorArray = Array.from(contentSelectorList);
var heroElement = document.getElementById('hero')
var heroHeading = document.getElementById('hero-h1');
var heroText = document.getElementById('hero-p');
var contentSelectorOne = document.querySelector('.hero__content-selector--one');

hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active')
    }
)

function handleContentSelect(index){
        if(index === '1'){
            heroElement.className = 'hero one-active';
            heroHeading.innerText = 'Project Paramour';
            heroText.innerText ='Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.';
        }else if(index === '2'){
            heroElement.className = 'hero two-active';
            heroHeading.innerText = 'Seraph Station';
            heroText.innerText = 'The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.';
        }else if(index === '3'){
            heroElement.className = 'hero three-active'
            heroHeading.innerText = 'Federal II Tower';
            heroText.innerText = 'A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.';
        }else{
            heroElement.className = 'hero four-active';
            heroHeading.innerText = 'Trinity Bank Tower';
            heroText.innerText = 'Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency.';
        }
}

contentSelectorArray.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        contentSelectorArray.forEach((item)=>{
            item.classList.remove('active')
        })
        e.target.classList.add('active');
        handleContentSelect(e.target.dataset.indexNumber);
    })
})
