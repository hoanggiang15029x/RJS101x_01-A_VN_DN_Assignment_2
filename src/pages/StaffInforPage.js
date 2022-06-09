import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import dateFormat from "dateformat";

export default function SalaryPage(props) {
  const { name } = props.staffs.department;
  return (
    <div>
      <h4>
        <Link to="/">Nhân Viên</Link> / {props.staffs.name}
      </h4>
      <div className="staffInfor">
        <img src={props.staffs.image} width="200px" />
        <div className="information">
          <p className="name">
            <b>Họ và tên: {props.staffs.name}</b>
          </p>
          <p>Ngày sinh: {dateFormat(props.staffs.doB, "dd/mm/yyyy")} </p>
          <p>
            Ngày vào công ty: {dateFormat(props.staffs.startDate, "dd/mm/yyyy")}
          </p>
          <p>Phòng ban: {name}</p>
          <p>Số ngày nghỉ còn lại: {props.staffs.overTime}</p>
          <p>Số ngày đã làm thêm: {props.staffs.annualLeave}</p>
        </div>
      </div>
    </div>
  );
}
