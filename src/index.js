const vid = document.getElementById('vid');
const vid2 = document.getElementById('vid2');

function playVideos() {
  vid.play();
  vid2.play()
}

// const scene;
// const ARObject01;
// const ARObject02;
// const ARVideoScreen;

// AFRAME.registerComponent('markerhandler', {

//   init: function() {

//     // Set up the tick throttling. Will check if marker is active every 500ms
//     this.tick = AFRAME.utils.throttleTick(this.tick, 500, this);
//   },

//   tick: function(t, dt) {

//     if (document.querySelector("#hiroMarker").object3D.visible == true && playing == false) {
//       // MARKER IS PRESENT
//       alert("MARKER IS PRESENT");

//   		scene = document.querySelector('#a-scene');
//   	  ARObject01 = document.querySelector('#Object01');
//     	ARObject02 = document.querySelector('#Object02');
//       ARVideoScreen = document.querySelector('#videoScreen');

//       ARObject01.addEventListener('click', function () { console.log("object01 clickable in AR") });
//       ARObject02.addEventListener('click', function () { console.log("object02 clickable in AR") });
//       videoScreen.addEventListener('click', function () { playPauseVideo(); console.log("Video Play Toggle") });
//       playing = true;

//     }

//     else {
//       alert('MArker hidden');
//       // MARKER IS HIDDEN, do nothing (up to you)
//     }

//     }

// });

// function playPauseVideo(){

// if (video.paused)
//     video.play();
//   else
//     video.pause();
// }
