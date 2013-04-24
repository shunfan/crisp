$("#header h1 a").hover(function(){
    $(this).css('letter-spacing', '10px');
});

$("#github").click(function() {
    $("#github-buttons").fadeToggle("slow", "swing");
});