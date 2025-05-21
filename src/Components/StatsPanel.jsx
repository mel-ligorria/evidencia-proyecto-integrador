function StatsPanel(props) {
  return (
    <div className="bg-gray-100 p-6 shadow-md mb-6 max-w-3xl mx-auto rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Estadísticas</h2>
      <ul className="space-y-2 text-gray-800">
        <li>Productos Totales: <strong>{props.total}</strong></li>
        <li>Producto más caro: <strong>{props.max.title} (${props.max.price ?? 0})</strong></li>
        <li>Producto más barato: <strong>{props.min.title} (${props.min.price ?? 0})</strong></li>
        <li>Títulos largos (+20 caracteres): <strong>{props.longTitles}</strong></li>
        <li>Precio total: <strong>${props.totalPrice}</strong></li>
        <li>Promedio de descuento: <strong>{props.avgDiscount}%</strong></li>
      </ul>
    </div>
  );
}

export default StatsPanel;

  