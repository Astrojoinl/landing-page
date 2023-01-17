import { Fragment } from "preact"
import { Head } from "$fresh/runtime.ts"
import { useState, useEffect } from "preact/hooks"

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    // deno-lint-ignore no-window-prefix
    window.addEventListener('scroll', () => {
      const position = window.pageYOffset
      setScrolled(position > 919)
    })
  }, [])
  return (
    <Fragment>
      <Head>
        <link rel="stylesheet" href="styles/NavBar.css" />
      </Head>
      <nav class={scrolled ? "nav affix" : "nav no-affix"}>
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