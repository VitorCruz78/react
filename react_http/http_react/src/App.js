import './App.css';
import React, { useState, useEffect } from 'react';

import useFetch from './hooks/useFetch';

const url = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([])

  // 4 -custom
  const { data: items, httpConfig } = useFetch(url)

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  // 1 - resgatando dados
  {/*useEffect(() => {

    async function getData() {
      const res = await fetch(url)

      const data = await res.json()

      setProducts(data)
    }

    getData()

  }, [])
*/}

  // 2 - add de produtos
  async function handleSubmit(e) {
    e.preventDefault()

    const product = {
      name,
      price,
    }

    {/* const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })

    // 3 - carregamento dinâmico
    const addedProduct = await res.json()

  setProducts((prevProducts) => [...prevProducts, addedProduct]) */}
    httpConfig(product, "POST")

    setName('')
    setPrice('')
  }

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      <ul>
        {items && items.map((product) => {
          return <li key={product.id}>{product.name} - R$: {product.price}</li>
        })}
      </ul>
      <div className='add-product'>
        <form onSubmit={handleSubmit}>
          <label>
            Nome
            <input type="text" value={name} name='name' onChange={(e) => setName(e.target.value)}></input>
          </label>
          <label>
            Preço
            <input type="number" value={price} name='price' onChange={(e) => setPrice(e.target.value)}></input>
          </label>
          <input type="submit" value="Criar"></input>
        </form>
      </div>
    </div>
  );
}

export default App;
