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
          <form class="register-form acrylic">
            <span>Sign Up</span>
            <input type="text" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <button id="SignUp">Go</button>
            <p class="message"><a href="#">I have Account</a></p>
          </form>
          <form class="login-form acrylic">
            <span>Login to your account</span>
            <input type="text" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <button id="SignIn">Login</button>
            <p class="message"><a href="#"/>Create Account</p>
          </form>
        </div>
      </div>
    </Fragment>
  )
}