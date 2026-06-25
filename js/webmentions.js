const canonical =
document.querySelector('link[rel="canonical"]')?.href;

const ids={
like:"wm-like",
repost:"wm-repost",
reply:"wm-reply",
mention:"wm-mention"
};

if(canonical){

fetch(
"https://webmention.io/api/count?target="+
encodeURIComponent(canonical)
)
.then(r=>r.json())
.then(({type={}})=>{

for(const k in ids){

document.getElementById(ids[k]).textContent=
type[k]||0;

}

});

}
const copy=document.getElementById("copy-link");

copy?.addEventListener("click",async()=>{
  const url=document.querySelector('link[rel="canonical"]')?.href || location.href;

  try{
    await navigator.clipboard.writeText(url);
    copy.title="Copied";
  }catch{
    location.href=url;
  }
});
