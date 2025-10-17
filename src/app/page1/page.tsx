"use client";
export default function Page1() {
  const handleClick = () => {
    console.log("Hello from Page 1");
  };
  return (
    <div>
      <h1>Welcome to Page 1</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
