import { Fragment } from "preact"
import { Head } from "$fresh/runtime.ts"
import imagesListNames from "../services/Carousel.js"
import Carousel from "../islands/Carousel.jsx"
import NavBar from "../islands/NavBar.jsx"
import Facts from "../components/Facts.jsx"
import Benefits from "../components/Benefits.jsx"
import HowItWorks from "../components/HowItWorks.jsx"
import RegisterForm from "../components/RegisterForm.jsx"

import Footer from "../components/Footer.jsx"

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
      <Carousel content={data} />
      <Facts />
      <Benefits />
      <HowItWorks />
      <RegisterForm />
      <Footer />
    </Fragment>
  )
}




