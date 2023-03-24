// елементы для desctop
let languageBtn = document.querySelector('#btnLanguageChange');
let languageList = document.querySelector('#languageList');
let listSvg = document.querySelector(`#btnLanguageChange > svg`);
console.log(languageList);

// елементы для desctop
let languageBtnMobile = document.querySelector('#btnLanguageChangeMobile');
let languageListMobile = document.querySelector('#languageListMobile');
let listSvgMobile = document.querySelector(`#btnLanguageChangeMobile > svg`);

let flagForLanguageMenu = 0;
let flagForLanguageMenuMobile = 0;
let flagForLanguageli = 0;
let classForli = 'green';

let removeClass = (arr, classThatMustBeDeleted) => {
    arr.forEach((elementOfArr) => {
        elementOfArr.classList.remove(`${classThatMustBeDeleted}`);
    })
};

languageBtn.addEventListener('click', () => {
    if(flagForLanguageMenu == 0){
        listSvg.style.transform = 'scaleY(1)';
        languageList.style.top = '40px';
        flagForLanguageMenu = 1;
    }
    else if(flagForLanguageMenu == 1){
        listSvg.style.transform = 'scaleY(-1)';
        languageList.style.top = '-110px';
        flagForLanguageMenu = 0;
    }
});

languageBtnMobile.addEventListener('click', () => {
    if(flagForLanguageMenu == 0){
        listSvgMobile.style.transform = 'scaleY(1)';
        languageListMobile.style.left = '50px';
        flagForLanguageMenu = 1;
    }
    else if(flagForLanguageMenu == 1){
        listSvgMobile.style.transform = 'scaleY(-1)';
        languageListMobile.style.left = '-200%';
        flagForLanguageMenu = 0;
    }
});

languageListMobile.addEventListener('click', (e) => {
    if(e.target.classList.contains('language_list_item_link')){
        if(flagForLanguageli == 0){
            console.log(flagForLanguageli);
            let li = e.target.parentNode;
            let liArr = document.querySelectorAll('.language_list_item');
            if(!li.classList.contains('green')){
                removeClass(liArr, classForli);
                li.classList.add('green');
                flagForLanguageli = 1;
            }
            else if(li.classList.contains('green')){
                li.classList.remove('green');
            }
        }
        else if(flagForLanguageli == 1){
            console.log(flagForLanguageli);
            let li = e.target.parentNode;
            let liArr = document.querySelectorAll('.language_list_item');
            if(!li.classList.contains('green')){
                removeClass(liArr, classForli);
                li.classList.add('green');
            }
            else if(li.classList.contains('green')){
                li.classList.remove('green');
                flagForLanguageli = 0;
            }
        }
    }
})

languageList.addEventListener('click', (e) => {
    if(e.target.classList.contains('language_list_item_link')){
        if(flagForLanguageli == 0){
            console.log(flagForLanguageli);
            let li = e.target.parentNode;
            let liArr = document.querySelectorAll('.language_list_item');
            if(!li.classList.contains('green')){
                removeClass(liArr, classForli);
                li.classList.add('green');
                flagForLanguageli = 1;
            }
            else if(li.classList.contains('green')){
                li.classList.remove('green');
            }
        }
        else if(flagForLanguageli == 1){
            console.log(flagForLanguageli);
            let li = e.target.parentNode;
            let liArr = document.querySelectorAll('.language_list_item');
            if(!li.classList.contains('green')){
                removeClass(liArr, classForli);
                li.classList.add('green');
            }
            else if(li.classList.contains('green')){
                li.classList.remove('green');
                flagForLanguageli = 0;
            }
        }
    }
})
