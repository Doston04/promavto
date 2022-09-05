const tabSections = document.querySelectorAll(".tabSection")
const buttons = document.querySelectorAll(".button")

buttons.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        tabSections.forEach(section => {
            section.classList.remove("active")
        })
        buttons.forEach(btn => {
            btn.classList.remove("active")
        })

        tabSections[i].classList.add("active")
        buttons[i].classList.add("active")
    })
})


// const miniImages = document.querySelectorAll(".miniImage")
// const images = document.querySelectorAll(".imageImage")

// miniImages.forEach((miniImage, index) => {
//     miniImage.addEventListener("click", () => {
//         images.forEach(image => {
//             image.classList.remove("active")
//         });

//         images[index].classList.add("active");
//     });
// });

// const miniImages2 = document.querySelectorAll(".miniImage2")
// const images2 = document.querySelectorAll(".imageImage2")

// miniImages2.forEach((miniImage, index) => {
//     miniImage.addEventListener("click", () => {
//         images2.forEach(image => {
//             image.classList.remove("active")
//         });

//         images2[index].classList.add("active");
//     });
// });


var swiper = new Swiper(".swiper1Thumbs", {
    loop: true,
    freeMode: true,
    watchSlidesProgress: true,
});
new Swiper(".swiper1", {
    loop: true,
    thumbs: {
        swiper: swiper,
    },
});