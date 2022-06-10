const contact = document.querySelector(".contact-info");
const button = document.querySelector(".contact-button");
const downloadIcon = document.querySelector(".fa-circle-arrow-down");
const downloadButton = document.querySelector(".cv-button");

button.addEventListener("click", () => {
  contact.style.display = "flex";
  button.style.display = "none";
});

downloadButton.addEventListener("mouseover", () => {
  downloadIcon.style.color = "rgb(222,23,56)";
  downloadButton.style.color = "rgb(222,23,56)";
});

downloadButton.addEventListener("mouseout", () => {
  downloadIcon.style.color = "#f5f5f5";
  downloadButton.style.color = "#f5f5f5";
});
