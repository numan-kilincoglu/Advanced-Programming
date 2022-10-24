"use strict";
const NAVBAR = 
`<link href="https://maeyler.github.io/JS/navbar.css" rel="stylesheet">
<ul>
    <li class=Course>Course
      <div class=menu>
        <a href="/2022/index.html">Home 🏠</a>
        <a href="/2022/Course_outline.html">Outline</a>
        <a href="https://eloquentjavascript.net/" target=BLM305>Textbook</a>
        <a href="https://github.com/BLM305/2022" target=BLM305>Repository</a>
      </div>
    </li>
</ul>`

function setNavbar() {
  let nav = document.createElement('nav')
  nav.innerHTML = NAVBAR
  nav.id = 'navbar'
  document.body.append(nav)
  nav.querySelectorAll("li").forEach(li => {
    let div = li.firstElementChild
    li.onmouseenter = () => {
      div.style.display = 'block'
      let w = div.offsetWidth - li.offsetWidth
      let x = li.offsetLeft - w/2
      let m = nav.offsetWidth - div.offsetWidth
      div.style.left = Math.min(Math.max(0, x), m)+'px'
    }
    li.onmouseleave = () => { div.style.display = '' }
  })
}
setNavbar()
onload = () => {
  let f = document.querySelector('div.footer')
  if (!f) return
  f.remove(); console.log('remove footer')
}
