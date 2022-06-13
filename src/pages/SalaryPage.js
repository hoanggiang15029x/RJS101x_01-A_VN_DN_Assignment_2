import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { STAFFS } from "../shared/staffs";
import SalaryList from "../components/SalaryList";

export default function SalaryPage() {
  const [salaryList, setSalaryList] = useState([...STAFFS]);

  // choose setting
  const changeSetting = (e) => {
    let list = [...STAFFS];
    console.log("hello:", e.target.value);
    if (e.target.value === "salary-up") {
      list = sortSalaryByUp(list);
    } else if (e.target.value === "salary-down") {
      list = sortSalaryByDown(list);
    }
    setSalaryList([...list]);
  };

  // sort up
  function sortSalaryByUp(arraySalary) {
    for (let i = 0; i < arraySalary.length; i++) {
      for (let j = i; j < arraySalary.length; j++) {
        let salaryI =
          arraySalary[i].salaryScale * 3000000 +
          arraySalary[i].overTime * 200000;
        let salaryJ =
          arraySalary[j].salaryScale * 3000000 +
          arraySalary[j].overTime * 200000;
        if (salaryI > salaryJ) {
          let tamp = arraySalary[i];
          arraySalary[i] = arraySalary[j];
          arraySalary[j] = tamp;
        }
      }
    }
    return arraySalary;
  }

  // sort down
  function sortSalaryByDown(arraySalary) {
    for (let i = arraySalary.length - 1; i >= 0; i--) {
      for (let j = i; j >= 0; j--) {
        let salaryI =
          arraySalary[i].salaryScale * 3000000 +
          arraySalary[i].overTime * 200000;
        let salaryJ =
          arraySalary[j].salaryScale * 3000000 +
          arraySalary[j].overTime * 200000;
        if (salaryI > salaryJ) {
          let tamp = arraySalary[i];
          arraySalary[i] = arraySalary[j];
          arraySalary[j] = tamp;
        }
      }
    }
    return arraySalary;
  }

  return (
    <div>
      <br />
      <div className="header_body">
        <Link className="link-staff" to="/salary">
          <h2 style={{ margin: "0" }}>Bảng Lương</h2>
        </Link>
        <div style={{ marginTop: "10px" }}>
          Sắp xếp lương theo:
          <select
            onChange={changeSetting}
            id="setting"
            style={{
              width: "180px",
              marginLeft: "20px",
              height: "30px",
              borderRadius: "5px",
            }}
          >
            <option value="salary">Mặc định</option>
            <option value="salary-up">Lương tăng dần</option>
            <option value="salary-down">Lương giảm dần</option>
          </select>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <SalaryList staffList={salaryList} />
    </div>
  );
}
