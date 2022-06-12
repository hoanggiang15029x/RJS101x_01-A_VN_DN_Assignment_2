import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import SalaryList from "../components/SalaryList";

export default function SalaryPage({ staffList }) {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div>
      <br />
      <div className="header_body">
        <Link className="link-staff" to="/salary">
          <h2 style={{ margin: "0" }}>Bảng Lương</h2>
        </Link>
        <div style={{ marginTop: "10px" }}>
          Sắp xếp lương theo:
          <select
            style={{
              width: "180px",
              marginLeft: "20px",
              height: "30px",
              borderRadius: "5px",
            }}
          >
            <option>Tên từ A đến Z</option>
            <option>Lương tăng dần</option>
            <option>Lương giảm dần</option>
          </select>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <SalaryList staffList={staffList} />
    </div>
  );
}
