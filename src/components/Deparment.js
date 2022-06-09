import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function Deparment({ deparment, chooseDeparment }) {
  let link = `/deparment-information/${deparment.id}`;
  return (
    <button className="staff" onClick={() => chooseDeparment(deparment)}>
      <Link className="link-staff" to={link}>
        {deparment.name}
      </Link>
    </button>
  );
}
