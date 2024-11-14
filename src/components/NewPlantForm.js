import React, { useState } from "react";

function NewPlantForm({ addPlant }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlant = {
      ...formData,
      price: formData.price
    };
    addPlant(newPlant);
    setFormData({ name: "", image: "", price: "" });
  };

  return (
    <div className="new-plant-form">
      <h2></h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="class Mate Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          required
        />
        <input
          type="male"
          name="Age"
          step="0.01"
          placeholder="Age"
          value={formData.Age}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Names</button>
      </form>
    </div>
  );
}

export default NewPlantForm;