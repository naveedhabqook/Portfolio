const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav nav');

if(menu){
  menu.addEventListener('click',()=>{
    nav.style.display=nav.style.display==='flex'?'none':'flex';
    nav.style.position='absolute';
    nav.style.top='70px';
    nav.style.right='6%';
    nav.style.flexDirection='column';
    nav.style.background='#0d1016';
    nav.style.padding='18px';
    nav.style.border='1px solid #202632';
    nav.style.borderRadius='10px';
  });
}

const reveals=document.querySelectorAll('.reveal');
const observer=new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.12});

reveals.forEach((el)=>observer.observe(el));

const progress=document.querySelector('.scroll-progress');
window.addEventListener('scroll',()=>{
  const max=document.documentElement.scrollHeight-window.innerHeight;
  const amount=max>0?(window.scrollY/max)*100:0;
  progress.style.width=`${amount}%`;
},{passive:true});
