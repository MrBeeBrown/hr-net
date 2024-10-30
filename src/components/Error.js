import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <h1 className="error__h1">404</h1>
      <p className="error__p">Page Not Found</p>
      <Link to="/">Home</Link>
    </>
  )
}

export default Error;