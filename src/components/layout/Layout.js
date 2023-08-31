import React from "react";

import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="w-full min-h-screen flex flex-col items-center font-Quicksand overflow-hidden">
      <Header />
      <main className="w-full flex-1">
        <div className="max-w-6xl h-full mx-auto py-10 px-5">{children}</div>
      </main>
    </div>
  );
}

export default Layout;
