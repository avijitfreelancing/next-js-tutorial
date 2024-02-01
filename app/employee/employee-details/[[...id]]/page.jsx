import React from "react";

export default function EmployeeList({ params }) {
  return <div>Employee-Details {params.id || "Not id Found"}</div>;
}
