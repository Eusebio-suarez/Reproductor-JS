const playList = [
    {
        title: 'Su Veneno',
        artist: 'Aventura',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXctUUuTJcxeEEHgXLt6S1ewmbNFyF1iqs8A&s',
        song: '/Assets/Audio/suVeneno.mp3'
    },
    {
        title: 'Llevame contigo',
        artist: 'Romeo santos',
        img: 'https://cdns-images.dzcdn.net/images/cover/c34da12c4203f1bb938cca45e7b37a65/1900x1900-000000-80-0-0.jpg', 
        song: '/Assets/Audio/LevameContigo.mp3'
    
    },
    {
        title: 'Veinticinco Rosas',
        artist: 'Joan sebastian',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTuhCS9GlytZQiZ6Q3_CTdMn2bwOIc6qJwkQ&s',
        song: '/Assets/Audio/VeinticincoRosas.mp3'
    },
    {
        title: 'Cuentale a Ese',
        artist: 'El charrito negro',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0aycx8ZjNOnmMWg5mPazEi9i3-UQ13TiKkw&s', 
        song: '/Assets/Audio/CuentaleaEse.mp3'
    },
    {
        title: 'Estoy perdido',
        artist: 'los 3 Ases',
        img: 'https://i.discogs.com/sT7wm2pdOtSVc54D_jdkxzt_L3ARh4iC7xAc0ljQXLA/rs:fit/g:sm/q:90/h:596/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMwMzg4/ODE3LTE3MTMwMzE3/ODgtNTc1NS5qcGVn.jpeg',
        song: '/Assets/Audio/EstoyPerdido.mp3'
    }
];

let currentSongIndex = 0;

const audio = document.getElementById("audio");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const forward = document.getElementById("forward");
const rewind = document.getElementById("rewind");
const stop = document.getElementById("stop");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const albumImage = document.getElementById("img-album")
const artistName = document.getElementById("artist");
const songTitle = document.getElementById("song");
const audioSource = document.getElementById("audioSource");

function loadSong(index) {
    const song = playList[index];
    audio.src = song.song; 
    albumImage.src = song.img;
    artistName.textContent = song.artist;
    songTitle.textContent = song.title; 
    audio.load();
}

play.addEventListener("click", () => audio.play());
pause.addEventListener("click", () => audio.pause());
stop.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
});

forward.addEventListener("click", () => {
    audio.currentTime += 10;
});

rewind.addEventListener("click", () => {
    audio.currentTime -= 10;
});

next.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % playList.length;
    loadSong(currentSongIndex);
    audio.play();
});

previous.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + playList.length) % playList.length; 
    loadSong(currentSongIndex);
    audio.play();
});

loadSong(currentSongIndex);