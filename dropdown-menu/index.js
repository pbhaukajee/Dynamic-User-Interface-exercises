const menuBtn = document.querySelector(".dropdown-menu-button");
menuBtn.addEventListener("click", function displayMenu() {
  document.getElementById("my-dropdown").classList.toggle("visible");
});

window.addEventListener("click", function hide(e) {
  if (e.target !== menuBtn) {
    this.document
      .querySelector(".dropdown-content")
      .classList.remove("visible");
  }
});
