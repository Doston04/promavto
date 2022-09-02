const scrollHeader = document.querySelector(".header__scroll")
const fixedHeader = document.querySelector(".fixedHeader")
const headerInner = document.querySelector(".header__inner")
const mobileHeader = document.querySelector(".mobileHeader")
const hamburger = document.querySelector(".hamburgerMenu")
const mobileHeaderContent = document.querySelector(".mobileHeader__inner")
const body = document.querySelector("body")

if (window.innerWidth > 600) {
    window.addEventListener("scroll", () => {
        if (this.scrollY >= 10) {
            scrollHeader.style.display = "flex"
            headerInner.style.display = "none"
            fixedHeader.style.display = "flex"
        }
        else {
            scrollHeader.style.display = "none"
            headerInner.style.display = "flex"
            fixedHeader.style.display = "none"
        }
    })
}

window.addEventListener("click", (e) => {
    if (e.target == mobileHeader) {
        mobileHeader.classList.add("hidden")
        body.classList.toggle("bodyLock")
    } else if (e.target == mobileHeaderContent) {
        mobileHeader.classList.add("")
    } else if (e.target == hamburger) {
        mobileHeader.classList.toggle("hidden")
        body.classList.toggle("bodyLock")
    }
});

const currentYear = new Date().getFullYear()
const spans = document.querySelectorAll(".currentYearSpan")
spans.forEach(span => {
    span.append(currentYear)
})