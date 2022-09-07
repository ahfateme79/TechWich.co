let closeBtn=document.querySelector('.close-modal')
let modal=document.querySelector('.modal-parent')

closeBtn.addEventListener('click',()=>{
    modal.classList.remove('active')
})