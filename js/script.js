$(document).ready(function() {
    $('#gallery img').mouseenter(function() {
        // Get data attributes from the hovered image
        let name = $(this).data('name');
        let image = $(this).data('image');
        let details = $(this).data('details');
        let stats = $(this).data('stats');

        // Update the character display section
        $('#selected h2').text(name);
        $('#selected #info img').attr('src', image);
        $('#selected #info p').text(details);
        $('#selected #stats p').text(stats);
    });
});