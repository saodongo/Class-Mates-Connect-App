import React from "react";
import PlantCard from "./StudentCard";
import StudentCard from "./StudentCard";

function StudentList({ plants }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        plant && <StudentCard plant={plant} />


      ))}
    </ul>
  );
}

export default StudentList;