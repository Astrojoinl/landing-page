import { useState } from "preact/hooks"

const MAX_VISIBILITY = 3
export default function Carousel({content}){
  const cards_size = content.length
  const [active, setActive] = useState(0)
  setInterval(() => {
    if(active >= cards_size - 1) setActive(0)
    else setActive(active + 1)
  }, 10000 )
  return (
      <div class="carousel">
      <button class='nav left' onClick={() => setActive(i => {
        if(i <= 0) return cards_size - 1
        else return i - 1
      })}><img src="/Icons/left arrow.svg"/></button>
      {content.map((child, i)=> (
        <div class="card-container" style={{
          '--active': i === active ? 1 : 0,
          '--offset': (active - i) / 3,
          '--direction': Math.sign(active - i),
          '--abs-offset': Math.abs(active - i) / 3,
          'pointer-events': active === i ? 'auto' : 'none',
          'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
          'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
        }}>
          <div class="card" style={{overflow: "hidden"}}>
            <video class="card-content" src={`/Carousel/${child}`} autoplay="true" loop="true" muted="true"/>
          </div>
        </div>
      ))}
      <button class='nav right' onClick={() => setActive(i => {
        if(i >= cards_size - 1) return 0
        else return i + 1
      })}><img src="/Icons/left arrow.svg" style={{transform: "scaleX(-1)"}}/></button>
      </div>
  )
}