// Get the audio element
const audioPlayer = document.getElementById('audioPlayer');

// Play the music
function playMusic() {
    audioPlayer.play();
}

// Pause the music
function pauseMusic() {
    audioPlayer.pause();
}

// Stop the music
function stopMusic() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
}
