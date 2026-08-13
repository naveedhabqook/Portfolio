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
},{threshold:0.12,rootMargin:'0px 0px -40px 0px'});
reveals.forEach((el)=>observer.observe(el));

const progress=document.querySelector('.scroll-progress');
const updateProgress=()=>{
  const max=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width=`${max>0?(window.scrollY/max)*100:0}%`;
};
window.addEventListener('scroll',updateProgress,{passive:true});
updateProgress();

/* Cursor-following card glow */
document.querySelectorAll('.skill-grid article,.project-link').forEach(card=>{
  card.addEventListener('pointermove',(e)=>{
    const r=card.getBoundingClientRect();
    card.style.setProperty('--mx',`${e.clientX-r.left}px`);
    card.style.setProperty('--my',`${e.clientY-r.top}px`);
  });
});

/* Very subtle 3D tilt on desktop project cards */
const finePointer=window.matchMedia('(pointer:fine)').matches;
if(finePointer){
  document.querySelectorAll('.project-link').forEach(card=>{
    card.addEventListener('pointermove',(e)=>{
      const r=card.getBoundingClientRect();
      const x=(e.clientX-r.left)/r.width-.5;
      const y=(e.clientY-r.top)/r.height-.5;
      card.style.transform=`perspective(900px) rotateX(${(-y*2.2).toFixed(2)}deg) rotateY(${(x*2.2).toFixed(2)}deg) translateY(-5px)`;
    });
    card.addEventListener('pointerleave',()=>{
      card.style.transform='';
    });
  });
}

/* Close mobile menu after selecting a section */
nav?.querySelectorAll('a').forEach(link=>{
  link.addEventListener('click',()=>{
    if(window.innerWidth<=700) nav.style.display='none';
  });
});
