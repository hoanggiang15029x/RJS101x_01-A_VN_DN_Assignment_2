import React from "react";
import "../index.css";
import Salary from "./Salary";

export default function SalaryList({ staffList }) {
  return (
    <>
      {staffList.map((staff) => (
        <Salary key={staff.id} staff={staff} />
      ))}
    </>
  );
}
