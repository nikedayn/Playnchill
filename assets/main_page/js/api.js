let gameList = document.querySelector('.game_list');
let btns = document.querySelector('.game-navigation-menu')

let list = [
    {
        imgSrc: 'assets/main_page/img/flower.png',
        price: 250,
        percents: 0.4,
        name: 'Flower',
        categories: {
            new: true,
            hit: false,
            key: true,
            steamAccount: true,
            pumping: false,
            activation: true,
            boost: false,
            epicGames: true
        }
    },
    {
        imgSrc: 'assets/main_page/img/hohokum.png',
        price: 1000,
        percents: 1,
        name: 'Hohokum',
        categories: {
            new: true,
            hit: true,
            key: true,
            steamAccount: true,
            pumping: true,
            activation: true,
            boost: true,
            epicGames: true
        } 
    },
    {
        imgSrc: 'assets/main_page/img/e_witne.png',
        price: 350,
        percents: 0.15,
        name: 'E WITNE',
        categories: {
            new: false,
            hit: false,
            key: true,
            steamAccount: true,
            pumping: false,
            activation: true,
            boost: false,
            epicGames: true
        }
    },
    {
        imgSrc: 'assets/main_page/img/eastshade.png',
        price: 500,
        percents: 0.2,
        name: 'Eastshade',
        categories: {
            new: false,
            hit: true,
            key: false,
            steamAccount: false,
            pumping: false,
            activation: false,
            boost: false,
            epicGames: true
        }
    },
    {
        imgSrc: 'assets/main_page/img/shape_of_the_world.png',
        price: 200,
        percents: 0.35,
        name: 'Shape Of The World',
        categories: {
            new: true,
            hit: false,
            key: true,
            steamAccount: true,
            pumping: false,
            activation: false,
            boost: true,
            epicGames: false
        }
    },
    {
        imgSrc: 'assets/main_page/img/journey.png',
        price: 300,
        percents: 0.15,
        name: 'JOURNEY',
        categories: {
            new: false,
            hit: false,
            key: true,
            steamAccount: false,
            pumping: true,
            activation: true,
            boost: false,
            epicGames: false
        }
    },
    {
        imgSrc: 'assets/main_page/img/a_short_hike.png',
        price: 250,
        percents: 0.2,
        name: 'A Short Hike',
        categories: {
            new: false,
            hit: false,
            key: true,
            steamAccount: true,
            pumping: true,
            activation: false,
            boost: true,
            epicGames: true
        }
    },
    {
        imgSrc: 'assets/main_page/img/little_big_planet.png',
        price: 1000,
        percents: 0.4,
        name: 'LittleBIG Planet',
        categories: {
            new: true,
            hit: true,
            key: true,
            steamAccount: true,
            pumping: false,
            activation: false,
            boost: false,
            epicGames: true
        }
    },
    {
        imgSrc: 'assets/main_page/img/unravel.png',
        price: 250,
        percents: 0.1,
        name: 'UNRAVEL',
        categories: {
            new: false,
            hit: true,
            key: true,
            steamAccount: true,
            pumping: false,
            activation: true,
            boost: false,
            epicGames: false
        }
    },
    {
        imgSrc: 'assets/main_page/img/seasons_after_fall.png',
        price: 560,
        percents: 0.1,
        name: 'Seasons after Fall',
        categories: {
            new: true,
            hit: false,
            key: false,
            steamAccount: true,
            pumping: true,
            activation: true,
            boost: false,
            epicGames: false
        }
    },
    {
        imgSrc: 'assets/main_page/img/yonder.png',
        price: 100,
        percents: 0.4,
        name: 'Yonder',
        categories: {
            new: false,
            hit: false,
            key: true,
            steamAccount: true,
            pumping: false,
            activation: false,
            boost: true,
            epicGames: true
        }
    },
    {
        imgSrc: 'assets/main_page/img/minecraft.png',
        price: 240,
        percents: 0.17,
        name: 'Minecraft',
        categories: {
            new: false,
            hit: true,
            key: false,
            steamAccount: false,
            pumping: false,
            activation: true,
            boost: true,
            epicGames: false
        }
    },
]

// let listAccount = [
//     {
//         imgSrc: 'assets/main_page/img/little_big_planet.png',
//         price: '1000',
//         name: 'LittleBIG Planet'
//     },
//     {
//         imgSrc: 'assets/main_page/img/hohokum.png',
//         price: '1 000',
//         name: 'Hohokum' 
//     },
//     {
//         imgSrc: 'assets/main_page/img/minecraft.png',
//         price: '240',
//         name: 'Minecraft'
//     },
//     {
//         imgSrc: 'assets/main_page/img/seasons_after_fall.png',
//         price: '560',
//         name: 'Seasons after Fall'
//     },
//     {
//         imgSrc: 'assets/main_page/img/eastshade.png',
//         price: '500',
//         name: 'Eastshade'
//     },
//     {
//         imgSrc: 'assets/main_page/img/journey.png',
//         price: '300',
//         name: 'JOURNEY'
//     },
//     {
//         imgSrc: 'assets/main_page/img/e_witne.png',
//         price: '350',
//         name: 'E WITNE'
//     },
//     {
//         imgSrc: 'assets/main_page/img/a_short_hike.png',
//         price: '250',
//         name: 'A Short Hike'
//     },
//     {
//         imgSrc: 'assets/main_page/img/unravel.png',
//         price: '250',
//         name: 'UNRAVEL'
//     },
//     {
//         imgSrc: 'assets/main_page/img/shape_of_the_world.png',
//         price: '200',
//         name: 'Shape Of The World'
//     },
//     {
//         imgSrc: 'assets/main_page/img/yonder.png',
//         price: '100',
//         name: 'Yonder'
//     },
//     {
//         imgSrc: 'assets/main_page/img/flower.png',
//         price: '250',
//         name: 'Flower'
//     },
// ]

let links = document.querySelectorAll('.game-navigation-menu-item-link');

btns.addEventListener ('click', (e) => {
    if (e.target.id == 'new') {
        generateGames(list);
        removeClass();
        e.target.classList.add('if_u_in_some_section');
    }
    else if (e.target.id == 'hit') {
        generateGames(list);
        removeClass();
        e.target.classList.add('if_u_in_some_section');
    }
    else if (e.target.id == 'account') {
        generateGames(list);
        removeClass();
        e.target.classList.add('if_u_in_some_section');
    }
    else if (e.target.id == 'keys') {
        generateGames(list);
        removeClass();
        e.target.classList.add('if_u_in_some_section');
    }
    else if (e.target.id == 'pumping') {
        generateGames(list);
        removeClass();
        e.target.classList.add('if_u_in_some_section');
    }
})

let removeClass = () => {
    links.forEach((link) => {
        link.classList.remove('if_u_in_some_section');
    })
}

let generateGames = (currentList) => {
    gameList.innerHTML = ''
    currentList.forEach((game) => { 
        gameList.innerHTML += `
            <li class="game_list_item">
                <div class="img_and_div">
                    <img src=${game.imgSrc}>
                    <div class="achievements">
                        <div class="new">
                            <p class="novelties">Новинка</p>
                        </div>
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
                    <div class="points">
                        <div class="point_and_text">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="7" cy="7" r="7" fill="#3D394A"/>
                            </svg>
                            <p class="peculiarities">Ключ</p>
                        </div>
                        <div class="point_and_text">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="7" cy="7" r="7" fill="#3D394A"/>
                            </svg>
                            <p class="peculiarities">Аккаунт Steam</p>
                        </div>
                    </div>
                    <div class="achievements_mobile">
                        <p class="novelties">Новинка</p>
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
    })
}