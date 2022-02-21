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
		url: 'http://47.254.194.164/',
		urlSc: 'https://github.com/syuhendar729/'
	},
	{
		title: 'Simple Crud',
		img: 'ci4app.png',
		desc: 'This is my simple CRUD project with the help of CodeIgniter4 framework',
		url: 'http://47.254.194.164:81/',
		urlSc: 'https://github.com/syuhendar729/ci4app'
	},
	{
		title: 'System Login 1',
		img: 'ci4login.png',
		desc: 'This is a simple login system and forgot password fiture with CodeIgniter4 framework',
		url: 'https://ci4appsr.epizy.com/',
		urlSc: 'https://github.com/syuhendar729/ci4login'
	},
	{
		title: 'Simple Login 2',
		img: 'ci4applogin.png',
		desc: 'It is a simple login system and add CRUD features with the help of the codeigniter4 framework',
		url: 'http://47.254.194.164:83/',
		urlSc: 'https://github.com/syuhendar729/ci4applogin'
	},
	{
		title: 'My Blog',
		img: 'blog.png',
		desc: `It's a my blog. Build with nextjs and tailwind. Hosting in <a href="https://vercel.com">Vercel</a>`,
		url: 'https://syuhendar729.vercel.app/',
		urlSc: 'https://github.com/syuhendar729/nextjs-myblog'
	}
]

const achievment = [
	{
		img: 'cer-node.png',
		title: 'NodeJS',
		desc: 'adalah platform perangkat lunak pada sisi peladen dan aplikasi jaringan. Ditulis dengan bahasa JavaScript dan dijalankan pada Windows, Mac OS X, dan Linux tanpa perubahan kode program.',
		url: 'https://id.wikipedia.org/wiki/Node.js',
		sumber: 'Wikipedia'
	},
	{
		img: 'cer-py.png',
		title: 'Python',
		desc: 'adalah bahasa pemrograman tujuan umum yang ditafsirkan, tingkat tinggi. Dibuat oleh Guido van Rossum dan pertama kali dirilis pada tahun 1991, filosofi desain Python menekankan keterbacaan kode dengan penggunaan spasi putih yang signifikan.',
		url: 'https://id.wikipedia.org/wiki/Python_(bahasa_pemrograman)',
		sumber: 'Wikipedia'
	},
	{
		img: 'cer-AC.png',
		title: 'Cloud Server',
		desc: 'adalah gabungan pemanfaatan teknologi komputer dan pengembangan berbasis Internet. Awan adalah metafora dari internet, sebagaimana awan yang sering digambarkan di diagram jaringan komputer.',
		url: 'https://id.wikipedia.org/wiki/Komputasi_awan',
		sumber: 'Wikipedia'
	},
	{
		img: 'cer-rc.png',
		title: 'Recloud',
		desc: 'adalah kompetisi dengan sekumpulan tantangan untuk ragam layanan awan dan sertifikasi yang disediakan oleh Alibaba Cloud. Acara ini bisa diikuti oleh seluruh warga Indonesia dari mulai professional hingga mahasiswa untuk turut berkompetisi.' ,
		url: 'https://re-cloud.id/',
		sumber: 'Re-cloud.id'
	}
]

updateUI(project, 'project-content', showProject)
updateUI(achievment, 'achievment-content', showAchievment)












