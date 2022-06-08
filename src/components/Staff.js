import React from "react";
import "../index.css";

export default function Staff({ staff, chooseStaff }) {
  return (
    <button className="staff" onClick={() => chooseStaff(staff)}>
      <img src={staff.image} alt="image not found" width="100%" height="100%" />

      <br></br>
      {staff.name}
    </button>
  );
}
