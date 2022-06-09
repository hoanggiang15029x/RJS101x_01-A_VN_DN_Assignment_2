import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function Deparment({ deparment, chooseDeparment }) {
  let link = `/deparment-information/${deparment.id}`;
  return (
    <button
      className="staff button-deparment"
      onClick={() => chooseDeparment(deparment)}
    >
      <Link className="link-staff" to={link}>
        <h2>{deparment.name}</h2>
        <p style={{ marginLeft: 15 + "px" }}>
          Số lương nhân viên: {deparment.numberOfStaff}
        </p>
      </Link>
    </button>
  );
}
