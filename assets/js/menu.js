var removeClass = true;
$(".menu-burger").click(function () {
    $(".menu-popup").toggleClass('menu-popup-toggle');
    removeClass = false;
});



$(".menu-popup").click(function() {
    removeClass = false;
});

$("html").click(function () {
    if (removeClass) {
        $(".menu-popup").removeClass('menu-popup-toggle');
    }
    removeClass = true;
});