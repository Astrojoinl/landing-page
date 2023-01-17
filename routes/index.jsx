import { Handlers, PageProps } from "$fresh/server.ts"
import Carousel from "../islands/Carousel.jsx"
import { Fragment } from "preact"
import { Head } from "$fresh/runtime.ts"
import imagesListNames from "../services/Carousel.js"
import NavBar from "../islands/NavBar.jsx"
import { useState, useEffect } from "preact/hooks"

export const handler = {
  async GET(request, context) {
    const imagesNames = await imagesListNames()
    return context.render(imagesNames)
  }
}

export default function Index({data}) {
  return (
    <Fragment>
      <Head>
        <link rel="stylesheet" href="styles/styles.css" />
      </Head>
      <NavBar />
      <Carousel content={data} />
      <div>
        <div class="card-grid">
          <div class="especial-card card1" style={{"margin-top": "50px"}}>
            <h2 class="myH2">Como funciona:</h2>
            <p class="myP">
              <br/>
              Paso 1: Montaje de la información de colaboradores y de desempeño
              <br/>
              Paso 2: Los usuarios crean los objetivos, hacen seguimiento a estos y contestan evaluaciones de competencias
              <br/>
              Paso 3: Administradores y jefes generan reportes en línea e inmediatos para la toma de decisiones
            </p>        
          </div>  
          <div class="especial-card" style={{"margin-top": "50px"}}>
            <form>
              <label class="myH2">Nombre</label><br/>
              <label class="myH2">Celular:</label><br/>
              <label class="myH2">Email</label><br/>
            </form>
          </div>
        </div>
      </div>   
      <div>
        <h2 class="myH2">Ventajas:</h2>
        <p class="myP">
          -	Información confiable<br/>
          -	Facilidad de manejo<br/>
          -	Alto desempeño<br/>
          -	Disponibilidad 24  horas<br/>
          -	Seguridad de la información<br/>
        </p>
      </div>
    </Fragment>
  )
}




