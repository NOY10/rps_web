import React from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";
import { HiMiniAcademicCap, HiBellAlert } from "react-icons/hi2";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
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
        <li className="sidebar-list-item">
          <a href="">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <HiMiniAcademicCap className="icon" /> Academic year
          </a>
        </li>
        <ul>
          <li className="sidebar-list-item">
            <a href="">
              <BsPeopleFill className="icon" /> First Year
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="">
              <BsPeopleFill className="icon" /> Second Year
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="">
              <BsPeopleFill className="icon" /> Third Year
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="">
              <BsPeopleFill className="icon" /> Fourth Year
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="">
              <BsPeopleFill className="icon" /> Fifth Year
            </a>
          </li>
        </ul>
        <li className="sidebar-list-item">
          <a href="">
            <BsMenuButtonWideFill className="icon" /> Re-Evaluation
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <HiBellAlert className="icon" /> Re-Evaluation
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGearFill className="icon" /> Setting
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
