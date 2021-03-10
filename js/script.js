document.addEventListener("click", musicPlay);
function musicPlay() {
  document.getElementById("myAudio").play();
  // document.removeEventListener("click", musicPlay);
}

$(".nav-link").on("click", function () {
  $(".nav-link").removeClass("active");
  $(this).addClass("active");
});
