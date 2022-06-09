import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import DeparmentList from "../components/DeparmentList";

export default function DepartmentPage({ deparmentList, chooseDeparment }) {
  return (
    <>
      <Link className="link-staff" to="/department">
        <h2>Phòng Ban</h2>
      </Link>
      <hr />
      <br />
      <DeparmentList
        deparmentList={deparmentList}
        chooseDeparment={chooseDeparment}
      />
    </>
  );
}
