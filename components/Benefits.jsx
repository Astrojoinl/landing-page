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
          <div class="b_mid"><img style={{float:"right"}} src="/Benefits/1.svg" /></div>
          <div class="b_mid">
            <h1 class="myH2 b_title">Alineación con los objetivos estratégicos de la compañía</h1>
            <p class="myP b_subtitle">
              Los objetivos individuales de cada colaborador deben estar alineadas a logro de los objetivos 
              estratégicos de la organización y por lo tanto cada colaborador a su vez debe tener las 
              competencias adecuadas para lograrlos.  Un modelo de desempeño que genere crecimiento 
              alineado a la planeación estratégica genera a corto plazo colaboradores de mayor desempeño 
              con mejores resultados organizacionales.
            </p>
          </div>
        </div>
        <div class="b_part">
          <div class="b_mid">
            <h1 class="myH2 b_title" style={{"text-align":"right"}}>Evalúa en el momento que quieras</h1>
            <p class="myP b_subtitle" style={{"text-align":"right"}}>
              eCert es una plataforma de rápida implementación, fácil administración, alta seguridad 
              y alto desempeño
            </p>          
          </div>
          <div class="b_mid"><img src="/Benefits/2.svg" /></div>
        </div>          
        <div class="b_part">
          <div class="b_mid"><img style={{float:"right"}} src="/Benefits/3.svg" /></div>
          <div class="b_mid">
            <h1 class="myH2 b_title">Facilidad de manejo</h1>
            <p class="myP b_subtitle">
              eCert dispone de una interfaz sencilla, intuitiva y 
              con la información para la toma de decisiones a un clic de distancia
            </p>     
          </div>        
        </div>
      </div>


    </Fragment>
  )
}