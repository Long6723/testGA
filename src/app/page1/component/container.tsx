"use client";

import Link from "next/link";

export default function PageT1() {
  const handleClick = () => {
    console.log("Hello from Page 1");
  };
  return (
    <div>
      <h1>Welcome to Page 1</h1>
      <button onClick={handleClick}>Click Me</button>
      <br />
      <Link href="/page2">Go to Page 2</Link>
    </div>
  );
}
