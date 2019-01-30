PAGE_DATA = {
    python: [
        {
            name: "Python Final",
            link: "https://github.com/timothyb9526/rental_store_timothybowling",
            img: "pictures/python-final.png",
            active: "active"
        },
        {
            name: "Tetris",
            link: "https://github.com/timothyb9526/tetris",
            img: "pictures/tetris.png",
            active: ""
        },
        {
            name: "Rental Store",
            link: "https://github.com/timothyb9526/rental_store_timothybowling",
            img: "pictures/Rental_store.png",
            active: ""
        },
        {
            name: "Gladiator",
            link: "https://github.com/timothyb9526/Gladiator",
            img: "pictures/Gladiator.png",
            active: ""
        },
        {
            name: "Blackjack",
            link: "https://github.com/timothyb9526/Blackjack",
            img: "pictures/Blackjack.png",
            active: ""
        },
        {
            name: "Python Challenge",
            link: "https://github.com/timothyb9526/pythonChallenge",
            img: "pictures/python_challenge.png",
            active: ""
        }
    ]
    // html: [
    //  {
    //      name: "",
    //      link: "",
    //      img: ""
    //  },
    //  {
    //      name: "",
    //      link: "",
    //      img: ""
    //  },
    //  {
    //      name: "",
    //      link: "",
    //      img: ""
    //  },
    //  {
    //      name: "",
    //      link: "",
    //      img: ""
    //  },
    //  {
    //      name: "",
    //      link: "",
    //      img: ""
    //  },
    //  {
    //      name: "",
    //      link: "",
    //      img: ""
    //  },
    //  {
    //      name: "",
    //      link: "",
    //      img: ""
    //  }
    // ]
};

$('[data-toggle="tooltip"]').tooltip();

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

function setTemplateAsActive() {
    var project = document.querySelector("#python");
    for (var tab of project.querySelectorAll(".nav-link")) {
        tab.addEventListener("click", function() {
            tab.active = "active";
        });
    }
}

function renderPythonProjects() {
    var source = document.getElementById("python-template").innerHTML;
    var template = Handlebars.compile(source);
    var data = PAGE_DATA.python;
    for (var project in data) {
        var html = template(data[project]);
        document
            .getElementById("python")
            .insertAdjacentHTML("afterbegin", html);
    }
}
renderPythonProjects();

setTemplateAsActive();
