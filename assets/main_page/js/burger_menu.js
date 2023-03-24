let burgerMenu = document.querySelector('.burger_block');
let burgerMenuBtn = document.querySelector('.burgerBtn');
let body = document.querySelector('body');
let flagForBurger = 0;

burgerMenuBtn.addEventListener('click', () => {
    if(flagForBurger == 0){
        burgerMenuBtn.classList.add('activated_burger_btn');
        flagForBurger = 1;
        burgerMenu.style.left = 0;
        body.style.overflowY = 'hidden';
    }
    else if(flagForBurger == 1){
        burgerMenuBtn.classList.remove('activated_burger_btn');
        flagForBurger = 0;
        burgerMenu.style.left = "100%";
        body.style.overflowY = 'visible';
    }
})