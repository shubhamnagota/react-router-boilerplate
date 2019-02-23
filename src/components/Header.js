import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/login">Login</Link> |{" "}
      <Link to="/dashboard">Dashboard</Link> |{" "}
      <Link to="unknownRoute">Unknown Route</Link>
    </div>
  );
}
