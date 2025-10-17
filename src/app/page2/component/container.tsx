"use client";

import Link from "next/link";

export default function PageT2() {
  const handleClick = async () => {
    console.log("Hello from Page 2");

    try {
      if ((window as any)?.gtag) {
        await (window as any)?.gtag("event", "button_click", "page2_button");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Welcome to Page 2</h1>
      <button onClick={handleClick}>Click Me</button>
      <br />
      <Link href="/page1">Go to Page 1</Link>
    </div>
  );
}
