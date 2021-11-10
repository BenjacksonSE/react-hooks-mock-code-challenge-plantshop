import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantArray, onDeletePlant, onUpdatePlant }) {
  const renderPlants = plantArray.map((plant) => {
    return (
      <PlantCard
        key={plant.id}
        plant={plant}
        onDeletePlant={onDeletePlant}
        onUpdatePlant={onUpdatePlant}
      />
    );
  });

  return <ul className="cards">{renderPlants}</ul>;
}

export default PlantList;
