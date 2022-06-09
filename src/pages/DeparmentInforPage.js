import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import StaffList from "../components/StaffList";
import { STAFFS } from "../shared/staffs";

export default function DeparmentInforPage({ deparment, chooseStaff }) {
  const staffList = STAFFS;
  // const [listStaffOfDeparment, setListStaffOfDeparment] = React.useState([]);
  const listStaffOfDeparment = [];
  for (let staff of staffList) {
    if (staff.department.id === deparment.id) listStaffOfDeparment.push(staff);
  }
  return (
    <>
      <h3>
        <Link to="/department">Phòng Ban</Link> / {deparment.name}
      </h3>
      <hr />
      <br />
      <StaffList staffList={listStaffOfDeparment} chooseStaff={chooseStaff} />
    </>
  );
}
