import React, { useState } from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsPeopleFill,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";
import { GiWhiteBook } from "react-icons/gi";

import { HiMiniAcademicCap, HiBellAlert } from "react-icons/hi2";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar({ openSidebarToggle, OpenSidebar, handleDeptSelection }) {
  const [academicYears, setAcademicYears] = useState([
    {
      year: "First Year",
      departments: [
        "BE(Civil)",
        "BE(Electrical)",
        "BE(ECE)",
        "BE(IT)",
        "B(Architecture)",
        "BE(Engineering Geology)",
        "BE(ICE)",
      ],
    },
    {
      year: "Second Year",
      departments: [
        "BE(Civil)",
        "BE(Electrical)",
        "BE(ECE)",
        "BE(IT)",
        "B(Architecture)",
        "BE(Engineering Geology)",
        "BE(ICE)",
      ],
    },
    {
      year: "Third Year",
      departments: [
        "BE(Civil)",
        "BE(Electrical)",
        "BE(ECE)",
        "BE(IT)",
        "B(Architecture)",
        "BE(Engineering Geology)",
        "BE(ICE)",
      ],
    },
    {
      year: "Fourth Year",
      departments: [
        "BE(Civil)",
        "BE(Electrical)",
        "BE(ECE)",
        "BE(IT)",
        "B(Architecture)",
        "BE(Engineering Geology)",
        "BE(ICE)",
      ],
    },
    {
      year: "Fifth Year",
      departments: ["B(Architecture)"],
    },
  ]);

  const [activeYear, setActiveYear] = useState(null);
  const [activeDept, setActiveDept] = useState(null);

  const handleYearClick = (year) => {
    if (activeYear === year) {
      // If the year is already active, clicking again should close it
      setActiveYear(null);
      setActiveDept(null); // Close active department if year is closed
    } else {
      setActiveYear(year);
    }
  };

  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> Exam Cell
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <Link to="/dashboard">
          <li className="sidebar-list-item">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </li>
        </Link>
        <li className="sidebar-list-Ayear">
          <HiMiniAcademicCap className="icon" /> Academic year
          <ul className="yearlist">
            {academicYears.map((yearData, index) => (
              <li className="sidebar-list-yearList" key={index}>
                <a
                  className="sidebar-list-year"
                  onClick={() => handleYearClick(yearData.year)}
                >
                  <BsPeopleFill className="icon" /> {yearData.year}
                </a>
                {activeYear === yearData.year && (
                  <ul>
                    {yearData.departments.map((department, deptIndex) => (
                      <Link to={`/department/${department}`}>
                        <li
                          className={`sidebar-list-dept ${
                            activeDept === department ? "active" : ""
                          }`}
                          key={deptIndex}
                          onClick={() => {
                            handleDeptSelection(department, activeYear);
                            setActiveDept(department);
                          }}
                        >
                          {department}
                        </li>
                      </Link>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </li>
        <Link to="/reevaluation">
          <li className="sidebar-list-item">
            <BsMenuButtonWideFill className="icon" /> Re-Evaluation
          </li>
        </Link>
        <Link to="/setting">
          <li className="sidebar-list-item">
            <BsFillGearFill className="icon" /> Setting
          </li>
        </Link>
      </ul>
    </aside>
  );
}

export default Sidebar;
