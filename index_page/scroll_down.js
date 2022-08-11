function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth' 
    })
}

var button = document.querySelector('.scroll_down');
var footer = document.querySelector('footer')

button.addEventListener('click', () => {
    scrollTo(footer);
})