

const shareMenu = document.querySelector(".share");
const shareMenu2 = document.querySelector(".share2");
const shareIcons = document.querySelector(".hide");
const pictureImage = document.querySelector(".picture");

shareMenu.addEventListener("click", () => {
    shareIcons.classList.toggle("hidden");
    shareMenu2.style.backgroundColor = "hsl(212, 23%, 69%)";
    pictureImage.style.color = "white";
    
})

shareMenu2.addEventListener("click", () => {
    shareIcons.classList.add("hidden");
})