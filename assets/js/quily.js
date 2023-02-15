var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    ['blockquote', 'code-block'],

    [{
        'header': 1
    }, {
        'header': 2
    }], // custom button values
    [{
        'list': 'ordered'
    }, {
        'list': 'bullet'
    }],
    [{
        'script': 'sub'
    }, {
        'script': 'super'
    }], // superscript/subscript
    [{
        'indent': '-1'
    }, {
        'indent': '+1'
    }], // outdent/indent
    [{
        'direction': 'rtl'
    }], // text direction

    ['image','link'], // add's image support
    [{
        'color': []
    }, {
        'background': []
    }], // dropdown with defaults from theme

    ['clean'] // remove formatting button
];

var quill = new Quill('#editor', {
    modules: {
        toolbar: toolbarOptions
    },
    theme: 'snow'
});

let inputElement = document.getElementById('hiddenArea')
quill.on('text-change', function () {
    var myEditor = document.querySelector('#editor')
    var html = myEditor.children[0].innerHTML
    inputElement.value = html
});