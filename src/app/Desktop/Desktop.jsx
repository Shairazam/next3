import React from "react";
import Navbar from "@/layout/Header/Navbar";
import MainPage from "./Mainpage/MainPage";
import Sidebar from "./SideBar/Siderbar";

const Desktop = () => {
  return (
    <div className="w-full flex h-auto items-start bg-[#011828]">
      <div className="md:block hidden w-[250px] h-auto  border-r-2 border-r-[#81898E] ">
        <Sidebar />
      </div>
      <div className="w-[90%]  h-auto ">
        <Navbar />
        <MainPage />
      </div>
    </div>
  );
};

export default Desktop;
