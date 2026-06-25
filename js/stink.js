const stink=document.getElementById("stink");

document.querySelectorAll(".stink-link")
.forEach(a=>{

a.onclick=e=>{

e.preventDefault();

stink.currentTime=0;

stink.play().catch(()=>{});

setTimeout(()=>location=a.href,250);

};

});