import React from "react";
import "../index.css";
import Deparment from "./Deparment";

export default function DeparmentList({ deparmentList, chooseDeparment }) {
  return (
    <>
      {deparmentList.map((deparment) => (
        <Deparment
          key={deparment.id}
          deparment={deparment}
          chooseDeparment={chooseDeparment}
        />
      ))}
    </>
  );
}
