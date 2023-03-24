let btnNext = document.querySelector('.button-next')

let btnPrev = document.querySelector('.button-prev')

let block1 = document.querySelector('#block1')

let block2 = document.querySelector('#block2')

let picture1 = document.querySelector('.creeper')

let picture2 = document.querySelector('.players')

btnNext.addEventListener('click', ()=>{
    block1.style.display='none'
    block2.style.display='block'
    picture1.style.display='none'
    picture2.style.display='block'
})

btnPrev.addEventListener('click', ()=>{
    block1.style.display='block'
    block2.style.display='none'
    picture1.style.display='block'
    picture2.style.display='none'
})