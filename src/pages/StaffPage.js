import React from "react";
import { Route, Routes } from "react-router-dom";
import "../index.css";
import StaffList from "../components/StaffList";
import { STAFFS } from "../shared/staffs";

// import StaffInfor from "./components/StaffInfor";
// import { useState } from "react";

export default function StaffPage() {
  // const [staffs, setStaff] = useState(null);
  const staffList = STAFFS;
  console.log(staffList);
  const chooseStaff = (staff) => {
    console.log(staff);
    // setStaff(staff);
  };
  return (
    <>
      <StaffList staffList={staffList} chooseStaff={chooseStaff} />
    </>
  );
}
