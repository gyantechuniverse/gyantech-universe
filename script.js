function toggleMenu(){document.getElementById("mainNav").classList.toggle("show");}
document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>document.getElementById("mainNav").classList.remove("show")));
