var quill = new Quill('#editor', {
    theme: 'snow'
});

let inputElement = document.getElementById('hiddenArea')
quill.on('text-change', function () {
    var myEditor = document.querySelector('#editor')
    var html = myEditor.children[0].innerHTML
    inputElement.value = html
});