import React from "react";

export default function Home() {
  return (
    <div className="mt-5 border container p-3 col-6  border-dark">
      <h1>Welcome!</h1>
      <h3>to view games, please click on the games link</h3>
      <img
        src="https://assets.xboxservices.com/assets/2b/d2/2bd239ef-b3a5-4b50-b5a5-ba6418012534.jpg?n=Xbox-360-Games_Feature-0_Back-Compat_1040x585_01.jpg"
        width={600}
        alt="xbox games picture"
      />
    </div>
  );
}
