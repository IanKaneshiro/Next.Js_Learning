import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h1>Error page couldn't be found</h1>
      <Link href="/">Return Home?</Link>
    </div>
  );
};

export default NotFound;
