const toogleButtonContainer = document.getElementById('tooglebuttoncontainer-blog')

const toogleSwitch = document.getElementById('toogleswitch-blog')

toogleButtonContainer.addEventListener('click', function(event) {
    event.target.style.backgroundColor = "red";
    toogleSwitch.target.style.left = '190px';
});

toogleSwitch.addEventListener('click', function(event) {
    event.target.style.left = '190px';
});




/* SEARCH BUTTON ACTIVE STATE */

let searchButton = document.getElementById('search-blog')

searchButton.addEventListener('click', function(e){
    e.target.style.opacity = "1";
})