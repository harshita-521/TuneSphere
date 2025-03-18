// console.log("Let's deep dive into music !");


// document.addEventListener("DOMContentLoaded", function() {
//   let name = prompt("Hey Mysterious Guest! What's your name?");
//   if (name) {
//     document.getElementById("username").textContent =name;
//   };
// });


// const playPauseBtn = document.querySelector(".playPause");
// const prevBtn= document.querySelector(".prevSong");
// const nextBtn = document.querySelector(".nextSong");
// const songInfo = document.querySelector(".songInfo");
// const audioPlayer = document.querySelector("#audioPlayer");
// const currentTimeEl = document.querySelector(".currentTime");
// const totalTimeEl = document.querySelector(".totalTime");

// let isPlaying = false;
// let currentSongIndex = 0;

// const songs = [
//   { name: "Good For You", src: "assets/song-audio/Good For You.mp3" , artist:"Salena Gomez", img:"assets/song-cover/Cover of Good For You by Selena Gomez, A$AP Rocky.jpg" },
//   { name: "Pehla Pyaar", src: "assets/song-audio/Pehla Pyaar.mp3", artist:"Vishal Mishra" ,img:"assets/song-cover/Cover of Pehla Pyaar by Vishal Mishra, Armaan Malik.jpg"},
//   { name: "Willow", src: "assets/song-audio/Willow.mp3" ,artist:"Taylor Swift" , img:"assets/song-cover/Cover of willow by Taylor Swift.jpg"},
//   { name: "Raanjhan" , src:"assets/song-audio/Raanjhan.mp3" ,artist:"Sachet-Parampara" ,img:"assets/song-cover/Cover of Raanjhan (From _Do Patti_) by Sachet-Parampara, Parampara Tandon, Kausar Munir.jpg"},
//   { name:"Pyaar Hai" , src:"assets/song-audio/Pyaar Hai.mp3" , artist:"Sagar Verma" , img:"assets/song-cover/Cover of Pyaar Hai by Sagar Verma, Pina Colada Blues, Samahita Narang, Mismatched - Cast.jpg"},
//   {name: "Tum Se Hi" , src:"assets/song-audio/Tum Se Hi .mp3" , artist:"Pritam" , img:"assets/song-cover/Cover of Tum Se Hi by Pritam, Mohit Chauhan, Irshad Kamil.jpg"},
//   {name:"Jhol" , src:"assets/song-audio/SpotiDownloader.com - Jhol - Maanu.mp3" , artist:"Maanu", img:"assets/song-cover/Cover of Jhol by Maanu, Annural Khalid.jpg"},
//   {name:"Teri Jhuki Nazar" , src:"assets/song-audio/SpotiDownloader.com - Teri Jhuki Nazar - Pritam.mp3",artist:"Pritam,Shafqat",img:"assets/song-cover/Cover of Teri Jhuki Nazar by Pritam, Shafqat Amanat Ali.jpg"},
//   {name:"Espresso" , src:"assets/song-audio/SpotiDownloader.com - Espresso - Sabrina Carpenter.mp3" , artist:"Sabrina Carpenter", img:"assets/song-cover/Cover of Espresso by Sabrina Carpenter.jpg"}
// ];

// const loadSong = (index) => {
//   const song = songs[index];
//   audioPlayer.src = song.src;
//   songInfo.textContent = `Now Playing: ${song.name}`;
// };

// const togglePlayPause = () => {
//   if (isPlaying) {
//       audioPlayer.pause();
//       playPauseBtn.src = "assets/play.svg"; 
//   } else {
//       audioPlayer.play();
//       playPauseBtn.src = "assets/pause.svg"; 
//   }
//   isPlaying = !isPlaying;
// };


// const nextSong = () => {
//   currentSongIndex = (currentSongIndex + 1) % songs.length;
//   loadSong(currentSongIndex);
//   audioPlayer.play();
//   isPlaying = true;
//   playPauseBtn.src = "assets/pause.svg";
// };


// const prevSong = () => {
//   currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
//   loadSong(currentSongIndex);
//   audioPlayer.play();
//   isPlaying = true;
//   playPauseBtn.src = "assets/pause.svg";
// };


// audioPlayer.addEventListener("timeupdate", () => {
//   currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
//   totalTimeEl.textContent = formatTime(audioPlayer.duration);
// });


// const formatTime = (time) => {
//   if (isNaN(time)) return "0:00";
//   const minutes = Math.floor(time / 60);
//   const seconds = Math.floor(time % 60);
//   return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
// };


// playPauseBtn.addEventListener("click", togglePlayPause);
// nextBtn.addEventListener("click", nextSong);
// prevBtn.addEventListener("click", prevSong);


// loadSong(currentSongIndex);








// document.addEventListener("DOMContentLoaded", function () {
//   const playlistContainer = document.querySelector(".cardContainer"); 

  
//   songs.forEach(song => {
//       const songCard = document.createElement("div");
//       songCard.classList.add("card");
//       songCard.innerHTML = `
//           <img src="${song.img}" alt="${song.name}">
//           <h2>${song.name}</h2>
//           <p>${song.artist}</p>
//           <button class="playSong" data-src="${song.src}" data-name="${song.name}">  <div
//                                 style="width: 50px; height: 50px; background-color: #1ED760; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
//                                     fill="black">
//                                     <path
//                                         d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z"
//                                         fill="black" stroke="black" stroke-width="1.5" stroke-linejoin="round" />
//                                 </svg>
//                             </div></button>
//       `;
//       playlistContainer.appendChild(songCard);
//   });

//   const audioPlayer = document.querySelector("#audioPlayer");
//   const songInfo = document.querySelector(".songInfo");
//   const playPauseBtn = document.querySelector(".playPause");

//   document.querySelectorAll(".playSong").forEach(button => {
//       button.addEventListener("click", function () {
//           const songSrc = this.getAttribute("data-src");
//           const songName = this.getAttribute("data-name");

//           if (audioPlayer.src.includes(songSrc) && !audioPlayer.paused) {
//               audioPlayer.pause();
//               playPauseBtn.src = "assets/play.svg"; 
//           } else {
//               audioPlayer.src = songSrc;
//               audioPlayer.play();
//               songInfo.textContent = `Now Playing: ${songName}`;
//               playPauseBtn.src = "assets/pause.svg"; 
//           }
//       });
//   });
// });



















// const Loading = () => {
//   const homeButton = document.querySelector(".homeButton");
//   const searchButton = document.querySelector(".searchButton");
//   const homeScreen = document.querySelector(".homeScreen");
//   const searchScreen = document.querySelector(".searchScreen");

//   if (homeButton && searchButton && homeScreen && searchScreen) {
//     homeButton.addEventListener("click", () => {
//       searchScreen.classList.add("fadeOut");
//       searchScreen.classList.remove("fadeIn");

//       homeScreen.classList.add("fadeIn");
//       homeScreen.classList.remove("fadeOut");
//     });

//     searchButton.addEventListener("click", () => {
//       homeScreen.classList.add("fadeOut");
//       homeScreen.classList.remove("fadeIn");

//       searchScreen.classList.add("fadeIn");
//       searchScreen.classList.remove("fadeOut");
//     });
//   } else {
//     console.error("One or more elements not found!");
//   }

//   document.addEventListener("DOMContentLoaded", function () {
//     const boxes = document.querySelectorAll(".card_browse"); 

//     boxes.forEach(box => {
//         const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`; 
//         box.style.backgroundColor = randomColor;
//     });
// });

// };

// Loading();












// let audio;


// document.addEventListener('DOMContentLoaded', function() {
  
//   audio = document.querySelector('audio');
  
  
//   if (!audio) {
//     audio = document.createElement('audio');
//     document.body.appendChild(audio);
//   }
  

//   audio.controls = true; 
//   audio.volume = 0.7;   
  
  
//   audio.addEventListener('error', function(e) {
//     console.error('Audio error:', e);
//   });
  
//   audio.addEventListener('play', function() {
//     console.log('Song started playing');
    
//   });
  
//   audio.addEventListener('pause', function() {
//     console.log('Song paused');
    
//   });
  
//   audio.addEventListener('ended', function() {
//     console.log('Song ended');
    
//   });
  
//   console.log('Audio player initialized');
// });





// function searchSongs() {
//   console.log("Search function triggered");
//   let input = document.getElementById("search-input").value.toLowerCase().trim();
//   console.log("Search input:", input);
  
 
//   if (!songs || !Array.isArray(songs)) {
//     console.error("Songs array not defined or not an array");
//     return;
//   }
  
//   let songList = document.getElementById("songList");
//   if (!songList) {
//     console.log("Creating new song list element");
//     songList = document.createElement("ul");
//     songList.id = "songList";
    
    
//     const searchBar = document.querySelector(".searchBar");
//     if (searchBar) {
//       searchBar.after(songList);
//     } else {
//       document.body.appendChild(songList);
//     }
//   }
  
  
//   songList.innerHTML = "";
//   songList.style.display = "block";
  
  
//   if (input === "") {
//     let li = document.createElement("li");
//     li.textContent = "Please enter a search term";
//     li.className = "no-results";
//     songList.appendChild(li);
//     return;
//   }
  
  
//   let filteredSongs = songs.filter(song => {
//     const songName = song.name ? song.name.toLowerCase() : "";
//     const artistName = song.artist ? song.artist.toLowerCase() : "";
    
//     return songName.includes(input) || artistName.includes(input);
//   });
  
//   console.log("Filtered songs:", filteredSongs.length);
  
  
//   filteredSongs.forEach(song => {
//     let li = document.createElement("li");
//     li.textContent = `${song.name} - ${song.artist}`;
//     li.className = "song-item";
    
    
//     li.onmouseover = function() {
//       this.style.backgroundColor = "#444";
//     };
//     li.onmouseout = function() {
//       this.style.backgroundColor = "#333";
//     };
    
//     li.onclick = () => {
//       playSong(song.src);
//       songList.style.display = "none";
//     };
    
//     songList.appendChild(li);
//     console.log("Added song to results:", song.name);
//   });
  
//   if (filteredSongs.length === 0) {
//     let li = document.createElement("li");
//     li.textContent = "No Results Found! Try searching for different artist / song.";
//     li.className = "no-results";
//     songList.appendChild(li);
//   }
// }

// function playSong(src) {
//   console.log("Trying to play:", src);
//   if (!src) {
//     console.error("No valid song source provided.");
//     return;
//   }
  
//   // Check if audio element exists
//   if (!audioPlayer || !(audioPlayer instanceof HTMLAudioElement)) {
//     console.error("Audio element not properly initialized");
//     return;
//   }
  
//   audioPlayer.src = src;
//   audioPlayer.play()
//     .catch(error => {
//       console.error("Playback error:", error);
//       alert("Sorry, there was an error playing this song.");
//     });
// }





console.log("Let's deep dive into music !");

// ------- Unified Audio Player Setup -------
const songs = [
  { name: "Good For You", src: "assets/song-audio/Good For You.mp3", artist: "Salena Gomez", img: "assets/song-cover/Cover of Good For You by Selena Gomez, A$AP Rocky.jpg" },
  { name: "Pehla Pyaar", src: "assets/song-audio/Pehla Pyaar.mp3", artist: "Vishal Mishra", img: "assets/song-cover/Cover of Pehla Pyaar by Vishal Mishra, Armaan Malik.jpg" },
  { name: "Willow", src: "assets/song-audio/Willow.mp3", artist: "Taylor Swift", img: "assets/song-cover/Cover of willow by Taylor Swift.jpg" },
  { name: "Raanjhan", src: "assets/song-audio/Raanjhan.mp3", artist: "Sachet-Parampara", img: "assets/song-cover/Cover of Raanjhan (From _Do Patti_) by Sachet-Parampara, Parampara Tandon, Kausar Munir.jpg" },
  { name: "Pyaar Hai", src: "assets/song-audio/Pyaar Hai.mp3", artist: "Sagar Verma", img: "assets/song-cover/Cover of Pyaar Hai by Sagar Verma, Pina Colada Blues, Samahita Narang, Mismatched - Cast.jpg" },
  { name: "Tum Se Hi", src: "assets/song-audio/Tum Se Hi .mp3", artist: "Pritam", img: "assets/song-cover/Cover of Tum Se Hi by Pritam, Mohit Chauhan, Irshad Kamil.jpg" },
  { name: "Jhol", src: "assets/song-audio/SpotiDownloader.com - Jhol - Maanu.mp3", artist: "Maanu", img: "assets/song-cover/Cover of Jhol by Maanu, Annural Khalid.jpg" },
  { name: "Teri Jhuki Nazar", src: "assets/song-audio/SpotiDownloader.com - Teri Jhuki Nazar - Pritam.mp3", artist: "Pritam,Shafqat", img: "assets/song-cover/Cover of Teri Jhuki Nazar by Pritam, Shafqat Amanat Ali.jpg" },
  { name: "Espresso", src: "assets/song-audio/SpotiDownloader.com - Espresso - Sabrina Carpenter.mp3", artist: "Sabrina Carpenter", img: "assets/song-cover/Cover of Espresso by Sabrina Carpenter.jpg" }
];

document.addEventListener("DOMContentLoaded", function() {
  // User greeting
  let name = prompt("Hey Mysterious Guest! What's your name?");
  if (name) {
    document.getElementById("username").textContent = name;
  }

  // Initialize player elements
  const playPauseBtn = document.querySelector(".playPause");
  const prevBtn = document.querySelector(".prevSong");
  const nextBtn = document.querySelector(".nextSong");
  const songInfo = document.querySelector(".songInfo");
  const audioPlayer = document.querySelector("#audioPlayer");
  const currentTimeEl = document.querySelector(".currentTime");
  const totalTimeEl = document.querySelector(".totalTime");
  
  // Player state
  let isPlaying = false;
  let currentSongIndex = 0;

  // Configure audio player
  audioPlayer.controls = false; // Using custom controls
  audioPlayer.volume = 0.7;    // Set default volume to 70%

  // Format time (seconds to MM:SS)
  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Load song function
  const loadSong = (index) => {
    const song = songs[index];
    audioPlayer.src = song.src;
    songInfo.textContent = `Now Playing: ${song.name}`;
  };

  // Toggle play/pause function
  const togglePlayPause = () => {
    if (isPlaying) {
      audioPlayer.pause();
      playPauseBtn.src = "assets/play.svg"; // Change to play icon
    } else {
      audioPlayer.play().catch(error => {
        console.error("Playback error:", error);
        alert("Sorry, there was an error playing this song.");
      });
      playPauseBtn.src = "assets/pause.svg"; // Change to pause icon
    }
    isPlaying = !isPlaying;
  };

  // Play next song function
  const nextSong = () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.play().catch(error => console.error("Playback error:", error));
    isPlaying = true;
    playPauseBtn.src = "assets/pause.svg";
  };

  // Play previous song function
  const prevSong = () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.play().catch(error => console.error("Playback error:", error));
    isPlaying = true;
    playPauseBtn.src = "assets/pause.svg";
  };

  // Play specific song function (for search and playlist)
  const playSong = (src) => {
    console.log("Playing:", src);
    if (!src) {
      console.error("No valid song source provided.");
      return;
    }
    
    // Find the song index
    const songIndex = songs.findIndex(song => song.src === src);
    if (songIndex !== -1) {
      currentSongIndex = songIndex;
    }
    
    audioPlayer.src = src;
    audioPlayer.play()
      .then(() => {
        isPlaying = true;
        playPauseBtn.src = "assets/pause.svg";
        
        // Update song info if we found the song
        if (songIndex !== -1) {
          songInfo.textContent = `Now Playing: ${songs[songIndex].name}`;
        }
      })
      .catch(error => {
        console.error("Playback error:", error);
        alert("Sorry, there was an error playing this song.");
      });
  };

  // Audio event listeners
  audioPlayer.addEventListener("timeupdate", () => {
    currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
    totalTimeEl.textContent = formatTime(audioPlayer.duration);
  });
  
  audioPlayer.addEventListener('error', function(e) {
    console.error('Audio error:', e);
  });
  
  audioPlayer.addEventListener('ended', function() {
    console.log('Song ended');
    nextSong(); // Auto-play next song when current one ends
  });

  // Control button event listeners
  playPauseBtn.addEventListener("click", togglePlayPause);
  nextBtn.addEventListener("click", nextSong);
  prevBtn.addEventListener("click", prevSong);

  // Generate song cards for playlist
  const playlistContainer = document.querySelector(".cardContainer");
  if (playlistContainer) {
    songs.forEach(song => {
      const songCard = document.createElement("div");
      songCard.classList.add("card");
      songCard.innerHTML = `
        <img src="${song.img}" alt="${song.name}">
        <h2>${song.name}</h2>
        <p>${song.artist}</p>
        <button class="playSong" data-src="${song.src}" data-name="${song.name}">
          <div style="width: 50px; height: 50px; background-color: #1ED760; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="black">
              <path d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z" fill="black" stroke="black" stroke-width="1.5" stroke-linejoin="round" />
            </svg>
          </div>
        </button>
      `;
      playlistContainer.appendChild(songCard);
    });
  }

  // Add click event listeners to song cards
  document.querySelectorAll(".playSong").forEach(button => {
    button.addEventListener("click", function() {
      const songSrc = this.getAttribute("data-src");
      playSong(songSrc);
    });
  });

  // Set up search functionality
  function searchSongs() {
    console.log("Search function triggered");
    let input = document.getElementById("search-input").value.toLowerCase().trim();
    console.log("Search input:", input);
    
    let songList = document.getElementById("songList");
    if (!songList) {
      console.log("Creating new song list element");
      songList = document.createElement("ul");
      songList.id = "songList";
      
      // Insert after search bar
      const searchBar = document.querySelector(".searchBar");
      if (searchBar) {
        searchBar.after(songList);
      } else {
        document.body.appendChild(songList);
      }
    }
    
    // Clear existing results
    songList.innerHTML = "";
    songList.style.display = "block";
    
    // Handle empty search
    if (input === "") {
      let li = document.createElement("li");
      li.textContent = "Search for a song /  artist";
      li.className = "no-results";
      songList.appendChild(li);
      return;
    }
    
    // Filter songs
    let filteredSongs = songs.filter(song => {
      const songName = song.name ? song.name.toLowerCase() : "";
      const artistName = song.artist ? song.artist.toLowerCase() : "";
      
      return songName.includes(input) || artistName.includes(input);
    });
    
    console.log("Filtered songs:", filteredSongs.length);
    
    // Create and add list items
    filteredSongs.forEach(song => {
      let li = document.createElement("li");
      li.textContent = `${song.name} - ${song.artist}`;
      li.className = "song-item";
      
      // Hover effect (consider moving this to CSS)
      li.onmouseover = function() {
        this.style.backgroundColor = "#444";
      };
      li.onmouseout = function() {
        this.style.backgroundColor = "#333";
      };
      
      li.onclick = () => {
        playSong(song.src);
        songList.style.display = "none"; // Hide list after selection
      };
      
      songList.appendChild(li);
      console.log("Added song to results:", song.name);
    });
    
    if (filteredSongs.length === 0) {
      let li = document.createElement("li");
      li.textContent = "No Results Found! Try searching for different artist / song.";
      li.className = "no-results";
      songList.appendChild(li);
    }
  }

  // Attach search function to window so it can be called from HTML
  window.searchSongs = searchSongs;

  // Load the first song initially
  loadSong(currentSongIndex);

  // Set up screen transitions
  const homeButton = document.querySelector(".homeButton");
  const searchButton = document.querySelector(".searchButton");
  const homeScreen = document.querySelector(".homeScreen");
  const searchScreen = document.querySelector(".searchScreen");

  if (homeButton && searchButton && homeScreen && searchScreen) {
    homeButton.addEventListener("click", () => {
      searchScreen.classList.add("fadeOut");
      searchScreen.classList.remove("fadeIn");

      homeScreen.classList.add("fadeIn");
      homeScreen.classList.remove("fadeOut");
    });

    searchButton.addEventListener("click", () => {
      homeScreen.classList.add("fadeOut");
      homeScreen.classList.remove("fadeIn");

      searchScreen.classList.add("fadeIn");
      searchScreen.classList.remove("fadeOut");
    });
  } else {
    console.error("One or more screen elements not found!");
  }

  // Set random colors for browse boxes
  const boxes = document.querySelectorAll(".card_browse"); 
  boxes.forEach(box => {
    const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`; 
    box.style.backgroundColor = randomColor;
  });
});