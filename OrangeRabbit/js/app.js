$(document).ready(function(){
    new WOW().init();
    
    $(".burgerNav").on("click", function () {
        $(".container nav ul").toggleClass("open");
    });
});