import React, { useState } from "react";

function StudentCard({ plant, onDeletePlant, onUpdateAge }) {
  const [NotAvailable, setNotAvailable] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    id: plant.id,
    name: plant.name,
    age: plant.age,
    image: plant.image,
  });

  function handleToggleAvailability() {
    setNotAvailable(!NotAvailable);
  }

  function handleDelete() {
    fetch(`http://localhost:3000/plants/${plant.id}`, {
      method: "DELETE",
    }).then(() => onDeletePlant(plant.id));
  }

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/plants/${formData.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: formData.id,
        name: formData.name,
        age: parseFloat(formData.age),
        image: formData.image,
      }),
    })
      .then((response) => response.json())
      .then((updatedPlant) => {
        onUpdateAge(updatedPlant);
        setIsEditing(false);
      });
  }

  return (
    <li className="card">
      <img src={plant.image} alt={`${plant.id} ${plant.name}`} />
      {isEditing ? (
        <form onSubmit={handleFormSubmit} className="edit-form">
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleInputChange}
            placeholder="ID"
          />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
          />
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            placeholder="Image URL"
          />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            placeholder="Age"
          />
          <button type="submit">Save</button>
          <button type="button" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </form>
      ) : (
        <>
          <h4>
            {plant.id} {plant.name}
          </h4>
          <p>Age: {plant.age}</p>
          <button
            onClick={handleToggleAvailability}
            className={NotAvailable ? "" : "primary"}
          >
            {NotAvailable ? "Not Available" : "Available"}
          </button>
          <button onClick={handleEditClick} className="edit-button">
            Edit
          </button>
          <button onClick={handleDelete} className="delete-button">
            Delete
          </button>
        </>
      )}
    </li>
  );
}

export default StudentCard;
