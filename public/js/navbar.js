/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */

const NAVOPEN_WIDTH = "250px";
const NAVCLOSE_WIDTH = 0;

const contentList = document.getElementById("content-list");
const mainDiv = document.getElementById("main");

contentList.style["border-right"] = "3px solid black";

document.getElementById("navbton").onclick = () => {
  if (contentList.style.width == NAVOPEN_WIDTH) {
    closeNav();
  } else {
    openNav();
  }
}

function openNav() {
  contentList.style.width = NAVOPEN_WIDTH;
  mainDiv.style.marginLeft = NAVOPEN_WIDTH;
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  contentList.style.width = NAVCLOSE_WIDTH;
  mainDiv.style.marginLeft = NAVCLOSE_WIDTH;
}
