var x=document.getElementsByClassName('accordian')
for( i=0;i<x.length;i++){
    x[i].onclick=function(){
        var d=this.nextElementSibling;
        if(d.style.height){
            d.style.height=null;
        }
        else{
            d.style.height=d.scrollHeight+"Px";
        }
    }
}
const productContainers=[...document.querySelectorAll('.product-container')];
const nxtbtn=[...document.querySelectorAll('.right')];
const prebtn=[...document.querySelectorAll('.left')];
productContainers.forEach((item,i)=>{
    let dimensions=item.getBoundingClientRect();
    let width1=dimensions.width;
    nxtbtn[i].addEventListener('click',()=>{
        item.scrollLeft+=width1;

    })
    prebtn[i].addEventListener('click',()=>{
        item.scrollLeft-=width1;

    })

})
