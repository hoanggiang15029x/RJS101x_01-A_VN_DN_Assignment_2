import { Link } from "react-router-dom";
import "../index.css";
import StaffList from "../components/StaffList";

export default function StaffPage({
  staffList,
  chooseStaff,
  onTextInputChange,
  findStaff,
}) {
  return (
    <>
      <br />
      <div className="header_body">
        <Link className="link-staff" to="/">
          <h2 style={{ margin: "0" }}>Nhân Viên</h2>
        </Link>
        <div style={{ marginTop: "10px" }}>
          <input
            style={{ width: "200px", height: "20px" }}
            placeholder="Nhập tên cần tìm...."
            onChange={onTextInputChange}
          />
          <Link to="/find-staff">
            <button className="button-find" onClick={findStaff}>
              <i className="bi bi-search" /> Tìm
            </button>
          </Link>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <StaffList staffList={staffList} chooseStaff={chooseStaff} />
    </>
  );
}
