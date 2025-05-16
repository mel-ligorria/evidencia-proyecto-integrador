import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'


function App() {
const [productos, setProductos] = useState([])
  
  useEffect(() => {
    axios.get('https://dummyjson.com/products').then(res => setProductos(res.data.products)); }, []);
    return (
      <>
        <h1 className="text-3xl text-blue-600 font-bold text-center my-6">
          Evidencia Proyecto Integrador
        </h1>
  
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
          {productos.map((p) => (
            <div key={p.id} className="border p-4 rounded shadow hover:shadow-lg transition">
              <h2 className="text-lg font-semibold">{p.title}</h2>
              <p className="text-green-600 font-bold">${p.price}</p>
            </div>
          ))}
        </div>
      </>
    )
  }


export default App
