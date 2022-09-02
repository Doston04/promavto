const catalogueContainers = document.querySelectorAll(".catalogueContainer")
const buttons = document.querySelectorAll(".tab__btn")

buttons.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    catalogueContainers.forEach(catalogue => {
      catalogue.classList.remove("active")
    })
    buttons.forEach(btn => {
      btn.classList.remove("active")
    })

    catalogueContainers[i].classList.add("active")
    buttons[i].classList.add("active")
  })
})

const services = document.querySelectorAll(".service")
const serviceTextDivs = document.querySelectorAll(".serviceTextDiv")
const serviceArrows = document.querySelectorAll(".serviceArrow")

services.forEach((service, index) => {
  service.addEventListener("click", () => {
    serviceTextDivs.forEach(textDiv => {
      textDiv.classList.remove("active")
    })
    serviceArrows.forEach(arrow => {
      arrow.classList.remove("active")
    })

    serviceTextDivs[index].classList.add("active")
    serviceArrows[index].classList.add("active")
  })
})