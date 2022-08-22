import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = () => {
  return (
    <div>
    <h2>Computer Science - Modules table</h2>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Module</th>
          <th>Lectures</th>
          <th>Practicals</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>DevOps</td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Enterprise Web Dev</td>
          <td>1</td>
          <td>4</td>
        </tr>
      </tbody>
    </table>
  </div>
  );
};

export default Demo;
