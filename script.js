const menu=document.querySelector(".menu"),links=document.querySelector(".nav-links");
menu?.addEventListener("click",()=>links.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));
document.querySelectorAll("a[href^='#']").forEach(a=>a.addEventListener("click",()=>links?.classList.remove("open")));
