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
        postElement.classList = null
}
reviewElement.onmouseleave = function(e){
        reviewElement.classList = null
        postElement.classList = 'select'
}

albumElement.onmouseenter = function(e){
        albumElement.classList = 'select'
        postElement.classList = null
}
albumElement.onmouseleave = function(e){
        albumElement.classList = null
        postElement.classList = 'select'
}

contactElement.onmouseenter = function(e){
        contactElement.classList = 'select'
        postElement.classList = null
}
contactElement.onmouseleave = function(e){
        contactElement.classList = null
        postElement.classList = 'select'
}

questionElement.onmouseenter = function(e){
        questionElement.classList = 'select'
        postElement.classList = null
}
questionElement.onmouseleave = function(e){
        questionElement.classList = null
        postElement.classList = 'select'
}

var xemtiepElement = document.querySelector('#next');
var anbotElement = document.getElementById('next2');
var textElement = document.getElementById('hidden-text')
xemtiepElement.onclick = function(e){
        e.preventDefault();
        xemtiepElement.classList  = 'block';
        textElement.classList = null;
}
anbotElement.onclick = function(e){
        e.preventDefault();
        xemtiepElement.classList  =null ;
        textElement.classList = 'block';
}

var xemtiepElement2 = document.querySelector('#next3');
var anbotElement2 = document.getElementById('next4');
var textElement2 = document.getElementById('hidden-text2')
xemtiepElement2.onclick = function(e){
        e.preventDefault();
        xemtiepElement2.classList  = 'block';
        textElement2.classList = null;
}
anbotElement2.onclick = function(e){
        e.preventDefault();
        xemtiepElement2.classList  =null ;
        textElement2.classList = 'block';
}

var xemtiepElement3 = document.querySelector('#next5');
var anbotElement3 = document.getElementById('next6');
var textElement3 = document.getElementById('hidden-text3')
xemtiepElement3.onclick = function(e){
        e.preventDefault();
        xemtiepElement3.classList  = 'block';
        textElement3.classList = null;
}
anbotElement3.onclick = function(e){
        e.preventDefault();
        xemtiepElement3.classList  =null ;
        textElement3.classList = 'block';
}

//xử lí nút like
 var likeElement1 = document.querySelector('.like1');
 likeElement1.parentElement.onclick = (e) =>{
         e.preventDefault();
         console.log(likeElement1.innerHTML)
         if(likeElement1.innerHTML.trim()=='Like'){
                likeElement1.innerText = 'DisLike';   
                likeElement1.style = 'color:blue;'
         }else{
                likeElement1.innerText = 'Like'; 
                likeElement1.style = null;
         }
         
 }

 var likeElement2 = document.querySelector('.like2');
 likeElement2.parentElement.onclick = (e) =>{
         e.preventDefault();
         console.log(likeElement2.innerHTML)
         if(likeElement2.innerHTML.trim()=='Like'){
                likeElement2.innerText = 'DisLike';   
                likeElement2.style = 'color:blue;'
         }else{
                likeElement2.innerText = 'Like'; 
                likeElement2.style = null;
         }
         
 }

 var likeElement3 = document.querySelector('.like3');
 likeElement3.parentElement.onclick = (e) =>{
         e.preventDefault();
         console.log(likeElement3.innerHTML)
         if(likeElement3.innerHTML.trim()=='Like'){
                likeElement3.innerText = 'DisLike';   
                likeElement3.style = 'color:blue;'
         }else{
                likeElement3.innerText = 'Like'; 
                likeElement3.style = null;
         }
         
 }

