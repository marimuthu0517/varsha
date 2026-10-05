const loader=document.getElementById("loader");
window.addEventListener("load",()=>setTimeout(()=>loader.classList.add("hide"),1100));

window.go=function(id){document.getElementById(id).scrollIntoView({behavior:"smooth"})}

const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(x=>obs.observe(x));

/* floating stars */
const particles=document.getElementById("particles");
for(let i=0;i<90;i++){
  const p=document.createElement("i");
  p.style.cssText=`position:fixed;left:${Math.random()*100}vw;top:${Math.random()*100}vh;width:${Math.random()*2+1}px;height:${Math.random()*2+1}px;border-radius:50%;background:rgba(255,210,235,${Math.random()*.65+.1});pointer-events:none;animation:tw ${2+Math.random()*5}s ease-in-out ${Math.random()*4}s infinite;z-index:-1`;
  particles.appendChild(p);
}
const st=document.createElement("style");st.textContent="@keyframes tw{0%,100%{opacity:.15;transform:scale(.6)}50%{opacity:1;transform:scale(1.6)}}";document.head.appendChild(st);

/* hearts follow clicks */
document.addEventListener("click",e=>{
  if(e.target.closest("button")||e.target.closest("a")) return;
  const h=document.createElement("span");h.className="float-heart";h.textContent=["♡","♥","✦","⋆"][Math.floor(Math.random()*4)];
  h.style.left=e.clientX+"px";h.style.top=e.clientY+"px";h.style.setProperty("--x",(Math.random()*100-50)+"px");
  document.body.appendChild(h);setTimeout(()=>h.remove(),3000);
});

/* photo lightbox */
const lb=document.createElement("div");lb.className="lightbox";lb.innerHTML='<span class="closebox">×</span><img>';
document.body.appendChild(lb);const lbimg=lb.querySelector("img");
document.querySelectorAll(".photo img").forEach(img=>img.addEventListener("click",()=>{
  lbimg.src=img.src;lb.classList.add("open");
}));
lb.addEventListener("click",e=>{if(e.target===lb||e.target.classList.contains("closebox"))lb.classList.remove("open")});

/* envelope + typewriter letter */
const envelope=document.getElementById("envelope"), paper=document.getElementById("letterPaper"), typed=document.getElementById("typedLetter");
const letter=`I wanted to make you something instead of just saying “Happy Birthday.”

Because sometimes a simple message doesn't feel like enough.

Varshaa, I hope you know how much the little things matter. The random laughs. The silly moments. The pictures that make no sense to anyone else. The conversations that stay in your mind after they end.

Those little moments become memories before we even realize it.

So on your birthday, I hope you get all the happiness you deserve. I hope you keep chasing the things that make you excited, keep laughing at the things that are silly, and keep being the same wonderful person you are.

You are allowed to dream big. You are allowed to take your time. You are allowed to become whoever you want to become.

And if this little website makes you smile even once, then every animation was worth making.

Happy Birthday, Varshaa. ♡`;

let typedOnce=false;
envelope.addEventListener("click",()=>{
  envelope.classList.toggle("open");
  if(envelope.classList.contains("open")){
    paper.classList.add("open");
    if(!typedOnce){
      typedOnce=true; let i=0;
      const type=()=>{if(i<letter.length){typed.textContent+=letter[i++];setTimeout(type,20)}};
      setTimeout(type,450);
    }
    setTimeout(()=>paper.scrollIntoView({behavior:"smooth",block:"center"}),150);
  }
});

/* final wish */
const finalBtn=document.getElementById("finalBtn"), wish=document.getElementById("wishReveal");
finalBtn.addEventListener("click",()=>{
  wish.classList.toggle("open");
  finalBtn.innerHTML=wish.classList.contains("open")?"WISH UNLOCKED ♡":"MAKE A WISH ✦";
  if(wish.classList.contains("open")){
    for(let i=0;i<28;i++) setTimeout(()=>{
      const h=document.createElement("span");h.className="float-heart";h.textContent="♡";
      h.style.left=(window.innerWidth/2+(Math.random()*300-150))+"px";h.style.top=(window.innerHeight*.58)+"px";h.style.setProperty("--x",(Math.random()*180-90)+"px");
      document.body.appendChild(h);setTimeout(()=>h.remove(),3000);
    },i*70);
  }
});

/* music button — intentionally doesn't pretend to play a song */
const sound=document.getElementById("soundBtn");
sound.addEventListener("click",()=>{
  sound.textContent=sound.textContent==="♡"?"♪":"♡";
  sound.title="Add your own music file in script.js if you want background music.";
});
