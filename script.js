$('.key').click( function () {
        let button = $(this).html();

        playSound(button);
        buttonCss(button);
    });

$("body").on('keydown', function (event) {
    let button = event.key;

    playSound(button);
    buttonCss(button);
});

// function buttonCss(button) {
//     let currentButton = $("." + button);
//     currentButton.addClass("pressed");

//     setTimeout(function () {
//         currentButton.removeClass("pressed");
//     }, 100);
// }

function playSound(button) {

    switch (button) {
        case 'a':
            let sound1 = new Audio('audio1.mp3');
            sound1.play();
            break;

        case 's':
            let sound2 = new Audio('audio2.mp3');
            sound2.play();
            break;

        case 'd':
            let sound3 = new Audio('audio3.mp3');
            sound3.play();
            break;

        case 'f':
            let sound4 = new Audio('audio4.mp3');
            sound4.play();
            break;

        case 'g':
            let sound5 = new Audio('audio5.mp3');
            sound5.play();
            break;

        case 'h':
            let sound6 = new Audio('audio6.mp3');
            sound6.play();
            break;

        case 'j':
            let sound7 = new Audio('audio7.mp3');
            sound7.play();
            break;

        default:
            console.log("No sound defined for this button.");
            break;
    }
}

// JavaScript code to change the background image
// function changeBackgroundImage() {
//     $(body).style.backgroundImage = "url(./images/keyboard.jpg)";
// }

function buttonCss(button) {
    let currentButton = $("." + button);
    currentButton.addClass("pressed")

    setTimeout(function() {
        currentButton.removeClass("pressed")
    }, 100);
}





