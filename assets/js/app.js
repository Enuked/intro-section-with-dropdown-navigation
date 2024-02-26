const menuBtn = document.querySelector(".mobile-menu");
const menu = document.querySelector(".menu");
const hasDropdown = document.querySelectorAll(".hasDropdown");
const dropdown = document.querySelectorAll(".dropdown");
const cover = document.getElementById("cover");
const closer = document.querySelector(".cover");
const droper = document.querySelector(".droper");
const drip = document.querySelector("#drip");



menuBtn.addEventListener("click", () => {
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
    cover.style.display = "none";
  } else {
    menu.classList.add("show");
    cover.style.display = "block";
  }
});

closer.addEventListener("click", () => {
  menu.classList.toggle("show", false);
  cover.style.display = "none";
});
[...hasDropdown].forEach((item) => {
  let isDroper1 = false; 
  const droper = item.querySelector(".droper"); 
  
  item.addEventListener("click", (e) => {
    const child = e.target;
    child.parentNode.classList.toggle("show");

    if (isDroper1) {
      droper.classList.remove("droper1");
      droper.classList.add("droper");
    } else {
      droper.classList.remove("droper");
      droper.classList.add("droper1");
    }
    
    isDroper1 = !isDroper1;
  });
});



function changeImageBasedOnViewport() {
  var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  var image = document.getElementById("logoImage");

  // Check if viewport width is greater than or equal to 600px
  if (viewportWidth >= 768) {
    image.src = "assets/img/image-hero-desktop.png"; // Change image source to desktop version
  } else {
    image.src = "assets/img/image-hero-mobile.png"; // Change image source to mobile version
  }
}

// Call the function initially and add an event listener for window resize
changeImageBasedOnViewport();
window.addEventListener("resize", changeImageBasedOnViewport);
function checkViewportWidth() {
  const viewportWidth = window.innerWidth;
  if (viewportWidth >= 768) {
    menu.classList.remove("show");
    cover.style.display = "none";
  }
}
checkViewportWidth();
window.addEventListener("resize", checkViewportWidth);

const menu2 = document.querySelector(".mobile-menu");

menu2.addEventListener("click", () => {
  menu2.classList.toggle("active");
});
