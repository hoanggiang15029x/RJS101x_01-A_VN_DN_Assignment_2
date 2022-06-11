import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import StaffList from "../components/StaffList";

export default function StaffPage({
  staffList,
  chooseStaff,
  onTextInputChange,
  findStaff,
}) {
  return (
    <>
      <div className="header_body">
        <Link className="link-staff" to="/">
          <p style={{ margin: "0" }}>
            <b>Nhân Viên</b>
          </p>
        </Link>
        <div>
          <input
            style={{ width: "300px", height: "20px" }}
            placeholder="Nhập tên cần tìm...."
            onChange={onTextInputChange}
          />
          <Link to="/find-staff">
            <button className="button-find" onClick={findStaff}>
              Tìm
            </button>
          </Link>
        </div>
      </div>
      <hr />
      <br />
      <StaffList staffList={staffList} chooseStaff={chooseStaff} />
    </>
  );
}
