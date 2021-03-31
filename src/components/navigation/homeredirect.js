import React from "react";
import { Link } from "react-router-dom";

function HomeRedirect(props) {
  return (
    <div>
      <Link
        to="/"
        style={{
          textDecoration: "none",
        }}
      >
        <h3>{props.webname}</h3>
      </Link>
    </div>
  );
}

export default HomeRedirect;
