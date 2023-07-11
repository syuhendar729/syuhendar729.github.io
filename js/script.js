// Play music auto
let playMusik = confirm("Do you want to play music?");
if (playMusik) {
  document.addEventListener("click", musicPlay);
  function musicPlay() {
    document.getElementById("myAudio").play();
    // document.removeEventListener("click", musicPlay);
  }
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
      status.innerHTML =
        "<b>Oops!</b> There was a problem sending your message";
      btnSubmit.classList.toggle("d-none");
      btnLoading.classList.toggle("d-none");
    });
}
form.addEventListener("submit", handleSubmit);


/* === Show card project === */
const project = [
	{
		title: 'Portfolio',
		img: 'portfolio.png',
		desc: 'Website portfolio. Dibangun dengan HTML, Bootstrap, dan JavaScript.',
		url: '#',
		urlSc: 'https://github.com/syuhendar729/syuhendar729.github.io',
	},
	{
		title: 'Simple Blog',
		img: 'html-css.png',
		desc: 'Website blog sederhana. Dibangun dengan HTML dan CSS.',
		url: '#',
		urlSc: '#'
	},
	{
		title: 'CodeIgniter CRUD',
		img: 'ci4app.png',
		desc: 'Website CRUD sederhana. Dibangun dengan CodeIgniter4.',
		url: '#',
		urlSc: 'https://github.com/syuhendar729/ci4app'
	},
	{
		title: 'System Login',
		img: 'ci4login.png',
		desc: 'Website login dan fitur forgot password. Dibangun dengan CodeIgniter4.',
		url: '#',
		urlSc: 'https://github.com/syuhendar729/ci4login'
	},
	{
		title: 'CodeIgniter Web App',
		img: 'ci4applogin.png',
		desc: 'Website CRUD dengan sistem login. Dibangun dengan CodeIgniter4.',
		url: '#',
		urlSc: 'https://github.com/syuhendar729/ci4applogin'
	},
	{
		title: 'Todo App',
		img: 'todoapp.png',
		desc: `Website TodoAPP. Dibangun dengan Nodejs, Express, dan MySql sebagai database.`,
		url: 'https://bljr-nodejs.herokuapp.com/',
		urlSc: 'https://github.com/syuhendar729/nodejs'
	},
	{
		title: "Table Periodik",
		img: 'table-periodik.png',
		desc: `Website Tabel Periodik. Dibangun dengan HTML, Bootstrap, dan JavaScript.`,
		url: 'https://syuhendar729.github.io/table-periodik',
		urlSc: 'https://github.com/syuhendar729/table-periodik'
	},
	{
		title: "Event Sikrab Outbound PIK-R",
		img: 'sikrab-pikr.jpg',
		desc: `Website acara Sikrab Outbound PIK-R ITERA. Dibangun dengan HTML, CSS, dan Bootstrap.`,
		url: 'https://outboundpikr2023.netlify.app/',
		urlSc: 'https://github.com/syuhendar729/web-sikrab-pikr'
	},
	{
		title: "Eid Mubarok Site",
		img: 'eid.png',
		desc: `Website Eid Mubarok, sebagai ucapan mohon maaf lahir dan batin. Dibangun dengan HTML, CSS, dan JavaScript.`,
		url: 'https://syuhendar-eid.netlify.app/',
		urlSc: 'https://github.com/syuhendar729/myeid'
	},
	{
		title: "My Rust Website",
		img: 'my-rust-web.png',
		desc: `Website ini sebagian besar berisi konten blog pribadi. Dibangun dengan bahasa pemrograman Rust dengan Rustyink sebagai Static Site Generator.`,
		url: 'https://callmedar.github.io/',
		urlSc: 'https://github.com/callmedar/callmedar.github.io'
	},
	{
		title: "MongoDB WebContact",
		img: 'nodejs-webcontact.png',
		desc: `Website ini adalah pengelolaan data contact sederhana. Dibangun dengan Nodejs, Express, dan MongoDB sebagai database.`,
		url: 'https://callmedar.github.io/',
		urlSc: 'https://github.com/callmedar/callmedar.github.io'
	},

]

const achievment = [
	{
		img: 'cer-node.png',
		title: 'NodeJS',
		desc: 'Sertifikat keahlian dalam pembuatan aplikasi javascript menggunakan teknologi NodeJS yang didapatkan dari Progate Indonesia.'
	},
	{
		img: 'cer-py.png',
		title: 'Python',
		desc: 'Sertifikat keahlian dalam bahasa pemrograman python yang didapatkan dari Progate Indonesia.'
	},
	{
		img: 'cer-clserver-alibaba.png',
		title: 'Manage Cloud Server',
		desc: 'Sertifikat keahlian dalam mengoperasikan dan mengelola cloud server (VPS) yang didapatkan dari company Alibaba.'
	},
	{
		img: 'cer-rc.png',
		title: 'Recloud',
		desc: 'Sertifikat peserta Recloud Challanges Indonesia.'
	},
	{
		img: 'cer-js-dicoding.png',
		title: 'Javascript',
		desc: 'Sertifikat keahlian dalam bahasa pemrograman Javascript yang didapatkan dari company Dicoding dan diakui dalam dunia industri global.',
	},
	{
		img: 'cer-ai-alibaba.png',
		title: 'AI Developer',
		desc: 'Sertifikat AI Developer yang didapatkan dari company Alibaba.'
	},
	{
		img: 'cer-backend-fcc.png',
		title: 'Back End Developer',
		desc: 'Sertifikat keahlian dalam pengembangan aplikasi Back End menggunakan teknologi Nodejs dan MongoDB yang didapatkan dari Company Freecodecamp dan diakui dalam dunia industri internasional seperti Google, Microsoft, Amazon, dan lainnya.'
	},
	{
		img: 'cer-clserver-codepolitan.png',
		title: 'Setting up Server',
		desc: 'Sertifikat setting up server dari company Codepolitan.'
	},
	{
		img: 'cer-dspython-dqlab.png',
		title: 'Python for Data Science',
		desc: 'Sertifikat penerapan bahasa python dalam teknologi Sains Data'
	},
	{
		img: 'cer-dsR-dqlab.png',
		title: 'Python for Data Science',
		desc: 'Sertifikat penerapan bahasa R dalam teknologi Sains Data'
	},
	{
		img: 'cer-gemastik15-rpl.png',
		title: 'Gemastik VI Software Developer',
		desc: 'Sertifikat peserta lomba Gemastik 15 bidang Pengembangan Perangkat Lunak'
	},
]

updateUI(project, 'project-content', showProject)
updateUI(achievment, 'achievment-content', showAchievment)












