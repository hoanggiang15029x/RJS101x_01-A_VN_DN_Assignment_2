import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import SalaryList from "../components/SalaryList";

export default function SalaryPage({ staffList }) {
  return (
    <div>
      <Link className="link-staff" to="/salary">
        <h2>Bảng Lương</h2>
      </Link>
      <hr />
      <br />
      <SalaryList staffList={staffList} />
    </div>
  );
}
