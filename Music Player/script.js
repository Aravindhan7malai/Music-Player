const myAudio=document.querySelector('audio');
const myPlay=document.getElementById('play');

isAudioPlaying=false;
function playAudio(){
    isAudioPlaying=true;
    myAudio.play()
    myPlay.classList.replace("bi-play-fill","bi-pause-fill")
}
function pauseAudio(){
    isAudioPlaying=false;
    myAudio.pause()
    myPlay.classList.replace("bi-pause-fill","bi-play-fill")
}

myPlay.addEventListener('click',()=>{
    if(isAudioPlaying){
        pauseAudio()
    }else{
        playAudio()
    }
})

const data=[
    {
        songName:"Amalgam",
        singerName:"Rockot",
        info:"image-1"
    },
    {
        songName:"Inspiring Ambient Lounge",
        singerName:"Soundbay",
        info:"image-2"
    },
    {
        songName:"No Place To Go",
        singerName:"SergePavkinMusic",
        info:"image-3"
    }
]

const mySongs=document.getElementById("song")
const mySinger=document.getElementById("singer")
const myImage=document.querySelector("img")



function loadingSongs(song){
    mySongs.innerText=song.songName
    mySinger.innerText=song.singerName
    myImage.src=`images/${song.info}.jpg`
    myAudio.src=`audios/${song.info}.mp3`   
}
let songIndex=0
const myBackward=document.getElementById("backward")
const myForward=document.getElementById("forward")
function forwardSong(){
    if(songIndex>=data.length-1){
        songIndex=0
    }else{
        songIndex ++
    }
    loadingSongs(data[songIndex])
    playAudio()
}
function backwarSong(){
    if(songIndex<=0){
        songIndex=data.length-1
    }else{
        songIndex --
    }
    loadingSongs(data[songIndex])
    playAudio()
}

myBackward.addEventListener("click", backwarSong)
myForward.addEventListener("click", forwardSong)