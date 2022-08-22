import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";


const Demo = () => {
  const course = "Computer Science - Modules table."
  const modules = [
    {
      name: "DevOps",
      lectures: 2,
      practicals: 3
    },
    {
      name: "Web App",
      lectures: 1,
      practicals: 4
    }
  ]
  return (
    <div>
    <h2>{course}</h2>
    <table className="table table-bordered">
      <thead>
        <tr>
          <td>Modules</td>
          <td>Lectures</td>
          <td>Practicals</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{modules[0].name}</td>
          <td>{modules[0].lectures}</td>
          <td>{modules[0].practicals}</td>
        </tr>
        <tr>
          <td>{modules[1].name}</td>
          <td>{modules[1].lectures}</td>
          <td>{modules[1].practicals}</td>
        </tr>
      </tbody>
    </table>
  </div>
  );
};

export default Demo;
