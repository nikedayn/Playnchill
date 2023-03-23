let gameList = document.querySelector('.game_list');
let btns = document.querySelector('.game-navigation-menu')

let list = [
    {
        imgSrc: 'assets/main_page/img/flower.png',
        price: 250,
        percents: 0.4,
        name: 'Flower',
        categories: {
            //красный блок
            hit: false,

            //оранжевый блок
            new: true,

            //категории в низу блока игры
            key: true,
            boost: false,
            pumping: false,
            steamAccount: true,
            activation: true,
            epicGames: true
        }
    },
    {
        imgSrc: 'assets/main_page/img/hohokum.png',
        price: 1000,
        percents: 1,
        name: 'Hohokum',
        categories: {
            //красный блок
            hit: true,

            //оранжевый блок
            new: true,

            //категории в низу блока игры
            key: true,
            boost: true,
            pumping: true,
            steamAccount: true,
            activation: true,
            epicGames: true
        } 
    },
    {
        imgSrc: 'assets/main_page/img/e_witne.png',
        price: 350,
        percents: 0.15,
        name: 'E WITNE',
        categories: {
            //красный блок
            hit: false,

            //оранжевый блок
            new: false,

            //категории в низу блока игры
            key: true,
            boost: false,
            pumping: false,
            steamAccount: true,
            activation: true,
            epicGames: true
        }
    },
    {
        imgSrc: 'assets/main_page/img/eastshade.png',
        price: 500,
        percents: 0.2,
        name: 'Eastshade',
        categories: {
            //красный блок
            hit: true,

            //оранжевый блок
            new: false,

            //категории в низу блока игры
            key: false,
            boost: false,
            pumping: false,
            steamAccount: false,
            activation: false,
            epicGames: true
        }
    },
    {
        imgSrc: 'assets/main_page/img/shape_of_the_world.png',
        price: 200,
        percents: 0.35,
        name: 'Shape Of The World',
        categories: {
            //красный блок
            hit: false,

            //оранжевый блок
            new: true,

            //категории в низу блока игры
            key: true,
            boost: true,
            pumping: false,
            steamAccount: true,
            activation: false,
            epicGames: false
        }
    },
    {
        imgSrc: 'assets/main_page/img/journey.png',
        price: 300,
        percents: 0.15,
        name: 'JOURNEY',
        categories: {
            //красный блок
            hit: false,

            //оранжевый блок
            new: false,

            //категории в низу блока игры
            key: true,
            boost: false,
            pumping: true,
            steamAccount: false,
            activation: true,
            epicGames: false
        }
    },
    {
        imgSrc: 'assets/main_page/img/a_short_hike.png',
        price: 250,
        percents: 0.2,
        name: 'A Short Hike',
        categories: {
            //красный блок
            hit: false,

            //оранжевый блок
            new: false,

            //категории в низу блока игры
            key: true,
            boost: true,
            pumping: true,
            steamAccount: true,
            activation: false,
            epicGames: true
        }
    },
    {
        imgSrc: 'assets/main_page/img/little_big_planet.png',
        price: 1000,
        percents: 0.4,
        name: 'LittleBIG Planet',
        categories: {
            //красный блок
            hit: true,

            //оранжевый блок
            new: true,

            //категории в низу блока игры
            key: true,
            boost: false,
            pumping: false,
            steamAccount: true,
            activation: false,
            epicGames: true
        }
    },
    {
        imgSrc: 'assets/main_page/img/unravel.png',
        price: 250,
        percents: 0.1,
        name: 'UNRAVEL',
        categories: {
            //красный блок
            hit: true,

            //оранжевый блок
            new: false,

            //категории в низу блока игры
            key: true,
            boost: false,
            pumping: false,
            steamAccount: true,
            activation: true,
            epicGames: false
        }
    },
    {
        imgSrc: 'assets/main_page/img/seasons_after_fall.png',
        price: 560,
        percents: 0.1,
        name: 'Seasons after Fall',
        categories: {
            //красный блок
            hit: false,

            //оранжевый блок
            new: true,

            //категории в низу блока игры
            key: false,
            boost: false,
            pumping: true,
            steamAccount: true,
            activation: true,
            epicGames: false
        }
    },
    {
        imgSrc: 'assets/main_page/img/yonder.png',
        price: 100,
        percents: 0.4,
        name: 'Yonder',
        categories: {
            //красный блок
            hit: false,

            //оранжевый блок
            new: false,

            //категории в низу блока игры
            key: true,
            boost: true,
            pumping: true,
            steamAccount: true,
            activation: false,
            epicGames: true
        }
    },
    {
        imgSrc: 'assets/main_page/img/minecraft.png',
        price: 240,
        percents: 0.17,
        name: 'Minecraft',
        categories: {
            //красный блок
            hit: true,

            //оранжевый блок
            new: false,

            //категории в низу блока игры
            key: false,
            boost: true,
            pumping: false,
            steamAccount: false,
            activation: true,
            epicGames: false
        }
    },
]

let links = document.querySelectorAll('.game-navigation-menu-item-link');
console.log(links);
// linkThatActive = links.filter(link => link);
// console.log(links.filter(link => link));
console.log(list)

btns.addEventListener ('click', (e) => {
    if (e.target.classList.contains('if_u_in_some_section')) {
        generateGames(list);
        removeClass();
    }
    else {
        if (e.target.id == 'new') {
            let listNew = list.filter(game => game.categories.new);
            generateGames(listNew);
            removeClass();
            e.target.classList.add('if_u_in_some_section');
        }
        else if (e.target.id == 'hit') {
            let listNew = list.filter(game => game.categories.hit);
            generateGames(listNew);
            removeClass();
            e.target.classList.add('if_u_in_some_section');
        }
        else if (e.target.id == 'account') {
            let listNew = list.filter(game => (game.categories.epicGames || game.categories.steamAccount));
            generateGames(listNew);
            removeClass();
            e.target.classList.add('if_u_in_some_section');
        }
        else if (e.target.id == 'keys') {
            let listNew = list.filter(game => game.categories.key);
            generateGames(listNew);
            removeClass();
            e.target.classList.add('if_u_in_some_section');
        }
        else if (e.target.id == 'activation') {
            let listNew = list.filter(game => game.categories.activation);
            generateGames(listNew);
            removeClass();
            e.target.classList.add('if_u_in_some_section');
        }
        else if (e.target.id == 'pumping') {
            let listNew = list.filter(game => game.categories.pumping);
            generateGames(listNew);
            removeClass();
            e.target.classList.add('if_u_in_some_section');
        }
    }
})

let removeClass = () => {
    links.forEach((link) => {
        link.classList.remove('if_u_in_some_section');
    })
}

let counter = 0;

let generateGames = (currentList) => {
    gameList.innerHTML = ''
    currentList.forEach((game) => { 
        counter++;
        gameList.innerHTML += `
            <li class="game_list_item">
                <div class="img_and_div">
                    <img src="${game.imgSrc}">
                    <div class="achievements" id="achievementsBlock${counter}">
                        
                    </div>
                    <button class="inCart">В кошик</button>
                </div>
                <div class="text_container">
                    <div class="prices">
                        <h3 class="price_now">${Math.round(game.price - (game.price * game.percents))} ₴</h3>
                        <p class="percents">-${game.percents * 100}%</p>
                        <h3 class="price_before">${game.price} ₴</h3>
                    </div>
                    <h4 class="game_name">${game.name}</h4>
                    <div class="points" id="pointsBlock${counter}">

                    </div>
                    <div class="achievements_mobile" id="achievementsBlockMobile${counter}">
                        
                    </div>
                    <div class="container_icon">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.65953 2.60856L0 2.36418L0.22549 0L4.49329 0.392171L5.59618 3.89179L24 5.58293L23.164 14.3485L7.19617 17.0039L2.65953 2.60856ZM6.37019 6.34781L8.88113 14.3153L20.9285 12.3119L21.3659 7.72578L6.37019 6.34781Z" fill="white" fill-opacity="0.1"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7707 22.6255C19.1047 22.6255 19.3755 22.3597 19.3755 22.0319C19.3755 21.704 19.1047 21.4382 18.7707 21.4382C18.4367 21.4382 18.1659 21.704 18.1659 22.0319C18.1659 22.3597 18.4367 22.6255 18.7707 22.6255ZM18.7707 25C20.4408 25 21.7947 23.6711 21.7947 22.0319C21.7947 20.3926 20.4408 19.0637 18.7707 19.0637C17.1006 19.0637 15.7468 20.3926 15.7468 22.0319C15.7468 23.6711 17.1006 25 18.7707 25Z" fill="white" fill-opacity="0.1"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.09413 22.6255C9.42814 22.6255 9.69891 22.3597 9.69891 22.0319C9.69891 21.704 9.42814 21.4382 9.09413 21.4382C8.76011 21.4382 8.48934 21.704 8.48934 22.0319C8.48934 22.3597 8.76011 22.6255 9.09413 22.6255ZM9.09413 25C10.7642 25 12.1181 23.6711 12.1181 22.0319C12.1181 20.3926 10.7642 19.0637 9.09413 19.0637C7.42405 19.0637 6.07019 20.3926 6.07019 22.0319C6.07019 23.6711 7.42405 25 9.09413 25Z" fill="white" fill-opacity="0.1"/>
                        </svg>
                        <svg width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.17875 2.47059C4.48377 2.47059 2.47619 4.45541 2.47619 6.69457C2.47619 7.78053 2.9447 8.84477 3.81685 9.64625L13 18.0853L22.1831 9.64625C23.0553 8.84478 23.5238 7.78053 23.5238 6.69457C23.5238 4.45541 21.5162 2.47059 18.8212 2.47059C17.5427 2.47059 16.3349 2.93827 15.4593 3.74289L13.8388 5.23214C13.3648 5.66772 12.6352 5.66772 12.1612 5.23214L10.5407 3.7429C9.66509 2.93828 8.45731 2.47059 7.17875 2.47059ZM0 6.69457C0 2.90358 3.31187 0 7.17875 0C9.05132 0 10.8656 0.682659 12.2182 1.92567L13 2.6441L13.7818 1.92566C15.1344 0.682658 16.9487 0 18.8212 0C22.6881 0 26 2.90358 26 6.69457C26 8.5044 25.2167 10.2173 23.8607 11.4635L13.8388 20.6733C13.3648 21.1089 12.6352 21.1089 12.1612 20.6733L2.13929 11.4635C0.783262 10.2173 0 8.5044 0 6.69457Z" fill="#1E1C27"/>
                        </svg>
                    </div>
                </div>
            </li>
        `
        //красный блок
        if(game.categories.hit) {
            categoryHitForGame();
        }

        //оранжевый блок
        if(game.categories.new) {
            categoryNewForGame();
        }

        //категории в низу блока игры
        if(game.categories.pumping) {
            categoryPumpingForGame();
        } else if (game.categories.boost) {
            categoryBoostForGame();
        } else if(game.categories.key) {
            categoryKeyForGame();
        }

        if (game.categories.epicGames) {
            categoryEpicGamesForGame();
        } else if (game.categories.activation) {
            categoryActivationForGame();
        } else if(game.categories.steamAccount) {
            categorySteamAccountForGame();
        }
    })
    counter = 0;
}

//варианты категорий
//хит продаж
let categoryHitForGame = () => {
    let achievements = document.querySelector(`#achievementsBlock${counter}`);
    let achievementsMobile = document.querySelector(`#achievementsBlockMobile${counter}`);
    achievements.innerHTML += `
        <div class="hit">
            <p class="bestseller">Хіт продажу</p>
        </div>
    `
    achievementsMobile.innerHTML += `
        <p class="bestseller">Хіт продажу</p>
    `
}

//новинки
let categoryNewForGame = () => {
    let achievements = document.querySelector(`#achievementsBlock${counter}`);
    let achievementsMobile = document.querySelector(`#achievementsBlockMobile${counter}`);
    achievements.innerHTML += `
        <div class="new">
            <p class="novelties">Новинка</p>
        </div>
    `
    achievementsMobile.innerHTML += `
        <p class="novelties">Новинка</p>
    `
}

//ключ
let categoryKeyForGame = () => {
    let pointsBlock = document.querySelector(`#pointsBlock${counter}`);
    pointsBlock.innerHTML += `
        <div class="point_and_text">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7" cy="7" r="7" fill="#3D394A"/>
            </svg>
            <p class="peculiarities">Ключ</p>
        </div>
    `
}

//прокачка
let categoryPumpingForGame = () => {
    let pointsBlock = document.querySelector(`#pointsBlock${counter}`);
    pointsBlock.innerHTML += `
        <div class="point_and_text">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7" cy="7" r="7" fill="#3D394A"/>
            </svg>
            <p class="peculiarities">Прокачка</p>
        </div>
    `
}

//буст
let categoryBoostForGame = () => {
    let pointsBlock = document.querySelector(`#pointsBlock${counter}`);
    pointsBlock.innerHTML += `
        <div class="point_and_text">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7" cy="7" r="7" fill="#3D394A"/>
            </svg>
            <p class="peculiarities">Буст</p>
        </div>
    `
}

//активация
let categoryActivationForGame = () => {
    let pointsBlock = document.querySelector(`#pointsBlock${counter}`);
    pointsBlock.innerHTML += `
        <div class="point_and_text">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7" cy="7" r="7" fill="#3D394A"/>
            </svg>
            <p class="peculiarities">Активація</p>
        </div>
    `
}

//epic games
let categoryEpicGamesForGame = () => {
    let pointsBlock = document.querySelector(`#pointsBlock${counter}`);
    pointsBlock.innerHTML += `
        <div class="point_and_text">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7" cy="7" r="7" fill="#3D394A"/>
            </svg>
            <p class="peculiarities">Epic Games</p>
        </div>
    `
}

//Аккаунт Steam
let categorySteamAccountForGame = () => {
    let pointsBlock = document.querySelector(`#pointsBlock${counter}`);
    pointsBlock.innerHTML += `
        <div class="point_and_text">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7" cy="7" r="7" fill="#3D394A"/>
            </svg>
            <p class="peculiarities">Аккаунт Steam</p>
        </div>
    `
}

generateGames(list);