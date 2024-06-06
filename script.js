// Get the audio element
const audioPlayer = document.getElementById('audioPlayer');

// Play music
function playMusic() {
    audioPlayer.play();
}

// Pause music
function pauseMusic() {
    audioPlayer.pause();
}

// Stop music
function stopMusic() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
}
