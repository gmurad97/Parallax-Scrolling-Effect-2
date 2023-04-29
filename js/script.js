let imgArr = document.querySelectorAll(".pw-img");

window.addEventListener("scroll", () => {
    let valueScrollY = window.scrollY / 4.5;
    imgArr[4].style.top = valueScrollY * -1.5 + "px";
    imgArr[4].style.left = valueScrollY * 1.5 + "px";
    imgArr[2].style.left = valueScrollY * 1.5 + "px";
    imgArr[3].style.left = valueScrollY * -1.5 + "px";
    imgArr[0].style.top = valueScrollY * 1 + "px";
});