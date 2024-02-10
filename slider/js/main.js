let sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);
let slideCount = sliderImages.length;
let currentSlide = 1;

// slide number element
let slidenNumberElement = document.getElementById("slider-number");

// get the preivous and next
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");

nextButton.onclick = () => {
  if (currentSlide < slideCount) {
    currentSlide++;
    theChecker();
  }
};
prevButton.onclick = () => {
  if (currentSlide > 1) {
    currentSlide--;
    theChecker();
  }
};
// create the main UL element
let paginationElement = document.createElement("ul");
// set ID on created UL element
paginationElement.setAttribute("id", "pagination-ul");

// create List Items based on slide counts
for (let i = 1; i <= slideCount; i++) {
  let bullet = document.createElement("li");
  bullet.appendChild(document.createTextNode(i));
  bullet.setAttribute("data-index", i);
  paginationElement.appendChild(bullet);
}
document.getElementById("indicators").appendChild(paginationElement);

// get the new created UL
let paginataionCreatedUl = document.getElementById("pagination-ul");

// get the bullets
let bullets = Array.from(document.querySelectorAll("#pagination-ul li"));
console.log(bullets);

// looping on bullets and add event
bullets.forEach((bullet) => {
  bullet.addEventListener("click", (e) => {
    currentSlide = Number(e.target.dataset.index);
    theChecker();
  });
});
// create the checker function

function theChecker() {
  slidenNumberElement.textContent = `slide # ${currentSlide} of ${slideCount}`;
  // remove all active classes from image
  removeAllActives();
  // set active class on current slide
  sliderImages[currentSlide - 1].classList.add("active");
  // set active class on current pagiation li
  paginataionCreatedUl.children[currentSlide - 1].classList.add("active");

  // check if the currentslide is the first
  if (currentSlide === 1) {
    document.getElementById("prev").classList.add("disabled");
  } else {
    document.getElementById("prev").classList.remove("disabled");
  }
  // check if the currentslide is the last
  if (currentSlide === slideCount) {
    document.getElementById("next").classList.add("disabled");
  } else {
    document.getElementById("next").classList.remove("disabled");
  }
}
theChecker();

// remove all active classes from images and pagintaion Bullets

function removeAllActives() {
  // loop throw images
  sliderImages.forEach((image) => {
    image.classList.remove("active");
  });
  // loop throw bullets
  bullets.forEach((bullet) => {
    bullet.classList.remove("active");
  });
}
