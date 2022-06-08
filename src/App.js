import { Route, Routes } from "react-router-dom";
import "./index.css";
// import StaffInfor from "./components/StaffInfor";
// import { useState } from "react";
import HeaderBottom from "./components/HeaderBottom";
import Header from "./components/Header";
import StaffPage from "./pages/StaffPage";
import DepartmentPage from "./pages/DepartmentPage";
import SalaryPage from "./pages/SalaryPage";

function App() {
  return (
    <>
      <Header />
      <br />
      <br />
      <Routes>
        <Route path="/" element={<StaffPage />} />
        <Route path="/department" element={<DepartmentPage />} />
        <Route path="/salary" element={<SalaryPage />} />
      </Routes>
      {/* <StaffInfor staffs={staffs} /> */}
      <br></br>
      <HeaderBottom />
    </>
  );
}

export default App;
