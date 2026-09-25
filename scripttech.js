const audio = new Audio("sound.mp3");

audio.loop = true;

document.addEventListener(
    "click",
    function () {
        audio.play().catch(function () {
            console.log("Audio could not be played.");
        });
    },
    { once: true }
);
