console.log("Welcome to soorila");
let songIndex=0;
let audioelement = new Audio('Ram Siya Ram _ Lofi Version _ Mangal Bhavan Amangal Hari(MP3_320K).mp3');
let masterPlay= document.getElementById("masterplay");
let myprogressbar= document.getElementById("myprogressbar");
let gif=document.getElementById("gif");
let songitem=Array.from(document.getElementById("songname"));
let songs=[
    {songName:"Ram Siya Ram",filePath:"soorila/ram.mp3" , coverPath:"cover/ram.mp3"},
    {songName:"Ram Siya Ram",filePath:"soorila2/ram.mp3" , coverPath:"cover2/ram.mp3"},
    {songName:"Ram Siya Ram",filePath:"soorila3/ram.mp3" , coverPath:"cover3/ram.mp3"},
    {songName:"Ram Siya Ram",filePath:"soorila4/ram.mp3" , coverPath:"cover4/ram.mp3"},
    {songName:"Ram Siya Ram",filePath:"soorila5/ram.mp3" , coverPath:"cover5/ram.mp3"}

]
songitem.forEach((elemet,i)=>{

elemet.getElementByTagName("img")[0].src=songs[i].coverPath;


})


//audioelement.play()

masterPlay.addEventListener('click',()=>{
if(audioelement.paused || audioelement.currentTime<=0)
{
audioelement.play();
masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-circle-pause');
gif.style.opacity= 1;
}
else
{
    audioelement.pause();
masterPlay.classList.remove('fa-circle-pause');
masterPlay.classList.add('fa-circle-play');
gif.style.opacity= 0;

}


})
//listening event
audioelement.addEventListener('timeupdate',()=>{
progress=parseInt((audioelement.currentTime/audioelement.duration)*100)
myprogressbar.value=progress;
})
myprogressbar.addEventListener("change",()=>{

    audioelement.currentTime=myprogressbar.value*audioelement.duration/100;
})