{
  const body = document.querySelector("body");
  const button = document.querySelector("#sp-menu");
  const overlay = document.querySelector(".overlay");
  console.log(button);

  button.addEventListener("click", () => {
    overlay.classList.toggle("show");
  });

  // body.addEventListener("click", () => {
  //   overlay.classList.remove("show");
  // });
}
