import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import DeparmentList from "../components/DeparmentList";

export default function DepartmentPage({ deparmentList, chooseDeparment }) {
  return (
    <>
      <br />
      <div className="header_body">
        <Link className="link-staff" to="/department">
          <h2 style={{ margin: "0" }}>Phòng Ban</h2>
        </Link>
        <div style={{ marginTop: "15px" }}></div>
      </div>
      <br />
      <hr />
      <br />
      <DeparmentList
        deparmentList={deparmentList}
        chooseDeparment={chooseDeparment}
      />
    </>
  );
}
