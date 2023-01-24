import { Fragment } from "preact"
import { Head } from "$fresh/runtime.ts"
import RegisterForm from "./RegisterForm.jsx"

export default function HowItWorks() {
  return (
    <Fragment>
      <Head>
        <link rel="stylesheet" href="styles/howitworks.css" />
      </Head>
      <div class="howitworks" id="howitworks">
        <div class="part">
          <h2 class="myH2 hiw_title_1">How React works for you?</h2>
          <p class="myP hiw_subtitle_1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum, 
          massa ac dignissim mattis, risus sapien vestibulum ipsum, interdum ultricies orci libero eget erat. Sed lacus 
          urna, mattis sed dictum vitae, efficitur eu diam.</p>

          <div class="hiw_icon_container">
            <div class="hiw_info">
              <p class="myP hiw_desc">Login or signup in React to get started</p>
              <img class="hiw_icon" src="/Icons/hiw/1.svg" />
            </div>
            <img class="hiw_icon" src="/Icons/hiw/arrow.svg" />
            <div class="hiw_info">
              <p class="myP hiw_desc">Using our super powerfull builder, build your apps</p>
              <img class="hiw_icon" src="/Icons/hiw/2.svg" />
            </div>
            <img class="hiw_icon" src="/Icons/hiw/arrow.svg" />
            <div class="hiw_info">
              <p class="myP hiw_desc">When you are done, hit the publish button to show the world!</p>
              <img class="hiw_icon" src="/Icons/hiw/3.svg" />
            </div>
          </div>
        </div>
        <div class="part">
          <RegisterForm />
        </div>
        
      </div>
    </Fragment>
  )
}