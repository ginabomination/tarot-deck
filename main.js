
// hide and reveal text

const img = document.querySelector("#img");
img.addEventListener("click", reveal);

function reveal1() {
    let hidden1 = document.getElementById('hidden1');
    if (hidden1.style.display == "none") {
      hidden1.style.display = "block"
    } else {
      hidden1.style.display = "none"
    }
  }

  function reveal2() {
    let hidden2 = document.getElementById('hidden2');
    if (hidden2.style.display == "none") {
      hidden2.style.display = "block"
    } else {
      hidden2.style.display = "none"
    }
  }

  function reveal3() {
    let hidden3 = document.getElementById('hidden3');
    if (hidden3.style.display == "none") {
      hidden3.style.display = "block"
    } else {
      hidden3.style.display = "none"
    }
  }
  