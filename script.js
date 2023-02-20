console.log("Welcome to Spotify");
//Initialize the Variables

let songIndex=0;
let audioElement=new Audio('ME\5 Seconds of Summer - Youngblood (Official Video).mp3');
let masterPLay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName')
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"5SOS",filePath:"ME\5 Seconds of Summer - Youngblood (Official Video).mp3", coverPath:"ME\cover.jfif"},
    {songName:"5SOS",filePath:"ME\5 Seconds of Summer - Youngblood (Official Video).mp3", coverPath:"ME\cover.jfif"},
    {songName:"5SOS",filePath:"ME\5 Seconds of Summer - Youngblood (Official Video).mp3", coverPath:"ME\cover.jfif"},
    {songName:"5SOS",filePath:"ME\5 Seconds of Summer - Youngblood (Official Video).mp3", coverPath:"ME\cover.jfif"},
    {songName:"5SOS",filePath:"ME\5 Seconds of Summer - Youngblood (Official Video).mp3", coverPath:"ME\cover.jfif"},
    {songName:"5SOS",filePath:"ME\5 Seconds of Summer - Youngblood (Official Video).mp3", coverPath:"ME\cover.jfif"},
]
songItems.forEach((element, i)=>{
element.getElementsByTagName("img")[0].src=songs[i].coverPath;
element.getElementsByClassName('songName')[0].innerText=songs[i].songName
})
//let audioElement = new Audio('1.mp3');
// audioElement.play();

//
masterPLay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPLay.classList.remove('fa-circle-play');
        masterPLay.classList.add('fa-pause-circle');
        gif.style.opacity=1;    
    }
    else{
        audioElement.pause();
        masterPLay.classList.remove('fa-pause-circle');
        masterPLay.classList.add('fa-circle-play');
        gif.style.opacity=0;   
        //masterPLay.classList.remove('fa-pause-circle');
    }
})
//Listen to Events
//document.addEventListener('time')
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100
})
const makeAllPlace=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.target.classList.remove('fa-pause-circle');
        element.target.classList.add('fa-play-circle');
    })

}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        songIndex=parseInt(e.target.id);
        makeAllPlace();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src='ME\${songIndex+1}.mp3';
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPLay.classList.remove('fa-play-circle');
        masterPLay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0
    }
    else{
        songIndex+=1
    }
    audioElement.src='ME\${songIndex+1}.mp3';
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPLay.classList.remove('fa-play-circle');
    masterPLay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex-=1
    }
    audioElement.src='ME\${songIndex+1}.mp3';
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPLay.classList.remove('fa-play-circle');
    masterPLay.classList.add('fa-pause-circle');
})