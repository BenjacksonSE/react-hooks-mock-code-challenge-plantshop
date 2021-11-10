import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantArray, setPlantArray] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlantArray(data));
  }, []);

  function handleAddPlant(newPlant) {
    const updatedPlantArray = [...plantArray, newPlant];
    setPlantArray(updatedPlantArray);
  }

  function handleDeletePlant(id) {
    const updatedPlantArray = plantArray.filter((plant) => plant.id !== id);
    setPlantArray(updatedPlantArray);
  }

  function handleUpdatePlant(updatedPlant) {
    const updatedPlantArray = plantArray.map((plant) => {
      if (plant.id === updatedPlant.id) {
        return updatedPlant;
      }
      return plant;
    });
    setPlantArray(updatedPlantArray);
  }

  const displayPlants = plantArray.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search setSearch={setSearch} search={search} />
      <PlantList
        plantArray={displayPlants}
        onDeletePlant={handleDeletePlant}
        onUpdatePlant={handleUpdatePlant}
      />
    </main>
  );
}

export default PlantPage;
