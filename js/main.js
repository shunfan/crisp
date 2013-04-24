<script type="text/javascript">
    less = {
        rootpath: ":/perry.asia/crisp/"
    };
</script>

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