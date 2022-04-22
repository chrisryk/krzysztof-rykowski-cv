const sections = [...document.querySelectorAll('section')];
const arrowDiv = document.querySelector('.arrow');
const arrowImg = document.querySelector('.arrow img');

window.addEventListener('scroll', function() {
    const scrollValue = this.scrollY;
    const viewportHeight = window.innerHeight;

    if (scrollValue > 0) {
        arrowDiv.classList.add('active');
        arrowImg.classList.add('roll');
    }
    else {
        arrowDiv.classList.remove('active');
        arrowImg.classList.remove('roll');
    }
    
    sections.forEach(section => {
        const sectionPosition = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollValue > sectionPosition + sectionHeight - viewportHeight){
            section.classList.add('scrolled');
        }
    });
})