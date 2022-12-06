
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
    console.log(ev.target.innerText);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
}


// click
function handleClick(event) {
    // if the click target is not a button, just return
    // so nothing below runs
    if (event.target.tagName !== "SPAN") {
        return;
    }

    // get the button text
    let buttonValue = event.target.innerText;

    // display the value in #result
    document.querySelector(".drop-content").appendChild(document.getElementById(event.target.id));
}

// add event listener to the group of buttons
// and not every single button
document.querySelector(".drag-content").addEventListener("click", handleClick);
// click and back to first place
document.querySelector(".drop-content").addEventListener("click", (event) => {
    document.querySelector(".drag-content").appendChild(document.getElementById(event.target.id));
})

