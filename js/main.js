$("#header h1 a").hover(function(){
    $(this).css('letter-spacing', '10px');
});

$("#github").click(function() {
    $("#github-buttons").fadeToggle("slow", "swing");
});

$("#random").click(function() {
    var hue = 'rgb('
                + (Math.floor(Math.random() * 256)) + ','
                + (Math.floor(Math.random() * 256)) + ','
                + (Math.floor(Math.random() * 256)) + ')';
    less.modifyVars({
        '@general': hue,
    });
});

$(".dropdown .drop").click(function() {
    $(".down").fadeToggle(100, "swing");
});