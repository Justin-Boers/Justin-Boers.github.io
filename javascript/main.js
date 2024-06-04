function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

//explenation button
const btnOne = document.querySelector('.project1');

btnOne.addEventListener('click', function() {
    alert('Button clicked!');
});