import { Handlers, PageProps } from "$fresh/server.ts"
import Carousel from "../islands/Carousel.jsx"
import { Fragment } from "preact"
import { Head } from "$fresh/runtime.ts"
import imagesListNames from "../services/Carousel.js"
import NavBar from "../islands/NavBar.jsx"

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
        <link rel="stylesheet" href="styles/styles.css" />
      </Head>
      <NavBar />

      <section class="home">
      </section>



      <Carousel content={data} />
      <Carousel content={data} />


    <section class="home">
    </section>

    </Fragment>
  )
}




