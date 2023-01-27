import { Fragment } from "preact"
import { Head } from "$fresh/runtime.ts"

export default function Facts() {
  return (
    <Fragment>
      <Head>
        <link rel="stylesheet" href="styles/facts.css" />
      </Head>
      <div class="facts" id="facts">
        <h2 class="facts_title myH2">Nuestros logros</h2>

        <div class="facts_cards_container">
          <div class="facts_card">
            <img class="facts_icon" src="/Icons/facts/3.svg"/>
            <h1 class="myH2">3+</h1>
            <p class="myP facts_description">Idiomas</p>
          </div>
          <div class="facts_card">
            <img class="facts_icon" src="/Icons/facts/2.svg"/>
            <h1 class="myH2">20+</h1>
            <p class="myP facts_description">Años de experiencia</p>
          </div>
          <div class="facts_card">
            <img class="facts_icon" src="/Icons/facts/1.svg"/>  
            <h1 class="myH2">400+</h1>
            <p class="myP facts_description">Clientes que confían en nuestro software</p>
          </div>
        </div>

      </div>
    </Fragment>
  );
}