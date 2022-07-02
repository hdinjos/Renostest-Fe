const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

function hideModal() {
  modal.style.display = "none";
}

document.onclick = function (event) {
  if (event.target === modal) {
    hideModal();
  }
};

function showModal() {
  modal.style.display = "flex";
}

close.onclick = function () {
  hideModal();
};

document.onkeydown = function (e) {
  if (e.keyCode === 27) {
    hideModal();
  }
};
