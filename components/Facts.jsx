import { Fragment } from "preact"
import { Head } from "$fresh/runtime.ts"

export default function Facts() {
  return (
    <Fragment>
      <Head>
        <link rel="stylesheet" href="styles/facts.css" />
      </Head>
      <div class="facts">
        <h2 class="facts_title myH2">Nuestros logros hasta el momento</h2>
        <h2 class="facts_subtitle myH2">Hablando de números</h2>

        <div class="facts_cards_container">
          <div class="facts_card">
            <img class="facts_icon" src="/Icons/facts/3.svg"/>
            <h1 class="myH2">2+</h1>
            <p class="myP facts_description">Idiomas en los que la plataforma está disponible</p>
          </div>
          <div class="facts_card">
            <img class="facts_icon" src="/Icons/facts/2.svg"/>
            <h1 class="myH2">6+</h1>
            <p class="myP facts_description">Years of experience in technology business</p>
          </div>
          <div class="facts_card">
            <img class="facts_icon" src="/Icons/facts/1.svg"/>  
            <h1 class="myH2">1000+</h1>
            <p class="myP facts_description">Business users trust software we buillt</p>
          </div>
        </div>

      </div>
    </Fragment>
  );
}