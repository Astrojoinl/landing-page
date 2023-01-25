import { Fragment } from "preact"
import { Head } from "$fresh/runtime.ts"
import { useState, useEffect } from "preact/hooks"

const MAX_VISIBILITY = 3
export default function Carousel({content}){
  const cards_size = content.length
  const [active, setActive] = useState(0)
  useEffect(() => {
    const intervalId = setInterval(() => {
      if(active >= cards_size - 1) setActive(0)
      else setActive(active + 1)
    }, 10000 )
    return () => clearInterval(intervalId)
  }, [active])
  return (
    <Fragment>
      <Head>
        <link rel="stylesheet" href="styles/Carousel.css" />
      </Head>
      <div class="carousel">
        <button class='navi left' onClick={() => setActive(active <= 0 ? cards_size - 1 : active - 1)}><img src="/Icons/left arrow.svg"/></button>
        {content.map((child, i)=> (
          <div class="card" 
          style={{
            '--active': i === active,
            '--offset': (active - i) / 3,
            '--abs-offset': Math.abs(active - i) / 3
          }}>
            <div class="card-content"><img class="card-image" src={`/Carousel/${child}`} /></div>
            <h2 class="myH2 card-text card_title">Software de evaluación de desempeño para empresas.</h2>
            <p class="myP card-text card_desc">
              {i === 0 ? "¿Desea crear una cultura de crecimiento de sus colaboradores y logro de resultados para el cumplimiento de los objetivos estratégicos?" : 
              "¿Necesita evaluar las competencias de sus colaboradores e implementar una cultura de establecimiento, seguimiento y logro de objetivos?"}
            </p>
          </div>
        ))}
        <button class='navi right' onClick={() => setActive(active >= cards_size - 1 ? 0 : active + 1)}><img src="/Icons/left arrow.svg" style={{transform: "scaleX(-1)"}}/></button>
      </div>
    </Fragment>
  )
}