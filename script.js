var p1b=document.querySelector("#p1");
var p2b=document.querySelector("#p2");
var p1d=document.querySelector("#p1d");
var p2d=document.querySelector("#p2d");
var rb=document.querySelector("#reset");
var p1s=0;
var p2s=0;
p1b.addEventListener("click",function(){
p1s++;
p1d.innerHTML=p1s;
});
p2b.addEventListener("click",function(){
p2s++;
p2d.innerHTML=p2s;
});
rb.addEventListener("click",function(){
p1s=0;
p2s=0;
p1d.innerHTML=p1s;
p2d.innerHTML=p2s;
});
