const pictureOfMe = document.querySelector("#pic");
const sideNav = document.querySelector("#sidenav");
const text = document.querySelector("#test");

//sections
const about = document.querySelector("#about");
const resume = document.querySelector("#resume");
const projects = document.querySelector("#projects");
const interests = document.querySelector("#interests");
const socials = document.querySelector("#social-media");
const contact = document.querySelector("#contact");
const home = document.querySelector("#home");

const content = document.querySelector("#content");

let clickCount = 0;

//function for visibility sidebar
const sideNavVisible = (visibility) => {
    sideNav.style.visibility = visibility;
}

//function remove underlines
const removeClassUnderline = () => {
    let sections = document.querySelectorAll(".sections");
    sections.forEach((section) => {
        section.classList.remove("underline");
    })
}

//function slowed down visibility
const appearanceDelay = (target, time, fromValue, toValue) => {
    gsap.fromTo(target, time, {autoAlpha: fromValue}, {autoAlpha: toValue});
}

//picture rotation
const rotatePicture = () => {
    gsap.fromTo("#me", 2, {rotation: 0}, {rotation: 360});
}

//return to home page
const homePage = () => {
    let x = (window.innerWidth)/2;
    let y = (window.innerHeight)/2;

    appearanceDelay("#content", 2, 1, 0);

    setTimeout(() => {
        appearanceDelay("#sidenav", 2, 1, 0);
    }, 750);

    setTimeout(() => {
        gsap.to("#me", 3, {margin:`${y}px 0 0 ${x}px`});
        gsap.to("#me", 3, {width:'250'}); 
        gsap.to("#me", 3, {height:'250'});
        }, 1500);
    clickCount = 0;
}


pictureOfMe.addEventListener("click", () => {
    if (clickCount == 0){
        gsap.to("#me", 3, {margin:'50 0 0 50'});
        gsap.to("#me", 3, {width:'125'}); 
        gsap.to("#me", 3, {height:'125'}); 
        //sidebar animation
        setTimeout(() => {
            appearanceDelay("#sidenav", 3, 0, 1);}, 3000);
        clickCount++;
    }
    else{
        homePage(); 
    }
})

about.addEventListener("click", () => {
    rotatePicture();
    removeClassUnderline();
    about.classList.add("underline");
    //werkt niet?
    appearanceDelay("#content", 2, 0, 1);
    content.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

resume.addEventListener("click", () => {
    rotatePicture();
    removeClassUnderline();
    resume.classList.add("underline");
    appearanceDelay("#content", 2, 0, 1);
    content.innerHTML = "<img src='./images/me1.png'>";
})

projects.addEventListener("click", () => {
    rotatePicture();
    removeClassUnderline();
    projects.classList.add("underline");
    appearanceDelay("#content", 2, 0, 1);
    content.innerHTML = 
    "<img src='./images/github.png'><br><a href='https://github.com/chadriae'>Github profile</a>";
})

interests.addEventListener("click", () => {
    rotatePicture();
    removeClassUnderline();
    interests.classList.add("underline");
    appearanceDelay("#content", 2, 0, 1);
    content.innerHTML = 
    '<iframe src="https://open.spotify.com/embed/playlist/1nIG9kNjrjcMQlCDgxfhlt" width="300" height="900" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
})


home.addEventListener("click", () => {
   homePage(); 
   removeClassUnderline();
})