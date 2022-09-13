const img = document.querySelector("#img");

img.addEventListener("click", reveal);

function reveal() {
    let hidden = document.getElementById('hidden');
    if (hidden.style.display == "none") {
      hidden.style.display = "block"
    } else {
      hidden.style.display = "none"
    }
  }