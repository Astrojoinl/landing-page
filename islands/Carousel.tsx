import { useState } from "preact/hooks"

const MAX_VISIBILITY = 3
export default function Carousel({content}){
  const cards_size = content.length
  const [active, setActive] = useState(0)
  return (
      <div class="carousel">
      {active > 0 && <button class='nav left' onClick={() => setActive(i => i - 1)}><img src="/Icons/left arrow.svg"/></button>}
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
            <img class="card-content" src={`/Carousel/${child}`}/>
          </div>
        </div>
      ))}
      {active < cards_size - 1 && <button class='nav right' onClick={() => setActive(i => i + 1)}><img src="/Icons/left arrow.svg" style={{transform: "scaleX(-1)"}}/></button>}
      </div>
  )
}