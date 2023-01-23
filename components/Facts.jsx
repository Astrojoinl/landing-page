import { Fragment } from "preact"
import { Head } from "$fresh/runtime.ts"

export default function Facts() {
  return (
    <Fragment>
      <Head>
        <link rel="stylesheet" href="styles/digits.css" />
      </Head>
      <div class="digits">
        <h2 class="digits_title myH2">Our achivements so far</h2>
        <h2 class="digits_subtitle myH2">Talking about numbers</h2>

        <div class="digits_cards_container">
          <div class="digits_card">
            <img class="digits_icon" src="/Icons/digits/3.svg"/>
            <h1 class="myH2">15+</h1>
            <p class="myP digits_description">Countries our software operates in</p>
          </div>
          <div class="digits_card">
            <img class="digits_icon" src="/Icons/digits/2.svg"/>
            <h1 class="myH2">6+</h1>
            <p class="myP digits_description">Years of experience in technology business</p>
          </div>
          <div class="digits_card">
            <img class="digits_icon" src="/Icons/digits/1.svg"/>  
            <h1 class="myH2">1000+</h1>
            <p class="myP digits_description">Business users trust software we buillt</p>
          </div>
        </div>

      </div>
    </Fragment>
  );
}