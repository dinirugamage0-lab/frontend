function Pet(props) {
  return (
    <div className="pet-card">
      <h3>{props.name}</h3>
      <p>Type: {props.type}</p>
      <p>Price: Rs. {props.price}</p>
      <p>Stock: {props.stock}</p>

      <button>
        Add to Cart
      </button>
    </div>
  );
}


export default Pet;