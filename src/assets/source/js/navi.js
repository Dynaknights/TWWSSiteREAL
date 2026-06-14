class Header extends HTMLElement {
constructor() {
super();
}

connectedCallback() {
this.innerHTML = `
<style>
.sidenav {
height: 100%; /* Full-height: remove this if you want "auto" height */
width: 230px; /* Set the width of the sidebar */
position: fixed; /* Fixed Sidebar (stay in place on scroll) */
z-index: 1; /* Stay on top */
top: 0; /* Stay at the top */
left: 0;
background-color: #08080f;
overflow-x: hidden; /* Disable horizontal scroll */
padding-top: 20px;
border-bottom: none;
text-align: center; /* Center text horizontally */

border-right: 5px solid #08080f;
background-image:
  linear-gradient(45deg, #181824 25%, transparent 25%, 
    transparent 75%, #181824 75%, #181824),
  linear-gradient(45deg, #181824 25%, transparent 25%, 
    transparent 75%, #181824 75%, #181824);
background-size: 60px 60px;
background-position: 0 0, 30px 30px;
}

.sidenav a {
color: antiquewhite;
padding: 10px 10px 10px 10px;
margin-bottom:20%;
margin: 10px 10px 10px 10px;
text-decoration: none;
display: block;
border: 2px black solid;
border-top-left-radius: 10px;
border-bottom-right-radius: 10px;
background: linear-gradient(to bottom, #3b679e 0%,#2b88d9 50%,#207cca 51%,#7db9e8 100%);
transition: box-shadow .3s;
}

.sidenav a:hover {
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  background: linear-gradient(to bottom, rgba(55,44,117,1) 0%,rgba(132,41,206,1) 50%,rgba(132,41,206,1) 51%,rgba(245,219,255,1) 100%);
  color: antiquewhite;
}
.sidenav a:hover, .sidenav a:focus, .sidenav a:active {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.sidenav p {
padding: 0 20px;
text-decoration: none;
}

.sidenav h2 {
margin-top: 0;
padding: 0 40px;
text-decoration: none;
border-bottom: 0;
text-align: center;
}

@media screen and (max-width: 1290px) {
.sidenav {
height: 40px;
width: 100%; /* Set the width of the sidebar */
position: static;
z-index: 1; /* Stay on top */
overflow-x: scroll;
scrollbar-width: none;
top: 0; /* Stay at the top */
left: 0;
background-color: #08080f;
white-space: nowrap;
padding-top: 10px;
padding-bottom:10px;
align-content: center;
border-bottom: 1px black solid;
border-right: none;
text-align: center; /* Center text horizontally on small screens */
}

.sidenav a {
color: antiquewhite;
padding: 3px 10px;
margin: 5px;
text-decoration: none;
display: inline;
border: 0;
background: linear-gradient(to bottom, #3b679e 0%,#2b88d9 50%,#207cca 51%,#7db9e8 100%);
}

.sidenav .imagehere,
.sidenav br,
.sidenav p,
.sidenav h2,
.sidenav hr {
display: none;
}
}
</style>

<!-- Side navigation -->
<div class="sidenav">
<div class="imagehere" style="background-image: url('/assets/decor/navsmicon.png')" alt="An icon of Spider-Man"></div><br>
<a href="/index">Home</a>
<a href="/cast">Meet the Cast</a>
<a href="/e256b">Earth-256-B</a>
<a href="/outerspace">Outer Space</a>
<a href="/blog">Blog</a>
<a href="/misc">Miscellaneous</a>
<a href="/sitemap">Sitemap</a>
<a href="/updates">Updates</a>
</div>
`;
}
}

customElements.define('header-component', Header);