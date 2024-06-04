// Title

window.onload = function() {
const titles = ['<3', 'TATZE', 'UR AD HERE'];
let currentIndex = 0;

function changeTitle() {
    document.title = titles[currentIndex];
currentIndex = (currentIndex + 1) % titles.length;
}

setInterval(changeTitle, 2000);
}


// Music

document.addEventListener('DOMContentLoaded', function() {
    function playMusic() {
        var audio = document.getElementById('coolemusic');
        audio.play();
    }
    document.getElementById('heheheha').addEventListener('click', playMusic);
    function showAlert() {
        alert('Button wurde geklickt!');
    }
    document.getElementById('alertButton').addEventListener('click', showAlert);
});



