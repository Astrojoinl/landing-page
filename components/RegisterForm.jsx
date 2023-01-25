import { Fragment } from "preact"
import { Head } from "$fresh/runtime.ts"

export default function RegisterForm() {
  return(
    <Fragment>
      <Head>
        <link rel="stylesheet" href="styles/RegisterForm.css" />
      </Head> 

      <div class="login-page">
        <div class="rf_part" style={{"background-color":"white"}}>
          <h1 class="myH2 rf_title">Una evaluación empresarial excelente no debería ser difícil</h1>

          <p class="myP rf_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum, 
          massa ac dignissim mattis, risus sapien vestibulum ipsum, interdum ultricies orci libero eget erat. Sed lacus 
          urna, mattis sed dictum vitae, efficitur eu diam.</p>
          
        </div>
        <div class="rf_part">
          <div class="form">
            <form class="login-form acrylic">
              <span>¿Interesado? Déjanos tus datos</span>
              <input type="text" placeholder="Name"/>
              <input type="tel" placeholder="Cellphone"/>
              <input type="text" placeholder="Email"/>
              <button id="SignIn">Contáctame</button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  )
}