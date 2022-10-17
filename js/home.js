var value=1;
showImage(value);
function slide(e){
    showImage(value=e);
}
function side_slide(e){
    showImage(value+=e);
}
function showImage(e){
    var i;
    const img=document.querySelectorAll('.image');
    const sliders=document.querySelectorAll('.btn-slide span');
    if(e > img.length){
        value=1;
    }
    if(e<1){
        value=img.length;
    }
    for(i=0;i<img.length;i++){
        img[i].style.display="none";
    }
    for(i=0;i<sliders.length;i++){
        sliders[i].style.background="rgba(255,255,255,0.2)";
    }
    img[value-1].style.display="block";
    sliders[value-1].style.background="white";
    


}
const buttons=document.querySelectorAll('a,button');
buttons.forEach(btn=>{
    btn.addEventListener('click',function(e){
        let x=e.clientX-e.target.offsetLeft;
        let y=e.clientY-e.target.offsetTop;
        let ripples=document.createElement('h5');
        ripples.style.left=x+'px';
        ripples.style.top=y+'px';
        this.appendChild(ripples);
    })
})