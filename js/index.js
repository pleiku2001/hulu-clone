const modal = document.querySelector('.modal');
const btn = document.querySelector('.btn-nav');
const close = document.querySelector('.close');

btn.addEventListener('click',()=>{
    modal.style.display='block';
})
close.addEventListener('click',()=>{
    modal.style.display='none';
})


window.addEventListener('click', (e)=>{
    if(e.target == modal ){
        modal.style.display='none';
    }
})

