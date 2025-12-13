/* File: public/bgm.js
Webpage that uses it: Every page and subpage
Purpose: Plays background music and loops it, 
and additionally alerts the user that background music will play if they click on the website. 
At the same time, the alert only works once. */

if (!sessionStorage.bgm) {
alert("For the best experience, click anywhere (except for buttons) to enable background music!");
sessionStorage.bgm = 1;
}

const bgm = new Audio('../assets/bgm.mp3');  
bgm.loop = true;
bgm.volume = 0.3;

const startBGM = () => {
    bgm.play();
    document.removeEventListener('click', startBGM);
}

document.addEventListener('click', startBGM);