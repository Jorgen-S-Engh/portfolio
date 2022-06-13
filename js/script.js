const contact = document.querySelector(".contact-info");
const button = document.querySelector(".contact-button");
const skillIcon = document.querySelector(".skill-icons");
const downloadIcon = document.querySelector(".fa-circle-arrow-down");
const downloadButton = document.querySelector(".cv-button");
const age = document.querySelector(".my-age");
// const showMore = document.querySelector(".show-more");
// const thirdRow = document.querySelector(".third-row");

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

// showMore.addEventListener("click", () => {
//   thirdRow.style.display = "flex";
//   showMore.innerHTML = "Show less";
// });

// AGE FUNCTION
function calculateAge(bday) {
  const dateDiff = Date.now() - bday.getTime();
  const ageDt = new Date(dateDiff);
  return Math.abs(ageDt.getUTCFullYear() - 1970);
}
const myAge = calculateAge(new Date(1988, 7, 13));
age.innerHTML = myAge;
