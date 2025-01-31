console.log("lets go!")

async function gwtSongs() {
    let a = await fetch("http://127.0.0.1:5500/songs.json")
    let response = await a.text();
    console.log(response);
    let div = document.createElement("div")
        div.innerHTML =response;
        let as= div.getElementsByTagName("a")
        let songs=[];
        for (let index = 0; index < as.length; index++) {
            const element = as[index];
            if(element.href.endsWith(".mp3")){
                songs.push(element.href)
                songs.push(element.href.split("/song/")[1])
            }
        }
        return songs
}

async function main() {
    let songs= await getSongs()
    console.log(songs)

    let songUL=document.querySelector(".songList").getElementsByTagName("ul")[0];
    for (const song of songs) {
        songUL.innerHTML=songUL.innerHTML+`<li> ${song.replaceAll("%20"," ")}</li>`;
    }

    var audio=new Audio(songs[0]);
    audio.play();

    audio.addEventListener("loadeddata",()=>{
        console.log(audio.duration,audio.currentSrc, audio.currentTime)
    });
}
main()


// async function main() {
//     try {
//         let response = await fetch("http://127.0.0.1:5500/songs.json");

//         if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
//         let data = await response.json();
//         console.log(data.songs); // This should now print an array of songs
//     } catch (error) {
//         console.error("Error fetching songs:", error);
//     }

//      let div = document.createElement("div")
//         div.innerHTML =response;
//         let tds= div.getElementsByTagName("td")
//         console.log(tds)
// }
// main();
