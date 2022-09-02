const advantageTop = document.querySelectorAll(".advantageTop")
const advantageBody = document.querySelectorAll(".advantageBottom")

advantageTop.forEach(advantage => {
  advantage.addEventListener("click", (e) => {
    // advantageBody.forEach(body => {
    //   console.log(e.target.nextElementSibling);
    //   if (e.target.nextElementSibling !== body && body.classList.contains("active")) {
    //     body.classList.remove("active")
    //   }
    // });

    advantage.classList.toggle("active");
    const body = advantage.nextElementSibling;
    body.classList.toggle("active");
  });
});

advantageBody.forEach(body => {
  body.addEventListener("click", () => {
    body.classList.toggle("active")
    const head = body.previousElementSibling;
    head.classList.toggle("active");
  });
});
