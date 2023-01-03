function anyClick() {
    document.getElementById("spinner").style.display = "block";
}

window.onpageshow = function(event) {
    if (event.persisted) {
        document.getElementById("spinner").style.display = "none";
    }
};