import { Fragment } from "preact"
import { Head } from "$fresh/runtime.ts"

export default function NavBar() {
  return (
    <Fragment>
      <Head>
        <link rel="stylesheet" href="styles/NavBar.css" />
      </Head>
      <nav class="nav">
          <div class="p_container">
              <div class="logo">
                  <a href="#"><img src="logos/logo.gif"/></a>
              </div>
              <div id="mainListDiv" class="main_list">
                  <ul class="navlinks">
                      <li><a href="#">About</a></li>
                      <li><a href="#">Portfolio</a></li>
                      <li><a href="#">Services</a></li>
                      <li><a href="#">Contact</a></li>
                  </ul>
              </div>
              <span class="navTrigger">
                  <i></i>
                  <i></i>
                  <i></i>
              </span>
          </div>
      </nav>    
    </Fragment>
  )
}