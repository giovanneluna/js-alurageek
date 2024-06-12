import { connectApi } from "./connectApi.js"

const list = document.querySelector("[data-list]")
const lineElement = document.querySelector(".line")

function constructCard(id, name, price, image) {
  const product = document.createElement("div")
  product.className = "product-card"
  product.dataset.id = id
  product.innerHTML = `
    <div class="photo"><img class="img" src="${image}" alt=""></div>
    <div class="card-title">
      <p>${name}</p>
    </div>
    <div class="card-description">
      <div class="price">$ ${price}</div>
      <div class="icon-trash"><img class="icon-trash" src="images/Vector.png" alt=""></div>
    </div>`
  return product
}

async function listProducts() {
  try {
    const listApi = await connectApi.listProducts()
    listApi.forEach((element) =>
      list.appendChild(
        constructCard(element.id, element.name, element.price, element.image)
      )
    )
    checkLineVisibility()
  } catch (error) {
    console.error("Erro ao listar produtos:", error)
  }
}

function checkLineVisibility() {
  const productCards = document.querySelectorAll(".product-card")
  if (productCards.length > 3) {
    lineElement.classList.add("visible")
  } else {
    lineElement.classList.remove("visible")
  }
}

// Chama a função para listar os produtos ao carregar a página
listProducts()
