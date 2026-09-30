var b=document.querySelector(".menu"),n=document.querySelector("nav");
b.addEventListener("click",function(){var o=n.classList.toggle("open");b.setAttribute("aria-expanded",o)});
var f=document.getElementById("f");
if(f)f.addEventListener("submit",function(e){e.preventDefault();var s=document.getElementById("s");s.textContent="Sending...";
fetch(f.action,{method:"POST",body:new FormData(f),headers:{Accept:"application/json"}}).then(function(r){
if(r.ok){f.reset();s.textContent="Thanks. We received your message and will reply within one business day."}else{throw 0}}).catch(function(){
s.textContent="Could not send. Please email us or use WhatsApp instead."})});
