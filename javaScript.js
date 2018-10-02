function leftSlide(tab) {
    $(tab).addClass("animated slideInLeft");
}

function rightSlide(tab) {
    $(tab).addClass("animated slideInRight");
}

$('li[data-toggle="tab"]').on("shown.bs.tab", function(e) {
    var url = new String(e.target);
    var pieces = url.split("#");
    var seq = $(this)
        .children("a")
        .attr("data-seq");
    var tab = $(this)
        .children("a")
        .attr("href");
    if (pieces[1] == "profile") {
        leftSlide(tab);
    }
});
