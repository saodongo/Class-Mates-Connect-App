import React, { useState } from "react";

function NewStudentForm({ addStudent }) {
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
    const newStudent = {
      ...formData,
      price: formData.price
    };
    addStudent(NewStudentForm);
    setFormData({ name: "", image: "", price: "" });
  };

  return (
    <div className="new-student-form">
      <h2></h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="New Name"
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
          type="number"
          name="Age"
        
          placeholder="Age"
          value={formData.Age}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Name</button>
      </form>
    </div>
  );
}

export default NewStudentForm;