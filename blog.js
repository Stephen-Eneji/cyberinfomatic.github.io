/* SEARCH BUTTON ACTIVE STATE */
let searchButton = document.getElementById('search-blog')

searchButton.addEventListener('click', function(e){
    e.target.style.opacity = "1";
})


//TOOGLE CHANGE//


let rightSectionBlog = document.getElementById("right-section-blog")
let leftSectionBlog = document.getElementById("left-section-blog")

let leftSectionAnchor = document.getElementById('left-section-blog-li')


function toogleBody() {
    rightSectionBlog.style.backgroundColor = '#111211';
    rightSectionBlog.style.color = 'white';
    
    leftSectionBlog.style.backgroundColor = '#323633';
    leftSectionAnchor.style.color = 'white';
}