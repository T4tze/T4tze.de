window.onload = function() {
const titles = ['<3', 'TATZE', 'UR AD HERE'];
let currentIndex = 0;

function changeTitle() {
    document.title = titles[currentIndex];
currentIndex = (currentIndex + 1) % titles.length;
}

setInterval(changeTitle, 2000);
}


