import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [plantName, setPlantName] = useState("");
  const [plantImage, setPlantImage] = useState("");
  const [plantPrice, setPlantPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: plantName,
        image: plantImage,
        price: plantPrice.toFixed(2),
      }),
    })
      .then((response) => response.json())
      .then((newPlant) => onAddPlant(newPlant));
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={plantName}
          onChange={(e) => setPlantName(e.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={plantImage}
          onChange={(e) => setPlantImage(e.target.value)}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={plantPrice}
          onChange={(e) => setPlantPrice(parseFloat(e.target.value))}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
