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