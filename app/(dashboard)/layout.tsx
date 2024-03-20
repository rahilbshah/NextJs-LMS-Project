import React from "react";
import Sidebar from "./_components/sidebar";
import Navbar  from "./_components/navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="md:pl-56 h-[80px] fixed inset-y-0 w-full z-50 ">
        <Navbar />
      </div>
      <div className="md:flex hidden h-full w-56 flex-col fixed z-50 ">
        <Sidebar />
      </div>
      <main className="md:pl-56 h-full">{children}</main>
    </div>
  );
};

export default DashboardLayout;
