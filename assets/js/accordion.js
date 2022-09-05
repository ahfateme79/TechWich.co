const accordionHeaders = document.querySelectorAll(".accordion-header");

ActivatingFirstAccordion();

function ActivatingFirstAccordion() {
    accordionHeaders[0].parentElement.classList.add("active");
    accordionHeaders[0].nextElementSibling.style.maxHeight =
        accordionHeaders[0].nextElementSibling.scrollHeight + "px";
}

function toggleActiveAccordion(e, header) {
    const activeAccordion = document.querySelector(".accordion.active");
    const clickedAccordion = header.parentElement;
    const accordionBody = header.nextElementSibling;

    if (activeAccordion && activeAccordion != clickedAccordion) {
        activeAccordion.querySelector(".accordion-body").style.maxHeight = 0;
        activeAccordion.classList.remove("active");
    }

    clickedAccordion.classList.toggle("active");

    if (clickedAccordion.classList.contains("active")) {
        accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
    } else {
        accordionBody.style.maxHeight = 0;
    }
}

accordionHeaders.forEach(function (header) {
    header.addEventListener("click", function (event) {
        toggleActiveAccordion(event, header);
    });
});

function resizeActiveAccordionBody() {
    const activeAccordionBody = document.querySelector(
        ".accordion.active .accordion-body"
    );
    if (activeAccordionBody)
        activeAccordionBody.style.maxHeight =
        activeAccordionBody.scrollHeight + "px";
}

window.addEventListener("resize", function () {
    resizeActiveAccordionBody();
});