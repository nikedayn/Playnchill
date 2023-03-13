let arrImg = ['1.png','2.png','3.png']
let imgNow = 0
let btns = { 
    prev: document.querySelector('#btn-prev'),
    next: document.querySelector('#btn-next')
}
let img = document.querySelector('#img-slider')

btns.prev.addEventListener('click', () => {
    // if (imgNow === 0) {
    //     imgNow = 2
    //     img.src = 'http://127.0.0.1:5500/asset/img/'+arrImg[2]
    // } else { 
    //     imgNow--
    //     img.src = 'http://127.0.0.1:5500/assets/img/'+arrImg[imgNow]
    // }
    if (imgNow === 2){
        imgNow = 0
        img.src = 'http://127.0.0.1:5500/assets/main_page/img/'+arrImg[imgNow]
    } else { 
    imgNow++
    img.src = 'http://127.0.0.1:5500/assets/main_page/img/'+arrImg[imgNow]
    }
})
btns.next.addEventListener('click', () => {
    // if (imgNow === 3) {
    //     imgNow = 1
    //     img.src = 'http://127.0.0.1:5500/assets/img/'+arrImg[imgNow]
    // } else { 
    //     imgNow++
    //     img.src = 'http://127.0.0.1:5500/assets/img/'+arrImg[imgNow]
    // }
    if (imgNow === 2){
        imgNow = 0
        img.src = 'http://127.0.0.1:5500/assets/main_page/img/'+arrImg[imgNow]
    } else { 
    imgNow++
    img.src = 'http://127.0.0.1:5500/assets/main_page/img/'+arrImg[imgNow]
    }
})
setInterval(() => {
    if (imgNow === 2){
        imgNow = 0
        img.src = 'http://127.0.0.1:5500/assets/main_page/img/'+arrImg[imgNow]
    } else { 
    imgNow++
    img.src = 'http://127.0.0.1:5500/assets/main_page/img/'+arrImg[imgNow]
    }
},5000)

