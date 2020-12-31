const pictureOfMe = document.querySelector("#me");
const sideNav = document.querySelector("#sidenav");
const text = document.querySelector("#test");
const about = document.querySelector("#about");
let clickCount = 0;

const showSidebar = () => {
    sideNav.style.visibility = "visible";
};

const showMe = () => {
    text.style.visibility = "visible";
}

pictureOfMe.addEventListener("click", () => {
    if (clickCount == 0){
    gsap.to("#me", 3, {margin:'50 0 0 50'});
    gsap.to("#me", 3, {width:'125'}); 
    gsap.to("#me", 3, {height:'125'}); 
    setTimeout(() => {showSidebar()}, 3000);
    clickCount++;
    }
    else {

    }
})

about.addEventListener("click", () => {
    showMe();
    about.innerHTML = "<u>About me</u>"
})
