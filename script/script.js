import anime from '../animejs/lib/anime.es.js';


const pictureOfMe = document.querySelector("#me");

// function on first click to move picture
// const moveTopLeft = () => {
//     pictureOfMe.style.margin = "50px 0 0 50px"
// }


pictureOfMe.addEventListener("click", () => {   
    // animation to move to top left
    anime ({
        targets: pictureOfMe, 
        translateX: -450, 
        translateY: -375,
        duration: 2500
    })
})