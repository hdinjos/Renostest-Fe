const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

function showModal() {
  modal.style.display = "flex";
}

close.onclick = function () {
  modal.style.display = "none";
};
