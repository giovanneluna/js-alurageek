import { connectApi } from "./connectApi.js"

const form = document.querySelector("[data-form]")

async function createProduct(event) {
  event.preventDefault()

  const name = document.querySelector("[data-name]").value
  const price = document.querySelector("[data-price]").value
  const image = document.querySelector("[data-image]").value

  await connectApi.createProduct(name, price, image)
}

form.addEventListener("submit", (event) => createProduct(event))
