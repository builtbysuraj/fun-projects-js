const countEle = document.querySelector(".count")
const incrementEle = document.querySelector(".increment")
const resetEle = document.querySelector(".reset")
const decrementEle = document.querySelector(".decrement")

let count = 0;

incrementEle.addEventListener("click", () => {
  countEle.innerHTML = ++count
})

resetEle.addEventListener("click", () => {
  countEle.innerHTML = 0;
})

decrementEle.addEventListener("click", () => {
  countEle.innerHTML > 0 ? countEle.innerHTML = --count : ""
})