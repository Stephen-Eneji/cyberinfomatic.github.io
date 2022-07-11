/* SEARCH BUTTON ACTIVE STATE */
let searchButton = document.getElementById('search-blog')

searchButton.addEventListener('click', function(e){
    e.target.style.opacity = "1";
})


//TOOGLE CHANGE//

/*CUSTOMIZED FOR BLOG*/
let rightSectionBlog = document.getElementById("right-section-blog")
let leftSectionBlog = document.getElementById("left-section-blog")
let leftSectionAnchor = document.getElementById('left-section-blog-li')
let BlogRightsection = document.getElementById('blog-right-section')


function toogleBody() {
    rightSectionBlog.style.backgroundColor = '#111211';
    rightSectionBlog.style.color = 'white';
    
    leftSectionBlog.style.backgroundColor = '#323633';
    leftSectionAnchor.style.color = 'white';

    BlogRightsection.style.backgroundColor = '#403e3a';
    BlogRightsection.style.color = '#e8e7e6';
}

/*CUSTOMIZED FOR PAGE*/
let leftSectionPost1 = document.getElementById('post-main-content')
let leftPost1 = document.getElementById('left-section-post1')
let mainPost1 = document.getElementById('right-section-post1')
let postCode = document.getElementById('post1-code')
let headerTitlePost1 = document.getElementById('headerTitle-post1')
let post1Rightsection = document.getElementById('post1-right-section')

function toogleBodyPost1() {
    leftSectionPost1.style.backgroundColor = '#000';
    leftSectionPost1.style.color = '#e8e7e6';

    leftPost1.style.backgroundColor = '#403e3a';
    leftPost1.style.color = '#e8e7e6';
    
    mainPost1.style.backgroundColor = '#403e3a';
    mainPost1.style.color = '#e8e7e6';

    postCode.style.backgroundColor = '#bfbdb6';
    postCode.style.color = '#000000';
    
    headerTitlePost1.style.backgroundColor = '#403e3a';
    headerTitlePost1.style.color = 'white';

    post1Rightsection.style.backgroundColor = '#403e3a';
    post1Rightsection.style.color = '#e8e7e6';
}


/* MAKE TOOGLE DIV ACT LIKE A TOOGLE */