function toggleTheme() {
  document.body.classList.toggle("light");
}

const links=document.querySelectorAll(".sidebar nav a")

links.forEach(link=>{
link.addEventListener("click",e=>{
links.forEach(l=>l.classList.remove("active"))
e.target.classList.add("active")
})
})