const btnEle = document.querySelector(".btn")
const colorEle = document.querySelector(".color")
const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  colorEle.innerHTML = "#" + randomColor;
}

btnEle.addEventListener("click", setBg);
setBg();

// copying to clipboard
const copyText = async () => {
  try {
    await navigator.clipboard.writeText(colorEle.innerText)
    alert("color copied")
  } catch (error) {
    console.error("Failed to copy text: ", error)
  }
}

colorEle.addEventListener("click", copyText)