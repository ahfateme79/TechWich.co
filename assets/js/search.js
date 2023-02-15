function search() {
    let search_box = document.getElementById("search_box");
    window.location = "/searchResult?term=" + search_box.value;
}
