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
      <br />
      <div className="header_body">
        <Link className="link-staff" to="/">
          <h2 style={{ margin: "0" }}>
            <b>Nhân Viên</b>
          </h2>
        </Link>
        <div style={{ marginTop: "15px" }}>
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
      <br />
      <hr />
      <br />
      <StaffList staffList={staffList} chooseStaff={chooseStaff} />
    </>
  );
}
