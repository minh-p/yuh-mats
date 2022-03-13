/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */

const NAVOPEN_WIDTH = "250px";
const NAVCLOSE_WIDTH = 0;

const contentList = document.getElementById("content-list");
const mainDiv = document.getElementById("main");
const body = document.getElementById("body");

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
  mainDiv.style["white-space"] = "nowrap";
  body.style["overflow-x"] = "hidden";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  contentList.style.width = NAVCLOSE_WIDTH;
  mainDiv.style.marginLeft = NAVCLOSE_WIDTH;
  // 0.5 seconds is the amount of time for transition to finish
  setTimeout(() => {
    body.style["overflow-x"] = "visible";
    mainDiv.style["white-space"] = "normal";
  }, 500);
}
