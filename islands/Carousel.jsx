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
    }, 7000 )


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
          <div class="card" style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            'pointer-events': active === i ? 'auto' : 'none',
            'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'flex',
          }}>
            <div>
              <img class="card-content" src={`/Carousel/${child}`} />
              <div class="myP card-text">
              ¿Desea crear una cultura de crecimiento de sus colaboradores y logro de resultados para el cumplimiento de los objetivos estratégicos?
              </div>
            </div>
          </div>
        ))}
        <button class='navi right' onClick={() => setActive(active >= cards_size - 1 ? 0 : active + 1)}><img src="/Icons/left arrow.svg" style={{transform: "scaleX(-1)"}}/></button>
      </div>
    </Fragment>
  )
}