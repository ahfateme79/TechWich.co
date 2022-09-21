let btn =document.querySelector('.submit-btn button')
function sniper(){
    btn.innerHTML='<i class="fa fa-spinner fa-spin" style="font-size:24px"></i>'
}

let form =document.querySelector('form')

form.addEventListener('submit',(e=>{
    e.preventDefault()

}))