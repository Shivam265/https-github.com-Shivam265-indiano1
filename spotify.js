<script src="https://kit.fontawesome.com/26504e4a1f.js" crossorigin="anonymous"></script>
console.log("welcome to specify");
//initialize the variables
let songIndex = 0;
let audioElement = new Audio('song1.mp3.mp3');
let masterplay = document.getElementById('masterPlay');
let ProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName:"Darbadar",filePath:"song1.mp3.mp3",coverPath:"jubin1.jpg"},
    {songName:"Guru govind dehu kadhe",filePath:"shivam/2.mp3",coverPath:"covers/1.jpg"},
    {songName:"Guru govind dehu kadhe",filePath:"shivam3.mp3",coverPath:"covers/1.jpg"},
    {songName:"Guru govind dehu kadhe",filePath:"shivam4.mp3",coverPath:"covers/1.jpg"},
        
]
//audioElement.play();
//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
})
//Listen to Events
myProgessBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    // Update Seekbar
})