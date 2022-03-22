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
		desc: 'This is a portfolio website that tells about me',
		url: '#',
		urlSc: 'https://github.com/syuhendar729/syuhendar729.github.io',
	},
	{
		title: 'Simple Blog',
		img: 'html-css.png',
		desc: 'This is a simple blog that contains only writing with css and html',
		url: '#',
		urlSc: '#'
	},
	{
		title: 'Simple Crud',
		img: 'ci4app.png',
		desc: 'This is my simple CRUD project with the help of CodeIgniter4 framework',
		url: '#',
		urlSc: 'https://github.com/syuhendar729/ci4app'
	},
	{
		title: 'System Login 1',
		img: 'ci4login.png',
		desc: 'This is a simple login system and forgot password fiture with CodeIgniter4 framework',
		url: '#',
		urlSc: 'https://github.com/syuhendar729/ci4login'
	},
	{
		title: 'Simple Login 2',
		img: 'ci4applogin.png',
		desc: 'It is a simple login system and add CRUD features with the help of the codeigniter4 framework',
		url: '#',
		urlSc: 'https://github.com/syuhendar729/ci4applogin'
	},
	{
		title: 'My Blog',
		img: 'blog.png',
		desc: `It's a my blog. Build with nextjs and tailwind. Hosting in <a href="https://vercel.com">Vercel</a>`,
		url: 'https://syuhendar729.vercel.app/',
		urlSc: 'https://github.com/syuhendar729/nextjs-myblog'
	},
	{
		title: 'Todo App',
		img: 'todoapp.png',
		desc: `It's my todo list application. Build with NodeJS and Hosting in Heroku.`,
		url: 'https://bljr-nodejs.herokuapp.com/',
		urlSc: 'https://github.com/syuhendar729/nodejs'
	},
	{
		title: "Table Periodik",
		img: 'table-periodik.png',
		desc: `It's my application which shows the periodic table`,
		url: 'https://syuhendar729.github.io/table-periodik',
		urlSc: 'https://github.com/syuhendar729/table-periodik'
	}
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
	}
]

updateUI(project, 'project-content', showProject)
updateUI(achievment, 'achievment-content', showAchievment)












