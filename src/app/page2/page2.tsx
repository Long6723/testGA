"use client";
export default function Page2() {
  const handleClick = () => {
    console.log("Hello from Page 2");
  };
  return (
    <div>
      <h1>Welcome to Page 2</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
