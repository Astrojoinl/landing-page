import { Fragment } from "preact"
import { Head } from "$fresh/runtime.ts"
import { useState, useEffect } from "preact/hooks"

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [clicked_menu, setClickedMenu] = useState(false)
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
        <div class="logo">
          <a href="#"><img src="logos/logo.gif"/></a>
        </div>
        <span class={clicked_menu ? "navTrigger active" : "navTrigger"} onClick={() => setClickedMenu(!clicked_menu)}>
          <i></i>
          <i></i>
          <i></i>
        </span>
        <div id="mainListDiv" class={clicked_menu ? "main_list show_list" : "main_list"}>
          <ul class="navlinks">
            <li><a href="#facts"><b>Cifras</b></a></li>
            <li><a href="#benefits"><b>Servicios</b></a></li>
            <li><a href="#hiw"><b>Pasos</b></a></li>
            <li><a href="#registration" id="contact"><b>Contacto</b></a></li>
          </ul>
        </div>
      </nav>    
    </Fragment>
  )
}