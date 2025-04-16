const audio = new Audio('sound.mp3');
audio.loop = true;


document.addEventListener('click', () => {
    audio.play();
}, { once: true }); 
