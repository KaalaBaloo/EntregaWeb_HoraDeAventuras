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

    //Maps

    $(".thumbnail").click(function () {
        $(".thumbnail").removeClass("active");
    
        $(this).addClass("active");
    
        let newSrc = $(this).attr("src");
        let newName = $(this).data("name");
    
        $("#preview img").attr("src", newSrc);
        $("#preview h2").text(newName);
    })


  // HUD Controls
  if ($('#graphicsButton').length) {
    const graphicsButton = document.getElementById('graphicsButton');
    let graphicsLevels = ['Alta', 'Media', 'Baja'];
    let currentGraphics = 0;

    graphicsButton.addEventListener('click', () => {
        currentGraphics = (currentGraphics + 1) % graphicsLevels.length;
        graphicsButton.textContent = graphicsLevels[currentGraphics];
    });
}

if ($('#textSizeButton').length) {
    const textSizeButton = document.getElementById('textSizeButton');
    let textSizes = ['Pequeño', 'Normal', 'Grande'];
    let currentTextSize = 1;

    textSizeButton.addEventListener('click', () => {
        currentTextSize = (currentTextSize + 1) % textSizes.length;
        textSizeButton.textContent = textSizes[currentTextSize];
        document.body.style.fontSize = currentTextSize === 0 ? '12px' : currentTextSize === 1 ? '16px' : '20px';
    });
}

if ($('#transparencyButton').length) {
    const transparencyButton = document.getElementById('transparencyButton');
    let transparencyLevels = ['Opaca', 'Semitransparente', 'Transparente'];
    let currentTransparency = 0;
    const transparencyValues = ['rgba(255, 255, 255, 0.9)', 'rgba(255, 255, 255, 0.6)', 'rgba(255, 255, 255, 0.3)'];

    transparencyButton.addEventListener('click', () => {
        currentTransparency = (currentTransparency + 1) % transparencyLevels.length;
        transparencyButton.textContent = transparencyLevels[currentTransparency];
        document.querySelector('.settings-window').style.backgroundColor = transparencyValues[currentTransparency];
    });
}

// Music Toggle & Volume Control
if ($('#musicToggle').length && $('#volumeControl').length) {
    // Check if elements exist before adding event listeners
    const musicToggle = document.getElementById('musicToggle');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const volumeControl = document.getElementById('volumeControl');

    if (musicToggle && backgroundMusic) {
        musicToggle.addEventListener('click', () => {
            if (backgroundMusic.paused) {
                backgroundMusic.play();
                musicToggle.textContent = 'Sí';
                musicToggle.classList.remove('off');
            } else {
                backgroundMusic.pause();
                musicToggle.textContent = 'No';
                musicToggle.classList.add('off');
            }
        });
    }

    if (volumeControl && backgroundMusic) {
        volumeControl.addEventListener('input', () => {
            backgroundMusic.volume = volumeControl.value;
        });
    }
}


});


