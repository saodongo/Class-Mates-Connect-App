import React, { useState } from "react";

function NewStudentForm({ addStudent }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(formData);
    setFormData({ name: "", image: "", age: "" });
  };

  return (
    <div className="new-student-form">
      <h2>Add New Classmate</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
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
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Classmate</button>
      </form>
    </div>
  );
}

export default NewStudentForm;
