var img=document.querySelector('.slider-items').children;
var nextSlider=document.querySelector('.next');
var prevSlider=document.querySelector('.preveious');
var sidbar=document.querySelector('.sidbar');
var btn=document.querySelector('.btn');
var i =0;
var total = img.length;



nextSlider.onclick = function(){
    next('next');
}
prevSlider.onclick = function(){
    next('prev');
}

function next(direction){
    if(direction == 'next'){
        i++;
       if(i == total){
           i = 0;
       }
       console.log(i);
    }else{
        if(i == 0){
            i = total -1;
        }else{
            i--;
        }
        console.log(i);
    }
    for(let i = 0; i < total; i++){
        img[i].classList.remove('active');
    }
    img[i].classList.add('active');
}  

btn.addEventListener('click',function(){
    sidbar.classList.toggle('active');
})