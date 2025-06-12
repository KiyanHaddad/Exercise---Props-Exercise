function InventoryItem({ name, type, quantity = 0, price = 0 }) {
  const totalValue = quantity * price;

  return (
    <div>
      <h2>{name} ({type})</h2>
      <p>Quantity: {quantity}</p>
      <p>Price: ${price.toFixed(2)}</p>

      {quantity < 5 && (
        <Message> Low stock! Only {quantity} left.</Message>
      )}

      {totalValue > 1000 && (
        <Message> High value item! Total: ${totalValue.toFixed(2)}</Message>
      )}
    </div>
  );
}
