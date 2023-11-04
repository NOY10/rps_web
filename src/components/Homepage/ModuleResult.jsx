import React from "react";

function ModuleResult({ selectedModule }) {
  return (
    <div>
      <p>Selected Module: {selectedModule.module}</p>
      <p>Module Code: {selectedModule.moduleCode}</p>
      <p>Year: {selectedModule.year}</p>
      <p>Department: {selectedModule.department}</p>
    </div>
  );
}

export default ModuleResult;
