import React from "react";
import "./Divider.css";

const Divider = ({ children }) => {
  return (
    <>
      <br />
      <div class="divider-component">{children}</div>
      <br />
    </>
  );
};

export default Divider;
