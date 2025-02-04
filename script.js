console.log("Let's go!");

const playSongs = () => {
  const homeButton = document.querySelector(".homeButton");
  const searchButton = document.querySelector(".searchButton");
  const homeScreen = document.querySelector(".homeScreen");
  const searchScreen = document.querySelector(".searchScreen");

  if (homeButton && searchButton && homeScreen && searchScreen) {
    homeButton.addEventListener("click", () => {
      searchScreen.classList.add("fadeOut");
      searchScreen.classList.remove("fadeIn");

      homeScreen.classList.add("fadeIn");
      homeScreen.classList.remove("fadeOut");
    });

    searchButton.addEventListener("click", () => {
      homeScreen.classList.add("fadeOut");
      homeScreen.classList.remove("fadeIn");

      searchScreen.classList.add("fadeIn");
      searchScreen.classList.remove("fadeOut");
    });
  } else {
    console.error("One or more elements not found!");
  }

  document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".card_browse"); 

    boxes.forEach(box => {
        const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`; 
        box.style.backgroundColor = randomColor;
    });
});

};

playSongs();
