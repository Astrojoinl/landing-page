const imagesListNames = async () => {
  const images = []
  for await (const dirEntry of Deno.readDir("./static/Carousel")) {
    const {name} = dirEntry
    const type = name.split(".")[1]
    if (type === "jpg" || type == "jpeg") images.push(name)
  }
  return images
}

export default imagesListNames