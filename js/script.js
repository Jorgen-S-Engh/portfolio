const contact = document.querySelector(".contact-info");
const button = document.querySelector(".contact-button");
const skillIcon = document.querySelector(".skill-icons");
const downloadIcon = document.querySelector(".fa-circle-arrow-down");
const downloadButton = document.querySelector(".cv-button");
const age = document.querySelector(".my-age");

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

// AGE FUNCTION
function calculateAge(bday) {
  const dateDiff = Date.now() - bday.getTime();
  const ageDt = new Date(dateDiff);
  return Math.abs(ageDt.getUTCFullYear() - 1970);
}
const myAge = calculateAge(new Date(1988, 7, 13));
age.innerHTML = myAge;

// MODAL
const skillContainer = document.querySelector(".skill-icons");
const modalContainer = document.querySelector(".modal-container");
const expandMessage = document.querySelector(".expand-message");

skillContainer.addEventListener("mouseover", () => {
  if (window.screen.width >= 750) {
    expandMessage.style.display = "block";
  }
});
skillContainer.addEventListener("mouseout", () => {
  if (window.screen.width >= 750) {
    expandMessage.style.display = "none";
  }
});

skillContainer.addEventListener("click", () => {
  if (window.screen.width >= 750) {
    modalContainer.style.display = "block";
  }
});

window.onclick = (e) => {
  if (e.target === modalContainer) {
    modalContainer.style.display = "none";
  }
};

//Get posts

const portfolioContainer = document.querySelector(".portfolio");

async function getPosts() {
  const reply = await fetch("https://www.jorgenpress.no/wp-json/wp/v2/posts/");
  const data = await reply.json();
  for (let i = 0; i < data.length; i++) {
    // console.log(data[i].excerpt.rendered);
    portfolioContainer.innerHTML += `
                                        <div class="portfolio-item">
                                        <div class="portfolio-headings">
                                          <p class="portfolio-number">0${
                                            i + 1
                                          }</p>
                                          <h3>${data[i].title.rendered}</h3>
                                          <hr />
                                        </div>
                                        <a class="portfolio-img-container" href="" target="_blank">
                                          <img src="${
                                            data[i].featured_media_src_url
                                          }" alt="Picture of the webpage ${
      data[i].title.rendered
    }" />
                                        </a>
                                        <div class="portfolio-card">
                                          <h3>Description:</h3>
                                          ${data[i].content.rendered}

                                          <a href="${
                                            data[i].excerpt.rendered
                                          }" target="_blank"><i
                                              class="fa-brands fa-github"></i></a>
                                          <h4>Built with:</h4>
                                          <div class="built-with">
                                            <div>
                                              <i class="fa-brands fa-html5"></i>
                                              <p>HTML5</p>
                                            </div>
                                            <div>
                                              <i class="fa-brands fa-bootstrap"></i>
                                              <p>Bootstrap</p>
                                            </div>
                                            <div>
                                              <i class="fa-brands fa-sass"></i>
                                              <p>SASS</p>
                                            </div>
                                            <div>
                                              <i class="fa-brands fa-js-square"></i>
                                              <p>Js</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
  
  `;
  }
}

function trim(str, size) {
  if (str.length > 14) {
  }
  console.log(str.length);
}

trim("Creating kata is fun", 14);
