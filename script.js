const menuList = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
  if (menuList.classList.contains("active")) {
    menuList.classList.remove("active");
  } else {
    menuList.classList.add("active");
  }
});
