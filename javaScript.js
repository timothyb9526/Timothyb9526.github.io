for (const nav of document.querySelectorAll(".nav")) {
    for (const link of nav.querySelectorAll(".nav-link")) {
        link.addEventListener("click", function() {
            setAsActiveLink(nav, link);
        });
    }
}

function setAsActiveLink(nav, link) {
    const current = nav.querySelector(".nav-link.active");
    current.classList.remove("active");
    link.classList.add("active");

    document
        .querySelector(current.getAttribute("href"))
        .classList.remove("show", "active");

    document
        .querySelector(link.getAttribute("href"))
        .classList.add("show", "active");
}
