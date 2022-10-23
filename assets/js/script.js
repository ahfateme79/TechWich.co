let bar = document.querySelectorAll('.bar')
let persentage = document.querySelectorAll('.persentage')
let progress_child=document.querySelectorAll('.progress-child')


for (let i = 0; i < bar.length; i++) {
    bar[i].style.width = persentage[i].innerHTML 
    persentage[i].style.left=persentage[i].innerHTML
}


for (let i = 0; i < progress_child.length; i++) {
    progress_child[i].style.width = persentage[i].innerHTML 
    persentage[i].style.left=persentage[i].innerHTML
}