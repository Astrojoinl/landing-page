import { Fragment } from "preact"
import { Head } from "$fresh/runtime.ts"

export default function Footer() {
  return(
    <Fragment>
      <Head>
        <link rel="stylesheet" href="styles/Footer.css" />
      </Head>
      <div class="footer">
        <div class="footer_content">
          <h1 class="myH2 footer_title">Soluciones</h1>
          <div class="footer_links">
            <ul class="footer_list_container">
              <li class="footer_element myP">Evaluación de objetivos</li>
              <li class="footer_element myP">Evaluación de competencias</li>
              <li class="footer_element myP">Plan de desarrollo</li>
              <li class="footer_element myP">Plataforma de capacitaciones</li>
            </ul>
            <ul class="footer_list_container">
              <li class="footer_element myP">Asignación de tareas</li>
              <li class="footer_element myP">Evaluación de clima empresarial</li>
              <li class="footer_element myP">Hojas de vida</li>
              <li class="footer_element myP">Bienestar</li>
            </ul>
          </div>
        </div>
        <div class="footer_content">
          <h1 class="myH2 footer_title">Contacto</h1>
          <div class="footer_links">
            <ul class="footer_list_container">
              <li class="footer_element myP">info@e-learning.com.co</li>
              <li class="footer_element myP">+57 3152351997</li>
              <li class="footer_element myP"><a href="//www.e-learning.com.co">www.e-learning.com.co</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="copyrights">
        <div class="cr_logo">
          <img style={{height:"100%", margin:"auto"}} src="logos/logo.gif"/>
        </div>
        <p class="myP cr_text">© 2023 E-Learning. All rights reserved.</p>
        <div class="cr_img_container">
          <img class="cr_social" src="/Icons/copyrights/1.svg"/>
          <img class="cr_social" src="/Icons/copyrights/2.svg"/>
        </div>
      </div>
    </Fragment>
  )
}