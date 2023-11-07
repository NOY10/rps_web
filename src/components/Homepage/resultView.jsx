import React, { useEffect, useState } from "react";
import "./resultView.css";
function ResultView({ selectedModule }) {
  const [data, setData] = useState({});
  const apiUrl = "https://examcellflutter.000webhostapp.com/allStdResult.php";

  useEffect(() => {
    // Fetch data from the API URL
    fetch(apiUrl)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>Student Results</h2>

      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Module Code</th>
            <th>CA</th>
            <th>Practical</th>
            <th>Exam</th>
            <th>Total</th>
            <th>Credit</th>
            <th>Remarks</th>
          </tr>
        </thead>
        {Object.keys(data).map((studentId) => (
          <tbody>
            <tr key={studentId}>
              <td>{studentId}</td>
              <td>{data[studentId].name}</td>
              <td colSpan="4">
                <table>
                  <tbody>
                    {data[studentId].modules.map((module, index) => (
                      <tr key={index}>
                        <td>{module.code}</td>
                        <td>{module.ca}</td>
                        <td>
                          {module.practical !== null ? module.practical : "N/A"}
                        </td>
                        <td>{module.exam !== null ? module.exam : "N/A"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default ResultView;
