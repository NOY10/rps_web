import React, { useState } from "react";
import "./yeardept.css";
import ModuleResult from "./ModuleResult";
import ResultView from "./resultView";

function YearDept({ department, year }) {
  const moduleData = {
    "First Year": {
      "BE(IT)": ["Module1", "Module2"],
      "BE(Electrical)": ["Module3", "Module4"],
      "BE(ECE)": ["Module3", "Module4"],
      "BE(Civil)": ["Module3", "Module4"],
      "B(Architecture)": ["Module3", "Module4"],
      "BE(Engineering Geology)": ["Module3", "Module4"],
      "BE(ICE)": ["Module3", "Module4"],
    },
    "Second Year": {
      "BE(IT)": ["Module1", "Module2"],
      "BE(Electrical)": ["Module3", "Module4"],
      "BE(ECE)": ["Module3", "Module4"],
      "BE(Civil)": ["Module3", "Module4"],
      "B(Architecture)": ["Module3", "Module4"],
      "BE(Engineering Geology)": ["Module3", "Module4"],
      "BE(ICE)": ["Module3", "Module4"],
    },
  };

  const moduleCodeData = {
    "First Year": {
      "BE(IT)": ["Code5", "Code5"],
      "BE(Electrical)": ["Code5", "Code5"],
      "BE(ECE)": ["Code5", "Code5"],
      "BE(Civil)": ["Code5", "Code5"],
      "B(Architecture)": ["Code5", "Code5"],
      "BE(Engineering Geology)": ["Code5", "Code5"],
      "BE(ICE)": ["Code5", "Code5"],
    },
    "Second Year": {
      "BE(IT)": ["Code5", "Code6"],
      "BE(Electrical)": ["Code5", "Code5"],
      "BE(ECE)": ["Code5", "Code5"],
      "BE(Civil)": ["Code5", "Code5"],
      "B(Architecture)": ["Code5", "Code5"],
      "BE(Engineering Geology)": ["Code5", "Code5"],
      "BE(ICE)": ["Code5", "Code5"],
    },
    // ... Define module code data for other years and departments
  };

  const [selectedModule, setSelectedModule] = useState(null);
  const [clickResultView, setclickResultView] = useState("");

  const modules = moduleData[year] && moduleData[year][department];
  const moduleCodes = moduleCodeData[year] && moduleCodeData[year][department];

  const handleModuleClick = (module, moduleCode) => {
    setSelectedModule({ module, moduleCode, year, department });
    setclickResultView("");
  };

  const viewResult = (module) => {
    setSelectedModule({ module, year, department });
    setclickResultView("click");
  };

  return (
    <div className="yeardeptContainer">
      <div className="yeardeptContainer_main">
        <div className="yeardeptContainer_left">
          <h2>Department: {department}</h2>
          <h2>Year: {year}</h2>
          {modules && moduleCodes ? (
            <div className="moduleContainer">
              {modules.map((module, index) => (
                <div
                  className="moduleinfo"
                  key={index}
                  onClick={() => handleModuleClick(module, moduleCodes[index])}
                >
                  <div className="modname">{module}</div>
                  <div className="modCode">{moduleCodes[index]}</div>
                </div>
              ))}

              <button className="viewResultButton" onClick={() => viewResult()}>
                View Result
              </button>
            </div>
          ) : (
            <p>No modules found for the selected department and year.</p>
          )}
        </div>
        <div className="yeardeptContainer_right">
          {clickResultView !== "click" ? (
            selectedModule && <ModuleResult selectedModule={selectedModule} />
          ) : (
            <ResultView selectedModule={selectedModule} />
          )}
        </div>
      </div>
    </div>
  );
}

export default YearDept;
