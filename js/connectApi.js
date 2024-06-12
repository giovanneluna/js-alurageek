async function listProducts() {
  const connection = await fetch("http://localhost:3000/products")
  const connectionConverted = await connection.json()

  return connectionConverted
}

async function createProduct(name, price, image) {
  const connection = await fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      price: price,
      image: image,
    }),
  })
  const connectionConverted = await connection.json()
  return connectionConverted
}

async function removeProduct(id) {
  const connection = await fetch(`http://localhost:3000/products/${id}`, {
    method: "DELETE",
  })
}

export const connectApi = {
  listProducts,
  createProduct,
  removeProduct,
}
