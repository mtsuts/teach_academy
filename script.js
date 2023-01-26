const popup = document.querySelector(".popup")
const closeIcon = document.querySelector(".icon")
function signUp() {
    if(!popup.classList.contains("popup-show")){
    popup.classList.remove("popup-close")
    popup.classList.add("popup-show")
}
}
function closePopup() {
    if(popup.classList.contains("popup-show")){
        popup.classList.remove("popup-show")
        popup.classList.add("popup-close")
    }
}



