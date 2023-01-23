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
            <h2 class="myH2 card-text" style={{width:"500px", top:"15%", left:"10%", "background-color":"rgb(0,16,74)", color:"white"}}>We build intelligent enterprise software!</h2>
            <p class="myP card-text" style={{height:"340px", width:"700px", top:"40%", left:"10%"}}>
              We are a technology company that understands complexity of businesses, and with our technical expertise, we
              help them transform and scale</p>
          </div>
        ))}
        <button class='navi right' onClick={() => setActive(active >= cards_size - 1 ? 0 : active + 1)}><img src="/Icons/left arrow.svg" style={{transform: "scaleX(-1)"}}/></button>
      </div>
    </Fragment>
  )
}