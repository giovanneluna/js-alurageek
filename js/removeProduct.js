import { connectApi } from "./connectApi.js"

async function removeProduct(event) {
  const productCard = event.target.closest(".product-card")
  const productId = productCard.dataset.id

  try {
    await connectApi.removeProduct(productId)
    productCard.remove()
  } catch (error) {
    console.error("Erro ao remover produto:", error)
  }
}

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("icon-trash")) {
    removeProduct(event)
  }
})
