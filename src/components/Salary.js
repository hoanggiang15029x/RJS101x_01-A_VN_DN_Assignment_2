import React from "react";
import "../index.css";

export default function Salary({ staff }) {
  let salary = staff.salaryScale * 3000000 + staff.overTime * 200000;
  return (
    <button className="button-salary">
      <h2>{staff.name}</h2>
      <div style={{ marginLeft: 8 + "%", marginBottom: 30 + "px" }}>
        <p>Mã nhân viên: {staff.id}</p>
        <p>Hệ số lương: {staff.salaryScale}</p>
        <p>Số ngày làm thêm: {staff.overTime}</p>
        <p className="salary">Lương: {parseInt(salary)}</p>
      </div>
    </button>
  );
}
