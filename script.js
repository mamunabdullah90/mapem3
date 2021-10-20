const back = document.getElementById('back');
function randomColor(){
    return Math.floor(Math.random() * 255);
}
butt.addEventListener('click', () =>{
back.style.backgroundColor = 'rgba('+randomColor()+','+randomColor()+','+randomColor()+')'
})