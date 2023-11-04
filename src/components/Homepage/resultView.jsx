import React from "react";

function ResultView({ selectedModule }) {
  return (
    <div>
      <p>Year: {selectedModule.year}</p>
      <p>Department: {selectedModule.department}</p>
    </div>
  );
}

export default ResultView;
