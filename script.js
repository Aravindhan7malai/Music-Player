
const myAudio = document.querySelector('audio');
const myPlay = document.getElementById('play');
const myProgressbar = document.getElementsByClassName("progressbar")[0];
const mySongs = document.getElementById("song")
const mySinger = document.getElementById("singer")
const myImage = document.querySelector("img")
const myBackward = document.getElementById("backward")
const myForward = document.getElementById("forward")
const currentTimer = document.getElementById("current_time")
const totalTimer = document.getElementById("total_time")

isAudioPlaying = false;
function playAudio() {
    isAudioPlaying = true;
    myAudio.play()
    myPlay.classList.replace("bi-play-fill", "bi-pause-fill")
}
function pauseAudio() {
    isAudioPlaying = false;
    myAudio.pause()
    myPlay.classList.replace("bi-pause-fill", "bi-play-fill")
}

myPlay.addEventListener('click', () => {
    if (isAudioPlaying) {
        pauseAudio()
    } else {
        playAudio()
    }

})

const data = [
    {
        songName: "Amalgam",
        singerName: "Rockot",
        info: "image-1"
    },
    {
        songName: "Inspiring Ambient Lounge",
        singerName: "Soundbay",
        info: "image-2"
    },
    {
        songName: "No Place To Go",
        singerName: "SergePavkinMusic",
        info: "image-3"
    }
]



function loadingSongs(song) {
    mySongs.innerText = song.songName
    mySinger.innerText = song.singerName
    myImage.src = `images/${song.info}.jpg`
    myAudio.src = `audios/${song.info}.mp3`
}
let songIndex = 0

function forwardSong() {
    if (songIndex >= data.length - 1) {
        songIndex = 0
    } else {
        songIndex++
    }
    loadingSongs(data[songIndex])
    playAudio()
}
function backwarSong() {
    if (songIndex <= 0) {
        songIndex = data.length - 1
    } else {
        songIndex--
    }
    loadingSongs(data[songIndex])
    playAudio()
}

myBackward.addEventListener("click", backwarSong)
myForward.addEventListener("click", forwardSong)


function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    let remainingSeconds = Math.floor(seconds % 60);

    if (remainingSeconds < 10) {
        remainingSeconds = '0' + remainingSeconds;
    }

    return `${minutes}:${remainingSeconds}`;
}


myAudio.addEventListener("timeupdate", function (e) {
    const currentTime = e.srcElement.currentTime
    const duration = e.srcElement.duration
    currentTimer.innerText = formatTime(currentTime)
    totalTimer.innerText = formatTime(duration)
    const myPercentage = (currentTime / duration) * 100
    myProgressbar.style.width = `${myPercentage}%`
})