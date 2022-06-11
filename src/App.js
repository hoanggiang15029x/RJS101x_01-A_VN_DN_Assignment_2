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
  const deparmentList = DEPARTMENTS;

  const [staffList, setStaffList] = useState(STAFFS);
  const [staffs, setStaff] = useState(null);
  const [linkInfor, setLinkInfor] = useState("");

  const [deparment, setDeparment] = useState(null);
  const [linkDeparmentInfor, setLinkDeparmentInfor] = useState("");
  const [linkStaffOfDeparment, setLinkStaffOfDeparment] = useState("");

  const [textInput, setTextInput] = useState("");
  const [findStaffList, setFindStaffList] = useState(STAFFS);

  const chooseStaff = (staff) => {
    console.log(staff);
    const link = `/staff-information/${staff.id}`;
    <Link to={link} />;
    setStaff(staff);
    setLinkInfor(link);
    const link2 = `${linkDeparmentInfor}/${staff.id}`;
    setLinkStaffOfDeparment(link2);
  };

  const chooseDeparment = (deparment) => {
    const link = `/deparment-information/${deparment.id}`;
    <Link to={link} />;
    setDeparment(deparment);
    setLinkDeparmentInfor(link);
  };

  const onTextInputChange = (e) => {
    setTextInput(e.target.value);
  };

  const findStaff = () => {
    let listFindStaff = [];
    for (let staff of STAFFS) {
      if (staff.name === textInput) {
        listFindStaff.push(staff);
      }
    }
    console.log(listFindStaff);

    if (textInput == "") setFindStaffList(STAFFS);
    else setFindStaffList(listFindStaff);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <StaffPage
              staffList={staffList}
              chooseStaff={chooseStaff}
              onTextInputChange={onTextInputChange}
              findStaff={findStaff}
            />
          }
        />
        <Route
          path="/find-staff"
          element={
            <StaffPage
              staffList={findStaffList}
              chooseStaff={chooseStaff}
              onTextInputChange={onTextInputChange}
              findStaff={findStaff}
            />
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
