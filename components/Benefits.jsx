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
          <img style={{height: "100%", "float":"right", "margin-right":"10%"}} src="/Benefits/1.svg" />
        </div>
        <div class="b_part" style={{"padding-top":"5%"}}>
          <h1 class="myH2 b_title" style={{"text-align":"left"}}>Información confiable</h1>
          <p class="myP b_subtitle" style={{"text-align":"left", "padding-right":"30%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum, 
          massa ac dignissim mattis, risus sapien vestibulum ipsum, interdum ultricies orci libero eget erat. Sed lacus 
          urna, mattis sed dictum vitae, efficitur eu diam.</p>
        </div>

        <div class="b_part" style={{float: "left", "padding-top":"5%"}}>
          <h1 class="myH2 b_title" style={{"text-align":"right"}}>Facilidad de manejo</h1>
          <p class="myP b_subtitle" style={{"text-align":"right", "padding-left":"30%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum, 
          massa ac dignissim mattis, risus sapien vestibulum ipsum, interdum ultricies orci libero eget erat. Sed lacus 
          urna, mattis sed dictum vitae, efficitur eu diam.</p>          
        </div>
        <div class="b_part">
          <img style={{height: "100%", float: "left"}} src="/Benefits/2.svg" />
        </div>

        <div class="b_part" style={{float: "left"}}></div>
        <div class="b_part" style={{"padding-top":"5%"}}></div>

        <div class="b_part" style={{float: "left", "padding-top":"5%"}}></div>
        <div class="b_part"></div>

        <div class="b_part" style={{float: "left"}}></div>
        <div class="b_part" style={{"padding-top":"5%"}}></div>        
      </div>
    </Fragment>
  )
}