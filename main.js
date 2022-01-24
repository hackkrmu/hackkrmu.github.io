function toggleMenu() {
  var menu = document.getElementById("menu");
  if (menu.classList.contains("block")) {
    menu.classList.add("hidden");
    menu.classList.remove("opacity-1");
    menu.classList.add("opacity-0");
    menu.classList.remove("block");
  } else {
    menu.classList.remove("hidden");
    menu.classList.remove("opacity-0");
    menu.classList.add("opacity-1");
    menu.classList.add("block");
  }
}

// document.addEventListener("click", function (e) {
//   if (
//     e.target.id === "menuButton2" ||
//     e.target.id === "menuButton2" ||
//     e.target.id === "menuButton3"
//   ) {
//     console.log(e.target.id);
//   } else {
//     var menuButton = document.getElementById("menuButton1");
//     if (menuButton.classList.contains("flex")) {
//       var menu = document.getElementById("menu");
//       menu.classList.add("hidden");
//       menu.classList.remove("opacity-1");
//       menu.classList.add("opacity-0");
//       menu.classList.remove("block");
//     }
//   }
// });
