import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { Shopcontext } from "../context/Shopcontext";
import Adminnavbar from "./Adminnavbar";
const Adminhome = () => {
  const { usercount, product } = useContext(Shopcontext);
  return (
    <div className="flex flex-row h-screen">
      <Adminnavbar />
      <div className="flex-1 flex flex-col items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-8 max-w-7xl w-full text-center">
          <h1 className="text-3xl font-bold mb-8 text-black">
            Admin Dashboard
          </h1>
          <div className="flex flex-wrap justify-around">
            <div className="p-4 bg-gray-600 rounded-lg shadow-md w-1/3 mx-2 transition-transform duration-300 hover:scale-110">
              <Link to="/adminuser">
                <h2 className="text-xl font-bold mb-2 text-white">
                  Total Users
                </h2>
                <p className="text-2xl font-bold text-white">
                  {usercount.length}
                </p>
              </Link>
            </div>
            <div className="p-4 bg-gray-600 rounded-lg shadow-md w-1/3 mx-2 transition-transform duration-300 hover:scale-110">
              <Link to="/adminproduct">
                <h2 className="text-xl font-bold mb-2 text-white">
                  Total Products
                </h2>
                <p className="text-2xl font-bold text-white">
                  {product.products.length}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminhome;
