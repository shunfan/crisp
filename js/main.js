$("#header h1 a").hover(function(){
    $(this).css('letter-spacing', '10px');
});

$("#github").click(function() {
    $("#github-buttons").fadeToggle("slow", "swing");
});

<script type="text/javascript">
    less = {
        relativeUrls: true,
    };
</script>

$("#random").click(function() {
    var hue = 'rgb('
                + (Math.floor(Math.random() * 256)) + ','
                + (Math.floor(Math.random() * 256)) + ','
                + (Math.floor(Math.random() * 256)) + ')';
    less.modifyVars({
        '@general': hue,
    });
});