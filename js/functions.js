function showProject(data){
	return `
          <div class="col-md-4 mb-3">
            <div class="card" style="width: 18rem">
              <img
                src="img/${data.img}"
                class="card-img-top"
                alt="My Project"
              />
              <div class="card-body">
                <h5 class="card-title">${data.title}</h5>
                <p class="card-text">
					${data.desc}
                </p>
                <a href="${data.url}" class="btn btn-success"
                  >View project <i class="bi bi-arrow-right-circle-fill"></i
                ></a>
                <br /><br />
                <a
                  href="${data.urlSc}"
                  target="_blank"
                  class="btn btn-primary"
                  >Source code <i class="bi bi-github"></i
                ></a>
              </div>
            </div>
          </div>` 
}

function showAchievment(data){
	return `
          <div class="col-md-4">
            <div class="card" style="width: 20rem">
              <img
                src="img/cr/${data.img}"
                class="card-img-top"
                alt="Certificate"
              />
              <div class="card-body">
                <p class="card-text">
                  <b>${data.title}</b> 
				  <br>
				  ${data.desc}
				</p>
              </div>
            </div>
          </div>
		  `
}

function updateUI(data, className, func){
	let cards = ''
	data.forEach(d => {
		cards += func(d)
	})
	const resCon = document.querySelector(`.${className}`)
	resCon.innerHTML = cards
}






