let body = document.querySelector('body');
let button = document.querySelector('.img-button');



button.addEventListener('click',()=>{
    body.classList.toggle('dark');
    
})


let buttonModal = document.querySelector('.menu-burguer')
let ModalHeader = document.querySelector('.navbar-modal')
let buttonX = document.querySelector('.img-x')


buttonModal.addEventListener('click',()=>{
    ModalHeader.style.display ='block'
})

buttonX.addEventListener('click', ()=>{
    ModalHeader.style.display ='none'
})