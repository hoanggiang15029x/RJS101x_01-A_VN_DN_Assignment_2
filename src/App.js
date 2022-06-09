import { Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import "./index.css";
import HeaderBottom from "./components/HeaderBottom";
import Header from "./components/Header";
import StaffPage from "./pages/StaffPage";
import DepartmentPage from "./pages/DepartmentPage";
import SalaryPage from "./pages/SalaryPage";
import StaffInforPage from "./pages/StaffInforPage";
import { STAFFS } from "./shared/staffs";

function App() {
  const [staffs, setStaff] = useState(null);
  const [linkInfor, setLinkInfor] = useState("");

  const staffList = STAFFS;
  console.log(staffList);

  const chooseStaff = (staff) => {
    console.log(staff);
    let link = `/staff-information/${staff.id}`;
    <Link to={link} />;
    setStaff(staff);
    setLinkInfor(link);
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
        <Route path="/department" element={<DepartmentPage />} />
        <Route path="/salary" element={<SalaryPage />} />
        <Route path={linkInfor} element={<StaffInforPage staffs={staffs} />} />
      </Routes>
      <br></br>
      <HeaderBottom />
    </>
  );
}

export default App;
