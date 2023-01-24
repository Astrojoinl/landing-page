import { Fragment } from "preact"
import { Head } from "$fresh/runtime.ts"

export default function Benefits() {
  return(
    <Fragment>
      <Head>
        <link rel="stylesheet" href="styles/Benefits.css" />
      </Head>
      <div class="benefits">
        <div class="b_part" style={{float: "left"}}>
          <img style={{height: "100%", "margin":"auto"}} src="/Benefits/1.svg" />
        </div>
        <div class="b_part" style={{"padding-top":"10%"}}>
          <h1 class="myH2 b_title" style={{"text-align":"left"}}>Built for growth</h1>
          <p class="myP b_subtitle" style={{"text-align":"left", "padding-right":"30%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum, 
          massa ac dignissim mattis, risus sapien vestibulum ipsum, interdum ultricies orci libero eget erat. Sed lacus 
          urna, mattis sed dictum vitae, efficitur eu diam.</p>
        </div>
        <div class="b_part" style={{float: "left", "padding-top":"10%"}}>
          <h1 class="myH2 b_title" style={{"text-align":"right"}}>800+ unique blocks!!</h1>
          <p class="myP b_subtitle" style={{"text-align":"right", "padding-left":"30%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum, 
          massa ac dignissim mattis, risus sapien vestibulum ipsum, interdum ultricies orci libero eget erat. Sed lacus 
          urna, mattis sed dictum vitae, efficitur eu diam.</p>          
        </div>
        <div class="b_part">
        <img style={{height: "100%", float: "left", "padding-left":"10%"}} src="/Benefits/2.svg" />
        </div>
      </div>
    </Fragment>
  )
}