import React from "react";

function LogHeader() {
  return (
    <div className="table-header">
      <div className="pId">Process ID</div>
      <div className="timestamp">Time</div>
      <div className="process">Process</div>
      <div className="level">Level</div>
      <div className="message">Message</div>
    </div>
  );
}

export default LogHeader;
