function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth' 
    })
}

var button = document.querySelector('.scroll_up_img');
var header = document.querySelector('header')

button.addEventListener('click', () => {
    scrollTo(header);
})