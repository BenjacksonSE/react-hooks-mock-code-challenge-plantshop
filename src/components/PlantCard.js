import React, { useState } from "react";

function PlantCard({ plant, onDeletePlant, onUpdatePlant }) {
  const { name, image, price, id } = plant;

  const [inStock, setInStock] = useState(true);
  const [updatedPrice, setUpdatedPrice] = useState(price);

  function handleStock() {
    setInStock(!inStock);
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    });
    onDeletePlant(id);
  }

  function handlePriceUpdateSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price: updatedPrice }),
    })
      .then((response) => response.json())
      .then((updatedPlant) => {
        onUpdatePlant(updatedPlant);
      })
      .catch((error) => console.log(error));
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={handleStock}>
          In Stock
        </button>
      ) : (
        <button onClick={handleStock}>Out of Stock</button>
      )}
      <button onClick={handleDeleteClick}>Delete</button>
      <form onSubmit={handlePriceUpdateSubmit}>
        <input className="card__inputForm"
          type="number"
          step="0.01"
          placeholder="New price..."
          value={updatedPrice}
          onChange={(e) => setUpdatedPrice(parseFloat(e.target.value).toFixed(2))}
        />
        <button type="submit">Update Price</button>
      </form>
    </li>
  );
}

export default PlantCard;
