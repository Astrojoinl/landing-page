const imagesListNames = async () => {
  const images = []
  for await (const dirEntry of Deno.readDir("./static/Carousel")) {
    const {name} = dirEntry
    images.push(name)
  }
  return images
}

export default imagesListNames