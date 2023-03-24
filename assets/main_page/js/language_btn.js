let languageBtn = document.querySelector('#btnLanguageChange');
let languageBtnSvg = document.querySelector('#btnLanguageChange > svg');
let languageList = document.querySelector('.language_list');
let flagForLanguageMenu = 0;
let flagForLanguageli = 0;
let classForli = 'green';

let removeClass = (arr, classThatMustBeDeleted) => {
    arr.forEach((elementOfArr) => {
        elementOfArr.classList.remove(`${classThatMustBeDeleted}`);
    })
}

languageBtn.addEventListener('click', () => {
    if(flagForLanguageMenu == 0){
        languageBtnSvg.style.transform = 'scaleY(1)';
        languageList.style.top = '40px';
        flagForLanguageMenu = 1;
    }
    else if(flagForLanguageMenu == 1){
        languageBtnSvg.style.transform = 'scaleY(-1)';
        languageList.style.top = '-110px';
        flagForLanguageMenu = 0;
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