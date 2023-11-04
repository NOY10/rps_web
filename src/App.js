import React, { useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Homepage/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import YearDept from "./components/Homepage/yeardept";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [selectedDept, setSelectedDept] = useState(null);
  const [selectedyear, setSelectedYear] = useState(null);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const handleDeptSelection = (deptName, deptIndex) => {
    setSelectedDept(deptName);
    setSelectedYear(deptIndex);
    setOpenSidebarToggle(false);
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
        handleDeptSelection={handleDeptSelection}
      />
      <Routes>
        <Route exact path="/dashboard" element={<Home />} />
        <Route
          path="/department/:department"
          element={<YearDept handleDeptSelection={handleDeptSelection} />}
        />
        {selectedDept && (
          <Route
            exact
            path={`/department/${selectedDept}`}
            element={<YearDept department={selectedDept} year={selectedyear} />}
          />
        )}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </div>
  );
}
export default App;
