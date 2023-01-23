import { Fragment } from "preact"
import { Head } from "$fresh/runtime.ts"

export default function RegisterForm() {
  return(
    <Fragment>
      <Head>
        <link rel="stylesheet" href="styles/RegisterForm.css" />
      </Head> 

      <div class="login-page">
        <div class="form">
          <form class="login-form acrylic">
            <span>Leave us your data</span>
            <input type="text" placeholder="Name"/>
            <input type="tel" placeholder="Cellphone"/>
            <input type="text" placeholder="Email"/>
            <button id="SignIn">Contact me!</button>
          </form>
        </div>
      </div>
    </Fragment>
  )
}