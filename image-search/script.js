const accessKey = "zk9pl5jIoVXMC8Lq6fjn3wTOaFxc3kSA-65O6_AFUfk"

const form = document.querySelector("form")
const searchInput = document.querySelector(".search-input")
const searchResult = document.querySelector(".img-card")
const showMore = document.querySelector(".show-more-button")

let page = 1;

async function fetchImage(inputData) {
  const res = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`)
  if (!res.ok) console.log("responce isnt ok")
  const data = await res.json()
  console.log(data.results)
}


form.addEventListener("submit", (e) => {
  e.preventDefault()
  fetchImage(searchInput.value)
})