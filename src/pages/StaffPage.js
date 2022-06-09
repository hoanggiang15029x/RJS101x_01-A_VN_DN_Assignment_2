import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import StaffList from "../components/StaffList";

export default function StaffPage({ staffList, chooseStaff }) {
  return (
    <>
      <Link className="link-staff" to="/">
        <h2>Nhân Viên</h2>
      </Link>
      <hr />
      <br />
      <StaffList staffList={staffList} chooseStaff={chooseStaff} />
    </>
  );
}
