import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function Staff({ staff, chooseStaff }) {
  let link = `/staff-information/${staff.id}`;
  return (
    <button className="staff button-staff" onClick={() => chooseStaff(staff)}>
      <Link className="link-staff" to={link}>
        <img
          src={staff.image}
          alt="image not found"
          width="100%"
          height="100%"
        />
        <br></br>
        {staff.name}
      </Link>
    </button>
  );
}
