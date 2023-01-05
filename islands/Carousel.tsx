import { useState } from "preact/hooks"

export default function Carousel({cardsize, content}){
  let cards = new Array(cardsize).fill(content)

  const [active, setActive] = useState(2)
  const MAX_VISIBILITY = 3

  return (
    <div>
      {active > 0 && <button class='nav left' onClick={() => setActive(i => i - 1)}><img src="/left_arrow_next.svg"/></button>}
      <div class="carousel">
        {cards.map((child, i)=> (
          <div class="card-container" style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            'pointer-events': active === i ? 'auto' : 'none',
            'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
          }}>
            <div class="card">
              <h2>{`Card ${i}`}</h2>
              <p>{child}</p>
            </div>
          </div>
        ))}
      </div>
      {active < cardsize - 1 && <button class='nav right' onClick={() => setActive(i => i + 1)}><img src="/right_arrow_next.svg"/></button>}
    </div>
  )
}