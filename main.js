const img = document.querySelector("#img");
const text = document.querySelector("#text");

img.addEventListener("click", Response);

function Response () {
    setTimeout (() => {text.innerHtml = "dssdsdssdsdasads"}, 2000);
}
    