const song = document.getElementById('current_song')
const song_Source = document.getElementById('songSource')
const display_pic = document.querySelector('.album_art')
const display_title = document.querySelector('#title')
const display_artist = document.querySelector('#artist')
const playlist_display = document.querySelector('.playlist_section')
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
        song.play()
    } else { song.pause() };
}
function mute() { 
    if(song.muted === true) { 
        song.muted = false
    } else { song.muted = true}
}

let num = 0 //num is the song number in the array
//shows title, album art and artist
function showSong() { 
    song.src = playlist[num].src;
    display_title.innerHTML = playlist[num].title;
    display_artist.innerHTML = playlist[num].artist;
    display_pic.style.background = `url(${playlist[num].pic})`;
    document.body.style.background = `url(${playlist[num].pic}) no-repeat center fixed`
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
volumeSlider.addEventListener('input', (e) => {
  const value = e.target.value;
  outputContainer.textContent = value;
  song.volume = value / 100;
});

//===========TOGGLE SWITCH========
function togglePlayer() { 
  player_display.style.display = "block";
  playlist_display.style.display = "none";
  document.getElementById('playerBtn').classList.add('active');
  document.getElementById('listBtn').classList.remove('active');
}
function toggleList() {
    player_display.style.display = "none";
    playlist_display.style.display = "block";
    document.getElementById('listBtn').classList.add('active');
    document.getElementById('playerBtn').classList.remove('active');
    document.body.style.background = `url("album_art.jpg")`
}
//========PLAYLIST SECTION==========
function playSong(i) { 
    song.src = playlist[i].src;
    song.play();
    display_title.innerHTML = playlist[i].title;
    display_artist.innerHTML = playlist[i].artist;
    display_pic.style.background = `url(${playlist[i].pic})`;
    document.body.style.background = `url(${playlist[i].pic}) no-repeat center fixed`
    
}
function songList() { 
    let text = ""
    for (i in playlist) { 
        text += `<a href="javascript:void(0)" onclick="playSong(${i})"><div class="music_item">
              <div>
                <img src=${playlist[i].pic}>
              </div>
              <div>
                <p>${playlist[i].title}</p>
              </div>
          </div></a>`
    }
    return text
}
playlist_display.innerHTML = songList()
