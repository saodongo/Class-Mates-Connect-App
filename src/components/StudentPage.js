import React, { useState, useEffect } from "react";
import NewStudentForm from "./NewStudentForm";
import StudentList from "./StudentList";
import Search from "./Search";

function StudentPage() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/Class Mates")
      .then((response) => response.json())
      .then((data) => setStudents(data));
  }, []);

  const addStudent = (newStudent) => {
    fetch("http://localhost:3000/Class Mates", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newStudent),
    })
      .then((response) => response.json())
      .then((student) => setStudents([...students, student]));
  };

  const updateStudent = (updatedStudent) => {
    fetch(`http://localhost:3000/Class Mates/${updatedStudent.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedStudent),
    })
      .then((response) => response.json())
      .then(() =>
        setStudents(
          students.map((student) =>
            student.id === updatedStudent.id ? updatedStudent : student
          )
        )
      );
  };

  const deleteStudent = (id) => {
    fetch(`http://localhost:3000/Class Mates/${id}`, {
      method: "DELETE",
    }).then(() => setStudents(students.filter((student) => student.id !== id)));
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewStudentForm addStudent={addStudent} />
      <Search setSearchTerm={setSearchTerm} />
      <StudentList
        students={filteredStudents}
        onDeleteStudent={deleteStudent}
        onUpdateStudent={updateStudent}
      />
    </main>
  );
}

export default StudentPage;
