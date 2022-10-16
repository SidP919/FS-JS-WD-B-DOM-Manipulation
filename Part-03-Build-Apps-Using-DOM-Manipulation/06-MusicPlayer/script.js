let playlist =  document.querySelector("#list");
let songImg = document.querySelector("#song-img");
let songName = document.querySelector("#song-name");
let songSinger = document.querySelector("#song-singer");
let audio = document.querySelector("#audio");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");

let playlistArr = [
    {
        songName:"Bolna",
        songSingers:"Arijit Singh",
        songSrc:"https://pagalsong.in/uploads/systemuploads/mp3/Kapoor%20&%20Sons/02%20-%20Bolna.mp3",
        songImg:"https://pagalsong.in/uploads//thumbnails/300x300/id3Picture_1976080000.jpg"
    },
    {
        songName:"Madari",
        songSingers:"Vishal Dadlani & Sonu Kakkar",
        songSrc:"https://dns4.vippendu.com/download/128k-nqmb/Madari.mp3",
        songImg:"https://dns2.vippendu.com/thumbmed/1148058.jpg"
    },
    {
        songName:"Ae Dil Hai Mushkil",
        songSingers:"Arijit Singh",
        songSrc:"https://pagalsong.in/uploads/systemuploads/mp3/Ae%20Dil%20Hai%20Mushkil/Ae_Dil_Hai_Mushkil_Title_Song_320_Kbps.mp3",
        songImg:"https://pagalsong.in/uploads//thumbnails/300x300/id3Picture_1655782488.jpg"
    },
    {
        songName:"Night changes",
        songSingers:"One Direction",
        songSrc:"https://hindimp3s.in/files/download/id/3679",
        songImg:"https://a10.gaanacdn.com/images/albums/45/276445/crop_480x480_276445.jpg"
    },
    {
        songName:"No Competition",
        songSingers:"Jass Manak",
        songSrc:"https://pagalsong.in/uploads/systemuploads/mp3/No%20Competition/No%20Competition%20-%20Jass%20Manak%20128%20Kbps.mp3",
        songImg:"https://pagalsong.in/uploads//thumbnails/300x300/id3Picture_153184246.jpg"
    },
    {
        songName:"SpaceShip",
        songSingers:"Ap Dhillon, Shinda Kahlon, Gminxr",
        songSrc:"https://pagalsong.in/uploads/systemuploads/mp3/Hidden%20Gems/SPACESHIP%20-%20Hidden%20Gems%20128%20Kbps.mp3",
        songImg:"https://i.ytimg.com/vi/6Wq29PlJq-A/maxresdefault.jpg"
    },
    {
        songName:"Insane",
        songSingers:"Ap Dhillon, Gurinder Gill, Shinda Kahlon",
        songSrc:"https://paglasongs.com/files/download/id/5665",
        songImg:"https://i1.sndcdn.com/artworks-AOyU3tMtLzVcUjB4-sFzQyg-t500x500.jpg"
    },
    {
        songName:"Desires",
        songSingers:"Ap Dhillon",
        songSrc:"https://cdn.djjaani.com/upload/Desire-AP_Dhillon-(JattZone.com).mp3",
        songImg:"https://i.ytimg.com/vi/B9DPvyIn6JQ/hqdefault.jpg"
    },
    {
        songName:"Without Me",
        songSingers:"Eminem",
        songSrc:"https://musicdownload.cc/files/download/id/918",
        songImg:"https://i.ytimg.com/vi/-VDd20dWKHM/maxresdefault.jpg"
    },
]

let currTrack = playlistArr[0];

for(let song of playlistArr){
    let songElement = document.createElement("li");
    let songDetails = song.songName + " by " + song.songSingers;
    songElement.innerText = (songDetails).substring(0,34) + (songDetails.length>34?"...":"");
    songElement.style.fontSize = "large";
    songElement.style.textAlign = "left";
    songElement.style.cursor = "pointer";
    playlist.appendChild(songElement);
    songElement.addEventListener("click", async ()=>{
        audio.src = song.songSrc;
        audio.children[0].href = song.songSrc;
        songImg.src = song.songImg;
        songName.innerText = "Song: "+song.songName;
        songSinger.innerText = "Sung by: "+song.songSingers;
        currTrack = song;
        await audio.play();
    });
}

next.addEventListener("click", async ()=>{
    let index = playlistArr.indexOf(currTrack);
    let song;
    if(index<playlistArr.length-1){
        song = playlistArr[index+1];
    }else{
        song = playlistArr[0];
    }
    audio.src = song.songSrc;
    audio.children[0].href = song.songSrc;
    songImg.src = song.songImg;
    songName.innerText = "Song: "+song.songName;
    songSinger.innerText = "Sung by: "+song.songSingers;
    currTrack = song;
    await audio.play();
});

prev.addEventListener("click", async ()=>{
    let index = playlistArr.indexOf(currTrack);
    let song;
    if(index>0){
        song = playlistArr[index-1];
    }else{
        song = playlistArr[playlistArr.length-1];
    }
    audio.src = song.songSrc;
    audio.children[0].href = song.songSrc;
    songImg.src = song.songImg;
    songName.innerText = "Song: "+song.songName;
    songSinger.innerText = "Sung by: "+song.songSingers;
    currTrack = song;
    await audio.play();
});