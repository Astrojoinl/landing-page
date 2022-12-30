import { Handlers, PageProps } from "$fresh/server.ts"
import Carousel from "../islands/Carousel.tsx"
import { Fragment } from "preact"
import { Head } from "$fresh/runtime.ts"

const content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

export default function Index(props: PageProps) {
  return (
    <Fragment>
      <Head>
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <main>
        <Carousel cardsize={10} content={content} />
      </main>
    </Fragment>
  )
}




