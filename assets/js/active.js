$(window).on("load", function () {
    var title = document.title;
    console.log("Title: " + title);

    activeLinkControl(title);
});

function activeLinkControl(title) {
    console.log("activeLinkControl");
    $(".navbar-nav .nav-item a").each(function () {
        console.log(this);
        if (this.innerHTML === title) {
            console.log(this + "active");
            $(this).addClass("active");
            if($(this).hasClass("dropdown-item")){
                $(this).closest(".dropdown").addClass("active");
            }
        }
    });
}
