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
  background-color: #E7E9EB;
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 20px;
  border-bottom: none;
  border-right: 1px black solid;
}

.sidenav a {
  padding: 7px 0px 7px 20px;
  margin: 0px 40px 5px 30px;
  text-decoration: none;
  display: block;
  border: 1px black solid;
  background-color: white;
}

  .sidenav p {
  padding: 0px 20px;
  text-decoration: none;
    }

  .sidenav h2 {
  margin-top: 0px;
  padding: 0px 40px 0px 40px;
  text-decoration: none;
  text-align: justify;
  border-bottom: 0px;
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
  background-color: #E7E9EB;
  white-space: nowrap;
  padding-top: 10px;
  align-content: center;
  border-bottom: 1px black solid;
  border-right: none;
    }

  .sidenav a {
  padding: 3px 10px;
  margin: 0px;
  text-decoration: none;
  display: inline;
  border: 0px;
  background-color: #E7E9EB;
    }

.sidenav .imagehere {
  display: none;
            }

.sidenav br {
  display: none;
            }

.sidenav p {
  display: none;
            }

.sidenav h2 {
  display: none;
            }

.sidenav hr {
  display: none;
            }

} 
      </style>

 <!-- Side navigation -->
<div class="sidenav">
<div class="imagehere" style="background-image: url('https://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image-768x576.jpg')"></div><br>
<h2>NAME's Character Repository</h2>
  <a href="index.html">Index</a>
  <a href="worldtemplate.html">Worldbuild 1</a>
  <a href="worldtemplate.html">Worldbuild 2</a>
  <a href="worldtemplate.html">Game OCs</a>
  <a href="worldtemplate.html">Fandom OCs</a>
  <a href="worldtemplate.html">Tabletop Game</a>
  <a href="worldtemplate.html">Misc Characters</a>
  <a href="worldtemplate.html">Change These</a>
</div>

    `;
  }
}

customElements.define('header-component', Header);
