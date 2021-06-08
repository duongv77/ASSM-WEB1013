var hedingElement = document.getElementById('heading')
var i = 1;
setInterval(function () {
        hedingElement.src = './css/img/panel' + i + '.jpg';
        i++;
        if (i == 6) i = 1;
}, 3000)
var postElement = document.getElementById('post')
var reviewElement = document.getElementById('review')
var albumElement = document.getElementById('album')
var contactElement = document.getElementById('contact')
var questionElement = document.getElementById('question')

reviewElement.onmouseenter = function(e){
        reviewElement.classList = 'select'
        albumElement.classList = null
}
reviewElement.onmouseleave = function(e){
        reviewElement.classList = null
        albumElement.classList = 'select'
}

postElement.onmouseenter = function(e){
        postElement.classList = 'select'
        albumElement.classList = null
}
postElement.onmouseleave = function(e){
        postElement.classList = null
        albumElement.classList = 'select'
}

contactElement.onmouseenter = function(e){
        contactElement.classList = 'select'
        albumElement.classList = null
}
contactElement.onmouseleave = function(e){
        contactElement.classList = null
        albumElement.classList = 'select'
}

questionElement.onmouseenter = function(e){
        questionElement.classList = 'select'
        albumElement.classList = null
}
questionElement.onmouseleave = function(e){
        questionElement.classList = null
        albumElement.classList = 'select'
}

var albumpostElement = document.getElementById('album-post')
var albummeElement = document.getElementById('album-me')
var imgpostElement = document.getElementById('img-post')
var imgmeElement = document.getElementById('img-me')

albumpostElement.onclick = (e) =>{
        e.preventDefault()
        albumpostElement.classList = 'album-select'
        albummeElement.classList = null
        imgmeElement.classList = 'window-back'
        imgpostElement.classList = null
}
albummeElement.onclick = (e) =>{
        e.preventDefault()
        albummeElement.classList = 'album-select'
        albumpostElement.classList = null
        imgpostElement.classList = 'window-back'
        imgmeElement.classList = null
}
