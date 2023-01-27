import { Fragment } from "preact"
import { Head } from "$fresh/runtime.ts"

export default function HowItWorks() {
  return (
    <Fragment>
      <Head>
        <link rel="stylesheet" href="styles/howitworks.css" />
      </Head>
      <div class="hiw" id="hiw">
        <h1 class="myH2 hiw_title"><b>¿Cómo e-Cert funciona para evaluar el desempeño?</b></h1>
        <p class="myP hiw_subtitle">La evaluación del desempeño es la herramienta que permite solucionar una de las tareas más importantes del 
        departamento de Recursos Humanos: medir el talento y el rendimiento de la plantilla. Elegir el software de evaluación del desempeño más 
        eficaz y acorde a las necesidades de nuestra empresa nos permitirá detectar errores y necesidades en la gestión del capital humano.</p>
        <div class="hiw_icon_container">
          <div class="hiw_info">
            <div class="hiw_icon"><img src="/Icons/hiw/1.svg" /></div>
            <h2 class="myH2 hiw_title">Paso 1:</h2>
            <p class="myP hiw_desc">Montaje de la información de colaboradores y de desempeño</p>
          </div>
          <div class="hiw_arrow"><img src="/Icons/hiw/arrow.svg" /></div>
          <div class="hiw_info">
            <div class="hiw_icon"><img src="/Icons/hiw/2.svg" style={{transform:"scaleX(-1)"}} /></div>
            <h2 class="myH2 hiw_title">Paso 2:</h2>
            <p class="myP hiw_desc">Los usuarios crean los objetivos, hacen seguimiento a estos y contestan evaluaciones de competencias</p>
          </div>
          <div class="hiw_arrow"><img src="/Icons/hiw/arrow.svg" /></div>
          <div class="hiw_info">
            <div class="hiw_icon"><img src="/Icons/hiw/3.svg" /></div>
            <h2 class="myH2 hiw_title">Paso 3:</h2>
            <p class="myP hiw_desc">Administradores y jefes generan reportes en línea e inmediatos para la toma de decisiones</p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}