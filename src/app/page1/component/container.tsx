"use client";

import Link from "next/link";

export default function PageT1() {
  const handleClick = async () => {
    console.log("Hello from Page 1");

    try {
      if ((window as any)?.gtag) {
        await (window as any)?.gtag("event", "button_click");
      }
    } catch (error) {
      console.log(error);
    }
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
