const video = document.querySelector(".video")
const videoDiv = document.querySelector(".productionVideoDiv")
const playBtn = document.querySelector(".playButton")
const videoMask = document.querySelector(".videoMask")

let clicked = false
const toggleVideo = () => {
  if (clicked) {
    videoMask.style.display = "flex"
    clicked = false
  } else {
    videoMask.style.display = "none"
    clicked = true
  }
}
videoDiv.addEventListener("click", toggleVideo)