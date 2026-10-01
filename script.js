var b=document.querySelector(".menu"),n=document.querySelector("nav");
b.addEventListener("click",function(){var o=n.classList.toggle("open");b.setAttribute("aria-expanded",o)});
var f=document.getElementById("f");
if(f)f.addEventListener("submit",function(e){e.preventDefault();var s=document.getElementById("s");
if(f.action.indexOf("YOUR_FORM_ID")>-1){var d=new FormData(f),m=document.querySelector('a[href^="mailto:"]').getAttribute("href").slice(7);
location.href="mailto:"+m+"?subject="+encodeURIComponent("Project enquiry: "+d.get("type"))+"&body="+encodeURIComponent("Name: "+d.get("name")+"\nEmail: "+d.get("email")+"\nCountry: "+d.get("country")+"\n\n"+d.get("message"));
s.textContent="Opening your email app. You can also message us on WhatsApp.";return}
s.textContent="Sending...";
fetch(f.action,{method:"POST",body:new FormData(f),headers:{Accept:"application/json"}}).then(function(r){
if(r.ok){f.reset();s.textContent="Thanks. We received your message and will reply within one business day."}else{throw 0}}).catch(function(){
s.textContent="Could not send. Please email us or use WhatsApp instead."})});
var o=document.getElementById("o");
if(o){var g=function(i){return Math.max(0,parseFloat(document.getElementById(i).value)||0)},u=function(){
var h=g("t")*g("m")/60*52/12*Math.min(g("s"),100)/100,v=h*12*g("c");
o.textContent="About "+Math.round(h).toLocaleString()+" hours back each month, worth roughly $"+Math.round(v).toLocaleString()+" a year."};
document.querySelectorAll(".calc input").forEach(function(i){i.addEventListener("input",u)});u()}

(function(){var rm=matchMedia("(prefers-reduced-motion:reduce)").matches,bar=document.getElementById("bar");
addEventListener("scroll",function(){var h=document.documentElement;bar.style.width=h.scrollTop/(h.scrollHeight-h.clientHeight||1)*100+"%"},{passive:true});
document.addEventListener("pointermove",function(e){var t=e.target.closest?e.target:null;if(!t)return;var c=t.closest(".card"),h=t.closest(".hero");
if(c){var r=c.getBoundingClientRect();c.style.setProperty("--mx",e.clientX-r.left+"px");c.style.setProperty("--my",e.clientY-r.top+"px")}
if(h){var q=h.getBoundingClientRect();h.style.setProperty("--hx",e.clientX-q.left+"px");h.style.setProperty("--hy",e.clientY-q.top+"px")}});
if(!rm&&"IntersectionObserver" in window){var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}})},{threshold:.12});
document.querySelectorAll(".card,.band,.wrap>h1,.wrap>h2,.tl li,.mock,details").forEach(function(el,i){if(el.getBoundingClientRect().top>innerHeight){el.classList.add("rv");el.style.transitionDelay=i%3*90+"ms";io.observe(el)}})}
document.querySelectorAll("[data-n]").forEach(function(el){var n=+el.dataset.n;if(rm||!("IntersectionObserver" in window))return;el.textContent="0";
new IntersectionObserver(function(es,ob){if(es[0].isIntersecting){ob.disconnect();var t0=performance.now();(function f(t){var p=Math.min((t-t0)/1200,1);el.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(t0)}}).observe(el)});
var w=document.getElementById("rot");
if(w&&!rm){var L=["business websites","AI automations","brand experiences","new ventures"],i=0;setInterval(function(){w.classList.add("out");setTimeout(function(){i=(i+1)%L.length;w.textContent=L[i];w.classList.remove("out")},350)},2400)}})();

(function(){var f=document.getElementById("f");if(f&&f.querySelector("[data-s]")){
var P=[].slice.call(f.querySelectorAll("[data-s]")),D=f.querySelectorAll(".dots li"),i=0,nx=f.querySelector("#nx"),bk=f.querySelector("#bk"),sb=f.querySelector("#sb"),wb=f.querySelector("#wb");
function show(n){i=n;P.forEach(function(p,k){p.hidden=k!=n});D.forEach(function(d,k){d.className=k<=n?"on":""});bk.hidden=n==0;nx.hidden=n==2;sb.hidden=wb.hidden=n!=2}
function ok(){var r=true;P[i].querySelectorAll("input,select,textarea").forEach(function(x){if(r&&!x.checkValidity()){x.reportValidity();r=false}});return r}
nx.onclick=function(){if(ok())show(i+1)};bk.onclick=function(){show(i-1)};
var q=new URLSearchParams(location.search).get("type");if(q){var r=f.querySelector('input[name=type][value="'+q+'"]');if(r)r.checked=true}
var B={"Under $500":0,"Not sure yet":1,"$500 to $2,000":1,"$2,000 to $5,000":2,"$5,000+":3},T={"As soon as possible":2,"Within a month":1};
function info(){var d=new FormData(f),p=(B[d.get("budget")]||0)+(T[d.get("timeline")]||0)>=3?"High":"Standard";return {d:d,p:p,h:"[Brief] "+d.get("type")+" | "+d.get("budget")+" | "+d.get("timeline")+" | Priority: "+p}}
f.addEventListener("submit",function(){var m=f.elements.message;if(m.value.indexOf("[Brief]")!==0)m.value=info().h+"\n\n"+m.value},true);
wb.onclick=function(){if(!f.reportValidity())return;var x=info(),d=x.d;window.open("https://wa.me/2348138677200?text="+encodeURIComponent(x.h+"\nName: "+d.get("name")+"\nEmail: "+d.get("email")+"\nCountry: "+d.get("country")+"\n\n"+d.get("message")),"_blank","noopener")};show(0)}
var c=document.getElementById("cp");document.querySelectorAll("[data-hex]").forEach(function(b){b.onclick=function(){var h=b.dataset.hex;if(navigator.clipboard)navigator.clipboard.writeText(h);c.textContent="Copied "+h}})})();
