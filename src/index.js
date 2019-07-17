const vid = document.getElementById('vid');
const vid2 = document.getElementById('vid2');

function playVideos() {
  vid.play();
  vid2.play()
}

// function sockMerchant(ar) {
//   ar.sort();
//   let previousSock = null;

//   return ar.reduce((accumulator, currentSock) => {
//       console.log(ar, 'array');
//       console.log(currentSock, 'currentsock');
//       console.log(previousSock, 'prevsock');
//       if (currentSock === previousSock) {
//           // let indexSock = ar.indexOf(currentSock);
//           // let prevInd = ar.indexOf(previousSock);
//           // console.log(indexSock, 'currentsock');
//           // console.log(prevInd, 'previousSock');
//           previousSock = "hi";
//           accumulator += 1;
//       }
//       else {
//           previousSock = currentSock;
//       }
//       return accumulator;
//   }, 0)
// }

// const arrayNum = [ 10, 20, 20, 10, 10, 30, 50, 10, 20];

// console.log(sockMerchant(arrayNum));
