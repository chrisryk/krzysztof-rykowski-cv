const sections = [...document.querySelectorAll('section')];

window.addEventListener('scroll', function(){
    const scrollValue = this.scrollY;
    const viewportHeight = window.innerHeight;
    
    sections.forEach(section => {
        const sectionPosition = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollValue > sectionPosition + sectionHeight - viewportHeight){
            section.classList.add('scrolled');
        }
    });
})
