import React from "react";
import "../index.css";

export default function HeaderBottom() {
  return (
    <div className="header">
      <div className="header-top">
        <div className="header-left">
          <h3>Our Address</h3>
          <p>121, Clear Water Bay Road Clear Water Bay, Kowloon HONG KONG </p>
          <p>Phone :+852 1234 5678 - +852 8765 4321</p>
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
