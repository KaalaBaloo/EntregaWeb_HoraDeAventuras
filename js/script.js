$(document).ready(function() {
    $('#gallery img').mouseenter(function() {
        let name = $(this).data('name');
        let image = $(this).data('image');
        let details = $(this).data('details');
        let speed = $(this).data('speed');
        let power = $(this).data('power');
        let stamina = $(this).data('stamina'); // Changed from intelligence

        console.log("Updating:", name, speed, power, stamina); // Debugging

        // Update character details
        $('#selected h2').text(name);
        $('#selected #info img').attr('src', image);
        $('#selected #info p').text(details);

        // Reset bars (force redraw for animation)
        $('.fill').css('width', '0%'); 

        // Add a small delay before setting the new width (fix for some browsers)
        setTimeout(() => {
            $('#speed-bar').css('width', speed + '%');
            $('#power-bar').css('width', power + '%');
            $('#stamina-bar').css('width', stamina + '%');
        }, 50);
        
        console.log("Bars updated"); // Debugging
    });
});
