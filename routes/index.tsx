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
      <Carousel content={data} />
    </Fragment>
  )
}




