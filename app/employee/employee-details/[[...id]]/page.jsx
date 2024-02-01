import React from "react";

export default function EmployeeList({ params }) {
  console.log("params", params);

  return <div>Employee-Details {params.id || "Not id Found"}</div>;
}
