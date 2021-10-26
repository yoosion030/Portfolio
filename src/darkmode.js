const white = document.querySelectorAll('.white');
const black = document.querySelectorAll('.black');
const darkMode = document.querySelector('#dark-mode');
const contactA = document.querySelector('.e-mail');

darkMode.addEventListener('click', e => {
    if (e.target.checked) {
        for (let i = 0; i < white.length; i++) {
            white[i].classList.remove('white');
            white[i].classList.add('black');
            for (let i = 0; i < a.length; i++) {
                a[i].style = "color: var(--white-color);";
                contactA.style = "color : var(--black-color)";
            }
        }
        for (let i = 0; i < black.length; i++) {
            black[i].classList.remove('black');
            black[i].classList.add('white');
        }
    } 
    else {
        for (let i = 0; i < white.length; i++) {
            white[i].classList.remove('black');
            white[i].classList.add('white');
            for (let i = 0; i < a.length; i++) {
                a[i].style = "color: var(--black-color);";
                contactA.style = "color: var(--white-color);";
            }
        }
        for (let i = 0; i < black.length; i++) {
            black[i].classList.remove('white');
            black[i].classList.add('black');
        }
    }
});

