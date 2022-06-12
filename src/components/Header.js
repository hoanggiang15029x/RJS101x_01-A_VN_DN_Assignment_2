import { Route, Routes, Link } from "react-router-dom";
import React from "react";
import "../index.css";

export default function Header({ staff }) {
  return (
    <>
      <div className="header-home">
        <nav>
          <ul>
            <li>
              <Link className="link" to="/">
                <i className="bi bi-file-person-fill" /> Nhân Viên
              </Link>
            </li>
            <li>
              <Link className="link" to="/department">
                <i className="bi bi-card-list" /> Phòng Ban
              </Link>
            </li>
            <li>
              <Link className="link" to="/salary">
                <i className="bi bi-currency-dollar" /> Bảng Lương
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
