import { Fragment } from "preact"
import { Head } from "$fresh/runtime.ts"

export default function Digits() {
  return (
    <Fragment>
      <Head>
        <link rel="stylesheet" href="styles/digits.css" />
      </Head>
      <div class="digits">
        <h2 class="digits_title myH2">Talking about numbers</h2>
        <h2 class="digits_subtitle myH2">Our achivements so far</h2>
        <div class="digits_cards"></div>

      </div>
    </Fragment>
  );
}