import { Fragment } from "preact"
import { Head } from "$fresh/runtime.ts"

export default function Benefits() {
  return(
    <Fragment>
      <Head>
        <link rel="stylesheet" href="styles/Benefits.css" />
      </Head>
      <div class="benefits" id="benefits">

        <div class="b_part" style={{float: "left"}}>
          <img style={{height: "100%", "float":"right", "margin-right":"10%"}} src="/Benefits/1.svg" />
        </div>
        <div class="b_part" style={{"padding-top":"1%"}}>
          <h1 class="myH2 b_title" style={{"text-align":"left"}}>Alineación con los objetivos estratégicos de la compañía</h1>
          <p class="myP b_subtitle" style={{"text-align":"left", "padding-right":"30%"}}>
            Los objetivos individuales de los empleados se alinean con los objetivos de la compañía, así, 
            esto nos ayudará a tener una claridad total de cómo cada colaborador tiene un rol indispensable 
            en poder alcanzarlos. Y le dará a cada colaborador una idea precisa de como su trabajo impacta en la organización.  
          </p>
        </div>

        <div class="b_part" style={{float: "left", "padding-top":"1%"}}>
          <h1 class="myH2 b_title" style={{"text-align":"right"}}>Evalúa en el momento que quieras</h1>
          <p class="myP b_subtitle" style={{"text-align":"right", "padding-left":"30%"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum, 
            massa ac dignissim mattis, risus sapien vestibulum ipsum, interdum ultricies orci libero eget erat. Sed lacus 
            urna, mattis sed dictum vitae, efficitur eu diam.
          </p>              
        </div>
        <div class="b_part">
          <img style={{height: "100%", float: "left", "padding-left":"10%"}} src="/Benefits/2.svg" />
        </div>          

        <div class="b_part" style={{float: "left"}}>
          <img style={{height: "100%", float: "right"}} src="/Benefits/3.svg" />
        </div>
        <div class="b_part" style={{"padding-top":"1%"}}>
          <h1 class="myH2 b_title" style={{"text-align":"left"}}>Facilidad de manejo</h1>
          <p class="myP b_subtitle" style={{"text-align":"left", "padding-right":"30%"}}>
            Permite a los usuarios una interacción sencilla, intuitiva, agradable y segura. 
            Mejorando la experiencia y satisfacción de los usuarios. Logrando una comunicación y feedback más efectivo. 
            Logrando que el usuario se familiarice antes con la página y que su manejo sea fácil e intuitivo.
          </p>              
        </div>
      </div>
    </Fragment>
  )
}