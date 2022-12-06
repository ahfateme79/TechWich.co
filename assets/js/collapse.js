let questionBtn=document.querySelector('.question-mark-btn')
let box=document.querySelector('.answer-box')
let closeBtn=document.querySelector('.close-collapse')

questionBtn.addEventListener('click',collapse)
closeBtn.addEventListener('click',collapse)

function collapse() {
    box.classList.toggle('collapse')
}



let progressQuiz=document.querySelector('.quiz-progress-inner')

progressQuiz.style.width=`${progressQuiz.getAttribute('data-width')}%`



let closeModal=document.querySelector('.close-btn-section button')
let Close=document.querySelector('.Close')
let modalWrapper=document.querySelector('.modal-wrapper')

closeModal.addEventListener('click',closemodal)
Close.addEventListener('click',closemodal)

function closemodal() {
    modalWrapper.classList.toggle('open')
}