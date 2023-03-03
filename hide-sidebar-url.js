locationSidebarOpen();
function locationSidebarOpen() {
  var isClose = !/sidebar\=false/.test(location.href)
  localStorage[":sidebar"] = isClose;
  var book = document.querySelector(".book");
  if (!book) {
    return;
  }
  if (!isClose) {
    book.classList.remove("with-summary");
  } else {
    book.classList.add("with-summary");
  }
}
