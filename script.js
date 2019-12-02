// zwezanie i rozszerzanie menu

const menu = document.querySelector('.menu');
window.addEventListener('scroll', function(){
    if (scrollY > 150) {
        menu.classList.add('smallmenu');
    }
    else {
        menu.classList.remove('smallmenu');
    }

});

const pictures = document.querySelectorAll('.image');

for(let i=0; i<4; i++) {
    pictures[i].addEventListener('mouseover', function () {
        this.nextElementSibling.style.color='blueviolet';
    });

    pictures[i].addEventListener('mouseout', function () {
        this.nextElementSibling.style.color='black';
    });
}
