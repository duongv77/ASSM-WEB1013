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
        contactElement.classList = null
}
reviewElement.onmouseleave = function(e){
        reviewElement.classList = null
        contactElement.classList = 'select'
}

postElement.onmouseenter = function(e){
        postElement.classList = 'select'
        contactElement.classList = null
}
postElement.onmouseleave = function(e){
        postElement.classList = null
        contactElement.classList = 'select'
}

albumElement.onmouseenter = function(e){
    albumElement.classList = 'select'
        contactElement.classList = null
}
albumElement.onmouseleave = function(e){
    albumElement.classList = null
        contactElement.classList = 'select'
}

questionElement.onmouseenter = function(e){
        questionElement.classList = 'select'
        contactElement.classList = null
}
questionElement.onmouseleave = function(e){
        questionElement.classList = null
        contactElement.classList = 'select'
}

