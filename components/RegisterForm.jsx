import { Fragment } from "preact"
import { Head } from "$fresh/runtime.ts"

export default function RegisterForm() {
  return(
    <Fragment>
      <Head>
        <link rel="stylesheet" href="styles/RegisterForm.css" />
      </Head>
      <div class="registration" id="registration">
        <div class="rf_part" style={{"background-color":"white"}}>
          <h1 class="myH2 rf_title">Una evaluación empresarial excelente no debería ser difícil</h1>
          <div class="rf_content">
            <h2 class="myH2 rf_content_list">Información confiable</h2>
            <img src="/Icons/Register/1.svg" style={{height:"100%"}}/>
          </div>
          <div class="rf_content">
            <img src="/Icons/Register/2.svg" style={{height:"100%"}}/> 
            <h2 class="myH2 rf_content_list">Facilidad de manejo</h2>
          </div>
          <div class="rf_content">
            <h2 class="myH2 rf_content_list">Alto desempeño</h2>
            <img src="/Icons/Register/3.svg" style={{height:"100%"}}/>
          </div>
          <div class="rf_content">
            <img src="/Icons/Register/4.svg" style={{height:"100%"}}/>
            <h2 class="myH2 rf_content_list">Disponibilidad 24 horas</h2>
          </div>
          <div class="rf_content">
            <h2 class="myH2 rf_content_list">Seguridad de la información</h2>
            <img src="/Icons/Register/5.svg" style={{height:"100%"}}/>
          </div>
        </div>
        <div class="rf_part">
          <div class="form">
            <form class="login-form acrylic">
              <span>¿Interesado? Déjanos tus datos</span>
              <input type="text" placeholder="Nombre"/>
              <input type="tel" placeholder="Teléfono"/>
              <input type="text" placeholder="Correo electrónico"/>
              <button id="SignIn">Contáctame</button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  )
}