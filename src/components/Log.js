import React from "react";

function Log(props) {
  let date = props.timestamp instanceof Date ? props.timestamp : new Date(props.timestamp),
      match = date.toUTCString().match(", (.*) GMT"),
      formattedDate = match ? match[1]: 'unknown';

  return (
    <div className="postman-log">
      <div className="pId">{props.pId}</div>
      <div className="timestamp">{formattedDate}</div>
      <div className="process">{props.process}</div>
      <div className="level">{props.level}</div>
      <div className="message">{props.message}</div>
    </div>
  );
}

export default Log;
