import { Handlers, PageProps } from "$fresh/server.ts"
import Carousel from "../islands/Carousel.tsx"
import { Fragment } from "preact"
import { Head } from "$fresh/runtime.ts"
import imagesListNames from "../services/Carousel.js"

export const handler = {
  async GET(request, context) {
    const imagesNames = await imagesListNames()
    return context.render(imagesNames)
  }
}

export default function Index({data}) {
  return (
    <Fragment>
      <Head>
        <link rel="stylesheet" href="/styles.css" />
      </Head>

      <nav class="nav">
          <div class="p-container">
              <div class="logo">
                  <a href="#">Your Logo</a>
              </div>
              <div id="mainListDiv" class="main_list">
                  <ul class="navlinks">
                      <li><a href="#">About</a></li>
                      <li><a href="#">Portfolio</a></li>
                      <li><a href="#">Services</a></li>
                      <li><a href="#">Contact</a></li>
                  </ul>
              </div>
              <span class="navTrigger">
                  <i></i>
                  <i></i>
                  <i></i>
              </span>
          </div>
      </nav>


      <Carousel content={data} />
    </Fragment>
  )
}




