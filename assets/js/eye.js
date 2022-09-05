let passwordInp=document.querySelectorAll('.password input')
let passwordBtn=document.querySelectorAll('.password button')


passwordBtn.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        e.preventDefault()
        btn.classList.toggle('open')

        let id=e.target.dataset.id

        let inp=document.getElementById(id)
            if (btn.classList.contains('open')) {
                inp.setAttribute('type', 'text');
            }else{
                inp.setAttribute('type', 'password');
            }
    })
})