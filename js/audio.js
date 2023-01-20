const audio = document.getElementById("audio");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const shuffle = document.getElementById("shuffle");
const repeat = document.getElementById("repeat");

const song1 = document.getElementById("song1");
const song2 = document.getElementById("song2");
const song3 = document.getElementById("song3");
const song4 = document.getElementById("song4");
const song5 = document.getElementById("song5");

let songs = [
    "../media/0.mp3",
    "../media/1.mp3",
    "../media/2.mp3",
    "../media/3.mp3",
    "../media/4.mp3",
];
audio.addEventListener("play", () => {
    let src = Number(audio.src.split("/media/")[1].charAt(0));
    console.log(src);
    for (let i = 0; i < songs.length; i++) {
        console.log(document.getElementsByClassName("mus")[i]);
        document.getElementsByClassName("mus")[i].classList.remove("active");
    }
    document.getElementById(`song${src + 1}`).classList.add("active");
});

play.addEventListener("click", () => {
    audio.play();
});

pause.addEventListener("click", () => {
    audio.pause();
});

shuffle.addEventListener("click", () => {
    let randomSong = () => {
        return Math.floor(Math.random() * 5) + 1;
    };
    let num = randomSong();
    console.log(num);
    audio.src = `${songs[num - 1]}`;
    audio.play();
});

audio.addEventListener("ended", () => {
    let sorc = Number(audio.src.split("/media/")[1].charAt(0));
    console.log(sorc);
    if (sorc == 4) {
        audio.src = `${songs[0]}`;
    } else {
        audio.src = `${songs[sorc + 1]}`;
    }
    audio.play();
});

repeat.addEventListener("click", () => {
    audio.currentTime = 0;
    audio.play();
});

song1.addEventListener("click", () => {
    audio.src = `${songs[0]}`;
    audio.play();
});

song2.addEventListener("click", () => {
    audio.src = `${songs[1]}`;
    audio.play();
});

song3.addEventListener("click", () => {
    audio.src = `${songs[2]}`;
    audio.play();
});

song4.addEventListener("click", () => {
    audio.src = `${songs[3]}`;
    audio.play();
});

song5.addEventListener("click", () => {
    audio.src = `${songs[4]}`;
    audio.play();
});
