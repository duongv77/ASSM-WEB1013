

var windowElement = document.querySelector('#window')
var openElement = document.querySelector('#open-window-post-input')
openElement.onclick = ()=>{
    windowElement.classList = '';
}
var outElement = document.querySelector('.icon-out')
outElement.onclick = (e) =>{
    e.preventDefault();
    windowElement.classList = 'window-back';
}
var lockElement = document.querySelector('#lock')
lockElement.onclick = (e) =>{
    e.preventDefault();
    windowElement.classList = 'window-back';
}

var btnmassageElement = document.querySelector('#btn-message')
var messageElement = document.querySelector('#message')
btnmassageElement.onclick = (e) =>{
    e.preventDefault();
    messageElement.classList = '';
}
var outmessageElement = document.querySelector('#out-message')
outmessageElement.onclick = (e) =>{
    e.preventDefault();
    messageElement.classList = 'message-display';
}
setTimeout(() => {
    messageElement.classList = '';
}, 4500);

var icondowElement = document.querySelector('#icon-down')
var messagesmallElement = document.querySelector('#message-small')
var iconxElement = document.getElementById('icon-x')
icondowElement.onclick = () =>{
    iconxElement.classList = null
    //messagesmallElement.classList ='message-small'
    iconxElement.classList = 'icon-message-output-x'
    
}
