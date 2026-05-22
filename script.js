/* ===== МАССИВЫ ===== */

const tracks=[

{
name:"Бегать и падать",
artist:"Куок",
file:"music/Бегать и падать.mp3",
cover:"img/track1.jpg"
},

{
name:"Уходи",
artist:"ФРИК ПАТИ, Mzlff",
file:"music/Уходи.mp3",
cover:"img/track2.jpg"
},

{
name:"абсолютный ноль",
artist:"Mzlff",
file:"music/абсолютный ноль.mp3",
cover:"img/track3.jpg"
},

{
name:"Мечты рядовой фигуры",
artist:"Mzlff",
file:"music/Мечты рядовой фигуры.mp3",
cover:"img/track4.jpg",

lyrics:"[]"
},

{
name:"Крематорий для бабочек",
artist:"MellSher",
file:"music/Крематорий для бабочек.mp3",
cover:"img/track5.jpg"
},

{
name:"МазеLOVE",
artist:"Lida, dk",
file:"music/мазеLOVE Lida, DK.mp3",
cover:"img/track6.jpg"
}

]


const memes=[

"img/meme1.jpg",
"img/meme2.jpg",
"img/meme3.jpg",
"img/meme4.jpg",
"img/meme5.jpg",
"img/meme6.jpg"

]

const playlists=[

{
name:"Spotify",
url:"https://open.spotify.com/playlist/6MNfVSspPcmuZ3nf0PvJnn?si=Kb_2X-K8SQuSeRiB1oGK0Q"
},

{
name:"YouTube Music",
url:"https://music.youtube.com/playlist?list=PLZcqoG0ALLPRFGA35WPV0IsM8mOdt2d5y"
}

]

const socials=[

{
name:"Reddit",
icon:"fa-brands fa-reddit",
url:"https://www.reddit.com/u/maze110vvv/s/fu6MsOoXUQ"
},

{
name:"Reddit 2",
icon:"fa-brands fa-reddit",
url:"https://www.reddit.com/u/ne_mzlff/s/gQ9moeCkwP"
},

{
name:"Telegram",
icon:"fa-brands fa-telegram",
url:"https://t.me/awesome_fugu"
},

{
name:"TikTok",
icon:"fa-brands fa-tiktok",
url:"https://www.tiktok.com/@awesome_fugu?_r=1&_t=ZS-96ZXudI2mZT"
},

{
name:"YouTube",
icon:"fa-brands fa-youtube",
url:"https://youtube.com/@bezkonechny_nosok"
}

]




/* МУЗЫКА */

let musicContainer=
document.getElementById("musicContainer")

tracks.forEach(track=>{

musicContainer.innerHTML+=`

<div class="glass-card">

<img
src="${track.cover}"
class="track-cover">

<h3>${track.name}</h3>

<p>${track.artist}</p>

<audio controls>

<source src="${track.file}">

</audio>

${track.lyrics ?

`<button onclick="showLyrics('${track.lyrics}')">

Показать текст

</button>`

:""}

</div>

`

})



/* ПЛЕЙЛИСТЫ */

let playlistContainer=
document.getElementById("playlistContainer")

playlists.forEach(item=>{

playlistContainer.innerHTML+=`

<a class="social-btn glass-card"

href="${item.url}"
target="_blank">

${item.name}

</a>

`

})




/* СОЦСЕТИ */

let socialContainer=
document.getElementById("socialContainer")

socials.forEach(item=>{

socialContainer.innerHTML+=`

<a class="social-btn glass-card"

href="${item.url}"
target="_blank">

<i class="${item.icon}"></i>

${item.name}

</a>

`

})



/* МЕМЫ */

let memeContainer=
document.getElementById("memeContainer")

memes.forEach((meme,index)=>{

memeContainer.innerHTML+=`

<div class="glass-card">

<img src="${meme}"
onclick="openImage('${meme}')">

<p>Мем №${index+1}</p>

</div>

`

})




/* ТЕКСТ ПЕСНИ */

function showLyrics(text){

lyricsModal.style.display="flex"

lyrics.innerText=text

}

close.onclick=()=>{

lyricsModal.style.display="none"

}



/* УВЕЛИЧЕНИЕ КАРТИНОК */

function openImage(img){

imageModal.style.display="flex"

fullImage.src=img

}

imageModal.onclick=()=>{

imageModal.style.display="none"

  }
