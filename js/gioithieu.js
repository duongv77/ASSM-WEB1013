var hedingElement = document.getElementById("heading");
var i = 1;
setInterval(function () {
    hedingElement.src = "./css/img/panel" + i + ".jpg";
    i++;
    if (i == 6) i = 1;
}, 3000);
var postElement = document.getElementById("post");
var reviewElement = document.getElementById("review");
var albumElement = document.getElementById("album");
var contactElement = document.getElementById("contact");
var questionElement = document.getElementById("question");

postElement.onmouseenter = function (e) {
    postElement.classList = "select";
    reviewElement.classList = null;
};
postElement.onmouseleave = function (e) {
    postElement.classList = null;
    reviewElement.classList = "select";
};

albumElement.onmouseenter = function (e) {
    albumElement.classList = "select";
    reviewElement.classList = null;
};
albumElement.onmouseleave = function (e) {
    albumElement.classList = null;
    reviewElement.classList = "select";
};

contactElement.onmouseenter = function (e) {
    contactElement.classList = "select";
    reviewElement.classList = null;
};
contactElement.onmouseleave = function (e) {
    contactElement.classList = null;
    reviewElement.classList = "select";
};

questionElement.onmouseenter = function (e) {
    questionElement.classList = "select";
    reviewElement.classList = null;
};
questionElement.onmouseleave = function (e) {
    questionElement.classList = null;
    reviewElement.classList = "select";
};

var review1Element = document.getElementById('review1')
var review2Element = document.getElementById('review2')
var review3Element = document.getElementById('review3')
var review4Element = document.getElementById('review4')
var review5Element = document.getElementById('review5')
var review6Element = document.getElementById('review6')
var review7Element = document.getElementById('review7')

var conten1Element = document.getElementById('conten1')
var conten2Element = document.getElementById('conten2')
var conten3Element = document.getElementById('conten3')
var conten4Element = document.getElementById('conten4')
var conten5Element = document.getElementById('conten5')
var conten6Element = document.getElementById('conten6')
var conten7Element = document.getElementById('conten7')

review2Element.onclick = (e)=>{
    e.preventDefault();
    review2Element.classList = 'review-bodyleft';
    
    conten2Element.classList = null
    conten1Element.classList = 'contenblock'
    conten3Element.classList = 'contenblock'
    conten4Element.classList = 'contenblock'
    conten5Element.classList = 'contenblock'
    conten6Element.classList = 'contenblock'
    conten7Element.classList = 'contenblock'

    review1Element.classList = null;
    review7Element.classList = null;
    review3Element.classList = null;
    review4Element.classList = null;
    review5Element.classList = null;
    review6Element.classList = null;
}
review1Element.onclick = (e)=>{
    e.preventDefault();

    conten2Element.classList = 'contenblock'
    conten1Element.classList = null
    conten3Element.classList = 'contenblock'
    conten4Element.classList = 'contenblock'
    conten5Element.classList = 'contenblock'
    conten6Element.classList = 'contenblock'
    conten7Element.classList = 'contenblock'

    review1Element.classList = 'review-bodyleft';
    review2Element.classList = null;
    review3Element.classList = null;
    review4Element.classList = null;
    review5Element.classList = null;
    review6Element.classList = null;
    review7Element.classList = null;
}
review3Element.onclick = (e)=>{
    e.preventDefault();

    conten3Element.classList = null
    conten2Element.classList = 'contenblock'
    conten1Element.classList = 'contenblock'
    conten4Element.classList = 'contenblock'
    conten5Element.classList = 'contenblock'
    conten6Element.classList = 'contenblock'
    conten7Element.classList = 'contenblock'

    review3Element.classList = 'review-bodyleft';
    review2Element.classList = null;
    review1Element.classList = null;
    review4Element.classList = null;
    review5Element.classList = null;
    review6Element.classList = null;
    review7Element.classList = null;
}
review4Element.onclick = (e)=>{
    e.preventDefault();
    review4Element.classList = 'review-bodyleft';
    review2Element.classList = null;
    review3Element.classList = null;
    review1Element.classList = null;
    review5Element.classList = null;
    review6Element.classList = null;
    review7Element.classList = null;

    conten4Element.classList = null
    conten2Element.classList = 'contenblock'
    conten1Element.classList = 'contenblock'
    conten3Element.classList = 'contenblock'
    conten5Element.classList = 'contenblock'
    conten6Element.classList = 'contenblock'
    conten7Element.classList = 'contenblock'
}
review5Element.onclick = (e)=>{
    e.preventDefault();
    review5Element.classList = 'review-bodyleft';
    review2Element.classList = null;
    review3Element.classList = null;
    review4Element.classList = null;
    review1Element.classList = null;
    review6Element.classList = null;
    review7Element.classList = null;

    conten5Element.classList = null
    conten2Element.classList = 'contenblock'
    conten1Element.classList = 'contenblock'
    conten3Element.classList = 'contenblock'
    conten4Element.classList = 'contenblock'
    conten6Element.classList = 'contenblock'
    conten7Element.classList = 'contenblock'
}
review6Element.onclick = (e)=>{
    e.preventDefault();
    review6Element.classList = 'review-bodyleft';
    review2Element.classList = null;
    review3Element.classList = null;
    review4Element.classList = null;
    review5Element.classList = null;
    review1Element.classList = null;
    review7Element.classList = null;

    conten6Element.classList = null
    conten2Element.classList = 'contenblock'
    conten1Element.classList = 'contenblock'
    conten3Element.classList = 'contenblock'
    conten4Element.classList = 'contenblock'
    conten5Element.classList = 'contenblock'
    conten7Element.classList = 'contenblock'
}
review7Element.onclick = (e)=>{
    e.preventDefault();
    review7Element.classList = 'review-bodyleft';
    review2Element.classList = null;
    review3Element.classList = null;
    review4Element.classList = null;
    review5Element.classList = null;
    review6Element.classList = null;
    review1Element.classList = null;

    conten7Element.classList = null
    conten2Element.classList = 'contenblock'
    conten1Element.classList = 'contenblock'
    conten3Element.classList = 'contenblock'
    conten4Element.classList = 'contenblock'
    conten5Element.classList = 'contenblock'
    conten6Element.classList = 'contenblock'
}