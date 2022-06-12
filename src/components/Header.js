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
                <i className="bi-class-name"> Nhân Viên</i>
              </Link>
            </li>
            <li>
              <Link className="link" to="/department">
                Phòng Ban
              </Link>
            </li>
            <li>
              <Link className="link" to="/salary">
                Bảng Lương
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
