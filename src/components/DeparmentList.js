import React from "react";
import "../index.css";
import Staff from "./Staff";

export default function DeparmentList({ deparmentList, chooseDeparment }) {
  return (
    <>
      {deparmentList.map((deparment) => (
        <Staff
          key={deparment.id}
          staff={deparment}
          chooseDeparment={chooseDeparment}
        />
      ))}
    </>
  );
}
