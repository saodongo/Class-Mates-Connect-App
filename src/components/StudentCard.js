import React, { useState } from "react";

function StudentCard({ student, onDeleteStudent, onUpdateStudent }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(student);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateStudent(formData);
    setIsEditing(false);
  };

  return (
    <li className="card">
      <img src={student.image} alt={student.name} />
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <h4>{student.name}</h4>
          <p>Age: {student.age}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDeleteStudent(student.id)}>Delete</button>
        </>
      )}
    </li>
  );
}

export default StudentCard;
