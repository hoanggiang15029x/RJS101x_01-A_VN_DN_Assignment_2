import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import StaffList from "../components/StaffList";

export default function StaffPage({ staffList, chooseStaff }) {
  return (
    <>
      <div className="header_body">
        <Link className="link-staff" to="/">
          <p style={{ margin: "0" }}>
            <b>Nhân Viên</b>
          </p>
        </Link>
        <input style={{ width: "300px" }} />
      </div>
      <hr />
      <br />
      <StaffList staffList={staffList} chooseStaff={chooseStaff} />
    </>
  );
}
