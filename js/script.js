// Play music auto
document.addEventListener("click", musicPlay);
function musicPlay() {
  document.getElementById("myAudio").play();
  // document.removeEventListener("click", musicPlay);
}

// Set attribute a new tab
$("#achievment a").attr("target", "_blank");

$(".nav-link").on("click", function () {
  $(".nav-link").removeClass("active");
  $(this).addClass("active");
});

//  Form Contact
const form = document.getElementById("my-form");
const btnSubmit = document.getElementById("my-btn-submit");
const btnLoading = document.getElementById("my-btn-loading");
const myAlert = document.getElementById("my-alert");

async function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("my-form-status");
  const data = new FormData(event.target);
  // ketika submit diklik, tampilkan btn Loading dan hilangkan Submit
  btnSubmit.classList.toggle("d-none");
  btnLoading.classList.toggle("d-none");
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      // ketika berhasil tampilkan alert dan ubah btn Loading jadi Submit
      myAlert.classList.toggle("alert-warning");
      myAlert.classList.toggle("d-none");
      status.innerHTML = "<b>Thank you!</b> your message was sent successfully";
      btnSubmit.classList.toggle("d-none");
      btnLoading.classList.toggle("d-none");
      form.reset();
    })
    .catch((error) => {
      myAlert.classList.toggle("alert-danger");
      myAlert.classList.toggle("d-none");
      status.innerHTML = "<b>Oops!</b> There was a problem sending your message";
      btnSubmit.classList.toggle("d-none");
      btnLoading.classList.toggle("d-none");
    });
}
form.addEventListener("submit", handleSubmit);
