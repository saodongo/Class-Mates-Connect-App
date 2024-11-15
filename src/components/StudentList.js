import React from "react";
import StudentCard from "./StudentCard";

function StudentList({ students, onDeleteStudent, onUpdateStudent }) {
  return (
    <ul className="cards">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          onDeleteStudent={onDeleteStudent}
          onUpdateStudent={onUpdateStudent}
        />
      ))}
    </ul>
  );
}

export default StudentList;
