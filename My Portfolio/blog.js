/* SEARCH BUTTON ACTIVE STATE */
let searchButton = document.getElementById('search-blog')

searchButton.addEventListener('click', function(e){
    e.target.style.opacity = "1";
})

// /* Reaction Up JS */
// let reactionUp = document.getElementById('r1-blog')

// reactionUp.addEventListener('click', function(e) {
//     e.target.style.backgroundColor = "green";
//     e.target.style.color = "white";
// })


// /* Reaction Down JS */
// let reactionDown = document.getElementById('r2-blog')

// reactionDown.addEventListener('click', function(e) {
//     e.target.style.backgroundColor = "red";
//     e.target.style.color = "white";

// })


/* THEME CHANGE ON CLICK */

const backChange = document.querySelector('post-main-content').addEventListener("click", function(e){
    e.backChange.style.background = "black"
})
