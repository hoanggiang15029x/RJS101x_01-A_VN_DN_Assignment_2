import React from "react";
import "../index.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header-top">
        <div className="header-left">
          <h3>Our Address</h3>
          <p>121, Clear Water Bay Road Clear Water Bay, Kowloon HONG KONG </p>
          <p>Phone :+852 1234 5678 - +8528765 4321</p>
          <i class="fa fa-phone-4x" aria-hidden="true"></i>
          <p>Mail: confusion@food.net</p>
        </div>
        <div className="header-right">
          <h2>Hello</h2>
        </div>
      </div>
      <div className="header-bottom">
        <p>© Copyright 2018 Ristorante</p>
      </div>
    </div>
  );
}
