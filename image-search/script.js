const accessKey = "zk9pl5jIoVXMC8Lq6fjn3wTOaFxc3kSA-65O6_AFUfk"

const form = document.querySelector("form")
const searchInput = document.querySelector(".search-input")
const searchResult = document.querySelector(".img-card")
const showMore = document.querySelector(".show-more-button")

let page = 2;

async function fetchAndSetImage(inputData) {
  try {
    const res = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`)
    if (!res.ok) console.log("responce isnt ok")
    const data = await res.json()
    const results = data.results
    if (page === 1) searchResult.innerHTML = ""

    results.map((result) => {
      const imageWrapper = document.createElement("div")
      imageWrapper.classList.add("img-card")
      const image = document.createElement("img")
      image.src = result.urls.small;
      image.alt = result.alt_description;
      const imageLink = document.createElement("a")
      imageLink.href = result.links.html
      imageLink.target = "blank"
      imageLink.textContent = result.alt_description

      imageWrapper.appendChild(image)
      imageWrapper.appendChild(imageLink)
      searchResult.appendChild(imageWrapper)
    })

    if (page > 1) {
      showMore.style.display = block;
    }

  } catch (error) {
    console.log(error)
  }
}


form.addEventListener("submit", (e) => {
  e.preventDefault()
  page = 1;
  fetchAndSetImage(searchInput.value)
})

