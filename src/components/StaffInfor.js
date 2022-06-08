import React from "react";
import "../index.css";
import dateFormat from "dateformat";

export default function StaffInfor(props) {
  if (props.staffs != null) {
    const { name } = props.staffs.department;
    return (
      <div className="staffInfor">
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
    );
  } else {
    return (
      <>
        <br></br>
        <div className="information">
          Bấm vào tên nhân viên để xem thông tin
        </div>
      </>
    );
  }
}
