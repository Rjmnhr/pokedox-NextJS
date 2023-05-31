import Head from "next/head";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-400">
      <main className="container mx-auto max-w-xl pt-8 min-h-screen ">
        {children}
      </main>
    </div>
  );
};

export default Layout;
