let btnChange = document.querySelector('#btnChange')
let svg = document.querySelector('.svg')
let rotate = 180

btnChange.onfocus= ()=> {
    if(rotate == 180) {
        rotate = 0;
    }
    else {
        rotate = 180;
    }
    svg.style.transform = `rotate(${rotate}deg)`
}
