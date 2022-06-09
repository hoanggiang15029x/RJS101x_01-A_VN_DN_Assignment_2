import { Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import "./index.css";
import HeaderBottom from "./components/HeaderBottom";
import Header from "./components/Header";
import StaffPage from "./pages/StaffPage";
import DepartmentPage from "./pages/DepartmentPage";
import SalaryPage from "./pages/SalaryPage";
import StaffInforPage from "./pages/StaffInforPage";
import DeparmentInforPage from "./pages/DeparmentInforPage";
import { STAFFS, DEPARTMENTS } from "./shared/staffs";

function App() {
  const staffList = STAFFS;
  console.log(staffList);
  const deparmentList = DEPARTMENTS;
  console.log(deparmentList);

  const [staffs, setStaff] = useState(null);
  const [linkInfor, setLinkInfor] = useState("");

  const chooseStaff = (staff) => {
    console.log(staff);
    const link = `/staff-information/${staff.id}`;
    <Link to={link} />;
    setStaff(staff);
    setLinkInfor(link);
    const link2 = `${linkDeparmentInfor}/${staff.id}`;
    setLinkStaffOfDeparment(link2);
  };

  const [deparment, setDeparment] = useState(null);
  const [linkDeparmentInfor, setLinkDeparmentInfor] = useState("");
  const [linkStaffOfDeparment, setLinkStaffOfDeparment] = useState("");

  const chooseDeparment = (deparment) => {
    const link = `/deparment-information/${deparment.id}`;
    <Link to={link} />;
    setDeparment(deparment);
    setLinkDeparmentInfor(link);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <StaffPage staffList={staffList} chooseStaff={chooseStaff} />
          }
        />
        <Route
          path="/department"
          element={
            <DepartmentPage
              deparmentList={deparmentList}
              chooseDeparment={chooseDeparment}
            />
          }
        />
        <Route path="/salary" element={<SalaryPage staffList={staffList} />} />
        <Route path={linkInfor} element={<StaffInforPage staffs={staffs} />} />
        <Route
          path={linkDeparmentInfor}
          element={
            <DeparmentInforPage
              deparment={deparment}
              chooseStaff={chooseStaff}
            />
          }
        />
        <Route
          path={linkStaffOfDeparment}
          element={<StaffInforPage staffs={staffs} deparment={deparment} />}
        />
      </Routes>
      <br></br>
      <HeaderBottom />
    </>
  );
}

export default App;
