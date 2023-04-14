import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import { logo, menu, search, thirdweb } from "../assets";
import { navlinks } from "../constants";

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setisActive] = useState("dashboard");
  const [toggleDrawer, settoggleDrawer] = useState(false);
  const address = "0xabc";

  return (
    <div className="flex items-center">
      <div className="flex md:flex-row flex-col-reverse justify-between  gap-6 sm:w-1/2 py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px]">
        <input
          type="text"
          placeholder="search for campaigns"
          className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none
    "
        />
        <div className="w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer">
          <img
            src={search}
            alt="search"
            className="w-[50px] h-[15px] object-contain"
          />
        </div>
      </div>
      <div className="sm:flex ml-auto items-center hidden flex-row justify-end gap-4">
        <CustomButton
          btnType="button"
          title={address ? "Create a campaign" : "Connect"}
          styles={address ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
          handleClick={() => {
            if (address) {
              navigate("/create-campaign");
            } else "connect()";
          }}
        />
        <Link to="/profile">
          <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
            <img
              src={thirdweb}
              alt="user"
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
        </Link>
      </div>
      {/* small screen navigation */}
      <div className="sm:hidden flex justify-between items-center relative w-full">
        <div className="w-[40px] h-[40px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
          <img
            src={thirdweb}
            alt="user"
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
        <img
          src={menu}
          alt="menu"
          className="w-[34px] h-[34px] object-contain cursor-pointer "
          onClick={() => settoggleDrawer(toggleDrawer=>!toggleDrawer)}
        />
        <div
          className={`rounded-md absolute top-[60px] w-full right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 ${
            !toggleDrawer ? "-translate-y-[100vh]" : "translate-y-0"
          } transition-all duration-700`}
        >
          <ul className="mb-4">
            {navlinks.map((link) => (
              <li
                key={link.name}
                className={`flex p-2 ${
                  isActive === link.name && "bg-[#3a3a43]"
                } cursor-pointer`}
                onClick={() => {
                  setisActive(link.name);
                  settoggleDrawer(false);
                  navigate(link.link);
                }}
              >
                <img
                  className={`px-3 w-[24px] h-[24px] object-contain ${
                    isActive === link.name ? "grayscale-0" : "grayscale"
                  }`}
                  src={link.imgUrl}
                  alt={link.name}
                />
                <p
                  className={`p-3 font-semibold font-epilogue text-[14px] ${
                    isActive === link.name ? "text-[#1dc071]" : "text-[#808191]"
                  }`}
                >
                  {link.name}
                </p>
              </li>
            ))}
          </ul>

          <div className="flex mx-4">
            <CustomButton
              btnType="button"
              title={address ? "Create a campaign" : "Connect"}
              styles={address ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
              handleClick={() => {
                if (address) {
                  navigate("/create-campaign");
                } else "connect()";
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
