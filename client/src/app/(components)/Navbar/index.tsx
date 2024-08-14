"use client";
import React from "react";
import { Bell, Menu, Settings, Sun } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full mb-7">
      {/* left side */}
      <div className="flex justify-between items-center gap-5">
        <button
          className="px-3 py-3 bg-gray-200 rounded-lg hover:bg-blue-100 "
          onClick={() => {}}
        >
          <Menu className="h-4 w-4" />
        </button>
        <div className="relative">
          <input
            type="text"
            placeholder="Search type to search group & products"
            className="pl-10 pr-4 py-2 w-50 md:w-80 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <Bell className="text-gray-500" size={20} />
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex justify-between items-center gap-5">
        <div className="hidden md:flex justify-between items-center gap-5">
          <div className="cursor-pointer">
            <button
              className="px-3 py-3 rounded-lg hover:bg-blue-100 "
              onClick={() => {}}
            >
              <Sun className="text-gray-500" size={20} />
            </button>
          </div>
          <div className="relative">
            <button
              className="px-3 py-3 rounded-lg hover:bg-blue-100 "
              onClick={() => {}}
            >
              <Bell className="text-gray-500" size={20} />
            </button>
          </div>
          <hr className="w-0 h-7 border border-solid border-lg border-gray-300 mx-3" />
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-9 h-9">image</div>
            <span className="font-semibold">benjamin</span>
          </div>
        </div>
        <Link href="/settings">
          <Settings className="text-gray-600" size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
