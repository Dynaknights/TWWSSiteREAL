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
background-color: #0b0e33;
overflow-x: hidden; /* Disable horizontal scroll */
padding-top: 20px;
border-bottom: none;
border-right: 2px black solid;
text-align: center; /* Center text horizontally */
}

.sidenav p{
}

.sidenav a {
color: antiquewhite;
padding: 10px 10px 10px 10px;
margin: 10px 10px 10px 10px;
text-decoration: none;
display: block;
border: 2px black solid;
border-radius: 5px;
background-color: #e13232;
transition: box-shadow .3s;
}
.sidenav a:hover {
 box-shadow: 5px 5px #02041aff; 
}

.sidenav a:hover {
background-color:#930b0b;
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

@media screen and (max-width: 1350px) {
.sidenav {
height: 40px;
width: 100%; /* Set the width of the sidebar */
position: static;
z-index: 1; /* Stay on top */
overflow-x: scroll;
scrollbar-width: none;
top: 0; /* Stay at the top */
left: 0;
background-color: #0b0e33;
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
background-color: #e13232;
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
<div class="imagehere" style="background-image: url('https://web-surfer.neocities.org/imgs/misc/smicon3.png')"></div><br>
<a href="https://web-surfer.neocities.org">Home</a>
<a href="https://web-surfer.neocities.org/Cast">Meet the Cast</a>
<a href="https://web-surfer.neocities.org/Earth256B">Earth-256-B</a>
<a href="https://web-surfer.neocities.org/Cosmos">The Cosmos</a>
<a href="https://web-surfer.neocities.org/Sitemap">Sitemap</a>
<a href="https://web-surfer.neocities.org/Misc">Miscellaneous</a>
<a href="https://web-surfer.neocities.org/Updates">Updates</a>
</div>
`;
}
}

customElements.define('header-component', Header);