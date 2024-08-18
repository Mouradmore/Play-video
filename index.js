import {
  onVideoLoaded,
  onVideoWaiting,
  playVideo,
  updatecurrentTime,
  loopVideo,
  loopFalse,
  muteVideo,
  unmuteVideo,
  replay30,
  forward30,
  allowDropVideo,
  dropVideo,
  playNext,
  playPrevious,
  setPlaybackRate,
} from "./controls.js";

export const videoList = [
  {
    title: "اهم الجمل في اللغة الانجليزية تعلم اللغة الانجليزية من الصفر ",
    imageURL:
      "02.jpg",
    videoURL:
      "01.mp4",
  },
  {
    title: "اهم الجمل في اللغة الانجليزية تعلم اللغة الانجليزية من الصفر",
    imageURL:
      "02.jpg",
    videoURL:
      "02.mp4",
  },
  {
    title: "اهم الجمل والعبارات الاساسية لتعلم اللغة الانجليزية تعلم اللغة الانجليزية من الصفر ",
    imageURL:
      "03.jpg",
    videoURL:
      "03.mp4",
  },
  {
    title: "اهم الجمل والعبارات الاساسية لتعلم اللغة الانجليزية تعلم اللغة الانجليزية من الصفر",
    imageURL:
      "03.jpg",
    videoURL:
      "04.mp4",
  },
  {
    title: "اهم الجمل والعبارات الاساسية لتعلم اللغة الانجليزية تعلم اللغة الانجليزية من الصفر ",
    imageURL:
      "03.jpg",
    videoURL:
      "05.mp4",
  },
  {
    title: "تعلم اللغة الإنجليزية من الصفر  باللهجة البريطانية ",
    imageURL:
      "04.jpg",
    videoURL:
      "06.mp4",
  },
{
    title: "تعلم اللغة الإنجليزية من الصفر  باللهجة البريطانية ",
    imageURL:
      "04.jpg",
    videoURL:
      "07.mp4",
  },
{
    title: "كيف تترجم أي جملة  ؟؟",
    imageURL:
      "05.jpg",
    videoURL:
      "001.mp4",
  },
  {
    title: "أكثر 50 صفة في اللغة الإنجليزية   صوت وصورة ",
    imageURL:
      "06.jpg",
    videoURL:
      "002.mp4",
  },
  {
    title: "كورس أهم 100 سؤال وجواب في اللغة الانجليزية",
    imageURL:
      "07.jpg",
    videoURL:
      "08.mp4",
  },
  {
    title: "كورس أهم 100 سؤال وجواب في اللغة الانجليزية",
    imageURL:
      "07.jpg",
    videoURL:
      "09.mp4",
  },
  {
    title: "كورس أهم 100 سؤال وجواب في اللغة الانجليزية",
    imageURL:
      "07.jpg",
    videoURL:
      "10.mp4",
  },
  {
    title: "تعلم اللغة الانجليزية _اهم الافعال في اللغة الانجليزية. مع الترجمة.",
    imageURL:
      "08.jpg",
    videoURL:
      "003.mp4",
  },
  {
    title: "تعلم اهم العبارات الاساسية واكثرها استخداما في الانجليزية- الدرس الاول",
    imageURL:
      "09.jpg",
    videoURL:
      "004.mp4",
  },
  {
    title: "تعلم اللغة الإنجليزية من الصفر",
    imageURL:
      "11.jpg",
    videoURL:
      "005.mp4",
  },
  {
    title: "اهم الجمل والعبارات الاساسية في تعلم اللغة الانجليزية من الصفر بسهولة",
    imageURL:
      "01.jpg",
    videoURL:
      "11.mp4",
  },
  {
    title: "اهم الجمل والعبارات الاساسية في تعلم اللغة الانجليزية من الصفر بسهولة",
    imageURL:
      "12.jpg",
    videoURL:
      "12.mp4",
  },
  {
    title: "اهم الجمل والعبارات الاساسية في تعلم اللغة الانجليزية من الصفر بسهولة",
    imageURL:
      "12.jpg",
    videoURL:
      "13.mp4",
  },
  {
    title: "تعلم اللغة الانجليزية _اهم الافعال في اللغة الانجليزية. مع الترجمة.",
    imageURL:
      "12.jpg",
    videoURL:
      "تعلم اللغة الانجليزية _اهم الافعال في اللغة الانجليزية. مع الترجمة. _english_for_all(360P).mp4",
  },
];

export const video = document.querySelector("#video_player");
export const play_pause = document.querySelector("#play_pause");
export const curr_time = document.querySelector("#curr_time");
export const total_time = document.querySelector("#total_time");
export const video_progress = document.querySelector("#video_progress");
export const playBtn = document.querySelector(".play");
export const pauseBtn = document.querySelector(".pause");
export const loop_video = document.querySelector(".loop_video");
export const loop_false = document.querySelector(".loop_false");
export const mute = document.querySelector(".mute");
export const unmute = document.querySelector(".unmute");
export const replay_30 = document.querySelector("#replay30");
export const forward_30 = document.querySelector("#forward30");
export const shuffle = document.querySelector("#shuffle");
export const shuffle_on = document.querySelector("#shuffle_on");
export const skip_previous = document.querySelector("#skip_previous");
export const skip_next = document.querySelector("#skip_next");
export const spinner = document.querySelector("#spinner_container");
export const seek = document.querySelector("#seek");
export const other_videos = document.querySelector("#other_videos");
export const pr05 = document.querySelector("#pr05");
export const pr1 = document.querySelector("#pr1");
export const pr2 = document.querySelector("#pr2");
export const year = document.querySelector("#year");
export const playerPoster = document.querySelector(".player_poster");
const keymap = document.querySelector("#key-map");

play_pause.addEventListener("click", playVideo);

playerPoster.setAttribute("src", videoList[0]?.imageURL);
video.setAttribute("poster", videoList[0].imageURL);
video.src = videoList[0].videoURL;
video.addEventListener("timeupdate", updatecurrentTime);
video.addEventListener("waiting", onVideoWaiting);
video.addEventListener("loadeddata", onVideoLoaded);
video.addEventListener("playing", onVideoLoaded);
video.addEventListener("dragover", (e) => allowDropVideo(e));
video.addEventListener("drop", (e) => dropVideo(e));
video.addEventListener("dragend", (e) => dropVideo(e));

loop_video.addEventListener("click", loopVideo);
loop_false.addEventListener("click", loopFalse);

mute.addEventListener("click", muteVideo);
unmute.addEventListener("click", unmuteVideo);

replay_30.addEventListener("click", replay30);
forward_30.addEventListener("click", forward30);

skip_previous.addEventListener("click", () => playPrevious());
skip_next.addEventListener("click", () => playNext());

pr05.addEventListener("click", () => setPlaybackRate(0.5));
pr1.addEventListener("click", () => setPlaybackRate(1));
pr2.addEventListener("click", () => setPlaybackRate(2));

document.addEventListener("keypress", (e) => {
  if (e.key === "l") loopVideo();

  if (e.key === "m") muteVideo();

  if (e.key === "n") playNext();

  if (e.key === "o") loopFalse();

  if (e.key === "p") playPrevious();

  if (e.key === "r") location.reload();

  if (e.key === "u") unmuteVideo();

  if (e.key === ".") video.pause();

  if (e.key === ",") video.play();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") forward30();

  if (e.key === "ArrowLeft") replay30();

  if (e.shiftKey) {
    keymap.showModal();
  }
});

const yeartoday = new Date().getUTCFullYear();
year.textContent = yeartoday;

(() => {
  video.loop = false;
  video.muted = false;

  if (video.paused) {
    playBtn.style.cssText = "display:block";
    pauseBtn.style.cssText = "display:none";
  } else {
    playBtn.style.cssText = "display:none";
    pauseBtn.style.cssText = "display:block";
  }

  if (video.loop) {
    loop_false.style.cssText = "display:block";
    loop_video.style.cssText = "display:none";
  } else {
    loop_video.style.cssText = "display:block";
    loop_false.style.cssText = "display:none";
  }

  if (video.muted) {
    unmute.style.cssText = "display:block !important";
    mute.style.cssText = "display:none !important";
  } else {
    mute.style.cssText = "display:block !important";
    unmute.style.cssText = "display:none !important";
  }
})();
