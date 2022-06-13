import React from "react";
import "../index.css";

export default function HeaderBottom() {
  return (
    <div className="header">
      <div className="header-top">
        <div className="header-left">
          <h3>Our Address</h3>
          <p>121, Clear Water Bay Road Clear Water Bay, Kowloon HONG KONG </p>
          <p>
            <i className="bi bi-telephone-fill" />: +852 1234 5678 - +852 8765
            4321
          </p>
          <p>
            <i className="bi bi-envelope-fill" />: confusion@food.net
          </p>
        </div>
        <div className="header-right">
          <img
            src="/assets/images/gg.png"
            width="40px"
            style={{ borderRadius: "5px" }}
            alt=""
          />
          <img
            src="/assets/images/fb.png"
            width="40px"
            style={{ borderRadius: "5px" }}
            alt=""
          />
          <img
            src="/assets/images/in.png"
            width="40px"
            style={{ borderRadius: "5px" }}
            alt=""
          />
          <img
            src="/assets/images/tw.png"
            width="40px"
            style={{ borderRadius: "5px" }}
            alt=""
          />
          <img
            src="/assets/images/ytb.png"
            width="40px"
            style={{ borderRadius: "5px" }}
            alt=""
          />
        </div>
      </div>
      <div className="header-bottom">
        <p>© Copyright 2018 Ristorante</p>
      </div>
    </div>
  );
}
