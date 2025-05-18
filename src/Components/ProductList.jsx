function ProductList(props) {
    const products = props.products; 
    
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
        {products.map((p) => (
          <div key={p.id} className="border p-4 rounded-lg shadow.md hover:shadow-xl transition-transform transform hover:-translate-y-1 bg-white">
            <h2 className="text-lg font-semibold text-gray-800">{p.title}</h2>
            <p className="text-green-600 font-bold mt-2">${p.price}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default ProductList;
  