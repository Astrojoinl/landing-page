import { Fragment } from "preact"
import { Head } from "$fresh/runtime.ts"

export default function Footer() {
  return(
    <Fragment>
      <Head>
        <link rel="stylesheet" href="styles/Footer.css" />
      </Head>
      <div class="footer">
        <div class="footer_content">
          <h1 class="myH2 footer_title">Technology</h1>
          <ul class="footer_list_container">
            <li class="footer_element myP">Ruby on Rails</li>
            <li class="footer_element myP">Node JS</li>
            <li class="footer_element myP">Android</li>
            <li class="footer_element myP">IOS</li>
            <li class="footer_element myP">React JS</li>
            <li class="footer_element myP">Hadoop</li>
          </ul>
        </div>
        <div class="footer_content">
          <h1 class="myH2 footer_title">Industry</h1>
          <ul class="footer_list_container">
            <li class="footer_element myP">Import export</li>
            <li class="footer_element myP">E-Commerce</li>
            <li class="footer_element myP">Apparel manufacturing</li>
            <li class="footer_element myP">Marketing</li>
          </ul>
        </div>
        <div class="footer_content">
          <h1 class="myH2 footer_title">Blogs</h1>
          <ul class="footer_list_container">
            <li class="footer_element myP">Business</li>
            <li class="footer_element myP">Technology</li>
          </ul>
        </div>
        <div class="footer_content">
          <h1 class="myH2 footer_title">Contact</h1>
          <ul class="footer_list_container">
            <li class="footer_element myP">hello@React.com</li>
            <li class="footer_element myP">+99 8277-20-8000</li>
          </ul>
        </div>
      </div>
      <div class="copyrights">
        <div class="cr_logo">
          <img style={{height:"100%", margin:"auto"}} src="logos/logo.gif"/>
        </div>
        <p class="myP cr_text">© 2023 React. All rights reserved.</p>
        <div class="cr_img_container">
          <img class="cr_social" src="/Icons/copyrights/1.svg"/>
          <img class="cr_social" src="/Icons/copyrights/2.svg"/>
        </div>
      </div>
    </Fragment>
  )
}