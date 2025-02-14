$(document).ready(function() {

    //Characters

    $('#gallery img').hover(function() {
        if (!$(this).hasClass('selected')) {
            $(this).css('filter', 'brightness(80%)');
        }
    }, function() {
        if (!$(this).hasClass('selected')) {
            $(this).css('filter', 'brightness(100%)');
        }
    });


    $('#gallery img').click(function() {
        $('#gallery img').css('filter', 'brightness(100%)');
        $(this).css('filter', 'brightness(50%)');
        
        let name = $(this).data('name');
        let image = $(this).data('image');
        let details = $(this).data('details');
        let speed = $(this).data('speed');
        let power = $(this).data('power');
        let stamina = $(this).data('stamina');

        $('#selected h2').text(name);
        $('#selected #info img').attr('src', image);
        $('#selected #info p').text(details);

        $('.fill').css('width', '0%');

        setTimeout(() => {
            $('#speed-bar').css('width', speed + '%');
            $('#power-bar').css('width', power + '%');
            $('#stamina-bar').css('width', stamina + '%');
        }, 50);
    });

    


});
    //Maps

    $(".thumbnail").click(function () {
        $(".thumbnail").removeClass("active");

        $(this).addClass("active");

        let newSrc = $(this).attr("src");
        let newName = $(this).data("name");

        $("#preview img").attr("src", newSrc);
        $("#preview h2").text(newName);
    })

