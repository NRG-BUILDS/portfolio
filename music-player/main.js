const song = document.getElementById('current_song')
const song_Source = document.getElementById('songSource')
const display_pic = document.querySelector('.album_art')
const display_title = document.querySelector('#title')
const display_artist = document.querySelector('#artist')
const download = document.querySelector('#downloadBtn')
const homeScreen =document.querySelector('.home_screen')
const playlist_display = document.querySelector('.playlist_songs')
const playBtn = document.getElementById('play_switch');
const player_display = document.querySelector('.player_section')
let playlist = [] //array of songs

//create songs constructor object
function Songs(Title, Artist, Art, Source) { 
    this.title = Title
    this.artist = Artist
    this.pic = Art
    this.src = Source
    
    playlist.push(this);
}


//create songs objects
const song1 = new Songs(
    "Bandana",
    "Fireboy DML & Asake",
    "bandana.jpg",
    "bandana.mp3"
    )
const song2 = new Songs(
    "I Don't Care",
    "Justin Bieber ft. Ed Sheeran",
    "i_dont_care.jpg",
    "i_dont_care.mp3"
    )
const song3 = new Songs(
    "Meant To Be",
    "Bebe Rexha ft. Florida George",
    "meant_to_be.jpg",
    "meant_to_be.mp3"
)

//function for Pause & Play Button
function PlayPause() { 
    if (song.paused === true) {
        song.play();
        playBtn.className = "fa-solid fa-pause fa-xl"
    } else { 
        song.pause();
        playBtn.className = "fa-solid fa-play fa-xl"
    };
}
function mute() { 
    let muteBtn = document.getElementById('muteBtn');
    if(song.volume === 0) { 
        song.volume = 1;
        muteBtn.className = "fa-solid fa-volume-high"
    } else { 
        song.volume = 0;
        muteBtn.className = "fa-solid fa-volume-xmark"
    }
}

let num = 0 //num is the song number in the array
//shows title, album art and artist
function showSong() { 
    song.src = playlist[num].src;
    download.href = playlist[num].src;
    display_title.innerHTML = playlist[num].title;
    display_artist.innerHTML = playlist[num].artist;
    display_pic.src = `${playlist[num].pic}`;
    //document.body.style.background = `url(${playlist[num].pic}) no-repeat center fixed`
}
showSong();
console.log(playlist.length)

//next song function
function next() {
    num += 1;
    //go back to first song when last song is played
    if(num > playlist.length - 1) { 
        num = 0
    } 
    showSong();
    song.play()
}
//go to next song after current track is over automatically
setInterval(function() { 
    if(song.currentTime === song.duration) { 
    next()
    }
}, 1000);

//previous song function
function prev() { 
    if(num === 0) { 
        num = 0
    } else { num -= 1}
    showSong();
    song.play()
}

//duration timer
const durationContainer = document.getElementById('duration');
//seek slider
const seekSlider = document.getElementById('seek_slider');
//current time clock
const currentTimeContainer = document.getElementById('current_time');
//volume slider
const volumeSlider = document.getElementById('volume_slider');
//volume counter display
const outputContainer = document.getElementById('volume');


//changes timer to mm:ss format
const calculateTime = function(secs) {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${minutes}:${returnedSeconds}`;
}
//display timer
const displayDuration = function() {
  durationContainer.textContent = calculateTime(song.duration);
}
if (song.readyState < 0) { 
    displayDuration()
    setSliderMax()
} else {
    song.addEventListener("loadedmetadata", function() { 
        displayDuration();
        setSliderMax()
    })
}
//sets seek slider value to match song time
function setSliderMax() { 
    let seek = document.getElementById('seek_slider')
    seek.max = Math.floor(song.duration);
}
//adds current time to slider
setInterval(function() { 
    currentTimeContainer.innerHTML = calculateTime(song.currentTime)
})
seekSlider.addEventListener('input', function() {
  currentTimeContainer.textContent = calculateTime(seekSlider.value);
}, 1000);
//adds seek function to slider
seekSlider.addEventListener('change', function() {
  song.currentTime = seekSlider.value;
});
song.addEventListener('timeupdate', () => {
  seekSlider.value = Math.floor(song.currentTime);
});
//volume function
volumeSlider.addEventListener('input', function changeVol(e) {
  const value = e.target.value;
  outputContainer.textContent = value;
  song.volume = value / 100;
});

//===========TOGGLE SWITCH========
function togglePlayer() { 
  player_display.style.display = "block";
  homeScreen.style.display = "none";
  document.getElementById('playerBtn').classList.add('active');
  document.getElementById('listBtn').classList.remove('active');
  //showSong();
}
function toggleList() {
    player_display.style.display = "none";
    homeScreen.style.display = "block";
    document.getElementById('listBtn').classList.add('active');
    document.getElementById('playerBtn').classList.remove('active');
    document.body.style.background = `url("album_art.jpg")`
}
//=========PLAYLIST SECTION===========
const heroPic = document.querySelector('.hero_pic');
const heroText = document.querySelector('.hero_text');
let heroSong = 0
function heroSlide() { 
    heroSong += 1;
    if(heroSong > playlist.length -1) { 
        heroSong = 0
    };
    heroPic.src = playlist[heroSong].pic;
    heroText.innerHTML = `<h5>Trending</h5>
           <h1 class="swoop hero_title">${playlist[heroSong].title}</h1>
           <h3 class="hero_artist fade">${playlist[heroSong].artist}</h3>
           
           <button onclick="playSong(${heroSong})">Listen Now <i class="fa-solid fa-play"></i></button>`
};
//heroSlide()
setInterval(heroSlide, 3500);

function playSong(a) { 
    display_title.innerHTML = playlist[a].title;
    display_artist.innerHTML = playlist[a].artist;
    playBtn.className = "fa-solid fa-pause fa-xl"
    display_pic.src = `${playlist[a].pic}`;
    song.src = playlist[a].src;
    download.href = playlist[a].src;
    song.play();
    document.body.style.background = `url(${playlist[a].pic}) no-repeat center fixed`;
    togglePlayer();
}
function songList() { 
    let text = ""
    for (i in playlist) { 
        text += `<a href="javascript:void(0)" onclick="playSong(${i})"><div class="music_item">
              <div>
                <img src="${playlist[i].pic}">
              </div>
              <div>
                <p>${playlist[i].title}</p>
              </div>
          </div></a>`
    }
    return text
}
playlist_display.innerHTML = songList()
