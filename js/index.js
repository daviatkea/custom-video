const vidContainer = document.querySelector(".video-player");
const vid = document.querySelector(".video-player video");
const btn = document.querySelector(".video-player-button");

function togglePlay() {
    
}

function videoEnded() {
    
}

btn.addEventListener("click", togglePlay);
vid.addEventListener("ended", videoEnded);
