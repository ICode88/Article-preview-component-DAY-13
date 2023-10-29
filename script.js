const share = document.querySelector("#share");
const shareicon = document.querySelectorAll(".share-icon");

for (let i = 0; i < shareicon.length; i++) {
    shareicon[i].addEventListener("click", () => {
        share.classList.value == "share slide-out-bottom" ? (share.classList.value = "share slide-top") : (share.classList.value = "share slide-out-bottom");
    });
}