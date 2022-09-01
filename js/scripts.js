const scrollHeader = document.querySelector(".header__scroll")
const fixedHeader = document.querySelector(".fixedHeader")
const headerInner = document.querySelector(".header__inner")

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

const currentYear = new Date().getFullYear()
const spans = document.querySelectorAll(".currentYearSpan")
spans.forEach(span => {
    span.append(currentYear)
})