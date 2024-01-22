import React from "react";
import { Link } from "react-router-dom";

function LogIn() {
  return (
    <div className="h-screen overflow-hidden">
      <div className="bg-emerald-400 px-2 py-2">
        <img
          className="h-12 px- rounded-xl"
          src="https://akm-img-a-in.tosshub.com/lingo/itne/images/story/202206/guvi_logo.png"
        />
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-blue-400 rounded-xl  w-[28rem]  ">
          <div className="align-center mx-auto flex flex-col">
            <p className="text-2xl font-bold text-black flex justify-center items-center mt-8">
              LogIn
            </p>
            <form className="px-12 text-black py-6 space-y-5">
              <input
                type="email"
                className=" font-semibold px-4 py-2 rounded-md w-[22rem]"
                placeholder="Email"
              />
              <input
                type="password"
                className=" font-semibold px-4 py-2 rounded-md w-[22rem]"
                placeholder="Password"
              />
              <div>
                <Link
                  to="/home"
                  className="bg-blue-900 text-white font-semibold px-4 py-2 rounded-md w-[22rem] "
                >
                  LogIn
                </Link>
              </div>
              <p className="flex justify-center">
                Don't Have an Account?
                <Link to="/" className="font-semibold pl-1">
                  {" "}
                  SignUp
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
