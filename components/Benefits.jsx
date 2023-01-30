import { Fragment } from "preact"
import { Head } from "$fresh/runtime.ts"

export default function Benefits() {
  return(
    <Fragment>
      <Head>
        <link rel="stylesheet" href="styles/Benefits.css" />
      </Head>


      <div class="benefits" id="benefits">
        <div class="b_part">
          <div class="b_mid"><img style={{width:"50%", float:"right"}} src="/Benefits/1.svg" /></div>
          <div class="b_mid">
            <h1 class="myH2 b_title">Alineación con los objetivos estratégicos de la compañía</h1>
            <p class="myP b_subtitle">
              Los objetivos individuales de los empleados se alinean con los objetivos de la compañía, así, 
              esto nos ayudará a tener una claridad total de cómo cada colaborador tiene un rol indispensable 
              en poder alcanzarlos. Y le dará a cada colaborador una idea precisa de como su trabajo impacta en la organización.  
            </p>
          </div>
        </div>
        <div class="b_part">
          <div class="b_mid">
            <h1 class="myH2 b_title" style={{"text-align":"right"}}>Evalúa en el momento que quieras</h1>
            <p class="myP b_subtitle" style={{"text-align":"right"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum, 
              massa ac dignissim mattis, risus sapien vestibulum ipsum, interdum ultricies orci libero eget erat. Sed lacus 
              urna, mattis sed dictum vitae, efficitur eu diam.
            </p>          
          </div>
          <div class="b_mid"><img style={{width:"50%"}} src="/Benefits/2.svg" /></div>
        </div>          
        <div class="b_part">
          <div class="b_mid"><img style={{width:"50%", float:"right"}} src="/Benefits/3.svg" /></div>
          <div class="b_mid">
            <h1 class="myH2 b_title">Facilidad de manejo</h1>
            <p class="myP b_subtitle">
              Permite a los usuarios una interacción sencilla, intuitiva, agradable y segura. 
              Mejorando la experiencia y satisfacción de los usuarios. Logrando una comunicación y feedback más efectivo. 
              Logrando que el usuario se familiarice antes con la página y que su manejo sea fácil e intuitivo.
            </p>     
          </div>        
        </div>
      </div>


    </Fragment>
  )
}