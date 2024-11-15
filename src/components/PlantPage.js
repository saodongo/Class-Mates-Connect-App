import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch plants from the JSON server
  useEffect(() => {
    fetch("http://localhost:3000/Class Mates")
      .then((response) => response.json())
      .then((data) => setPlants(data));
  }, []);

  // Add new plant to the server and state
  const addPlant = (newPlant) => {
    fetch("http://localhost:3000/Class Mates", {
      method: "POST",
      headers: { "Content-Type": "Application/JSON" },
      body: JSON.stringify(newPlant),
    })
      .then((response) => response.json())
      .then((plant) => setPlants([...plants, plant]));
  };

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search setSearchTerm={setSearchTerm} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;