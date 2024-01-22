import React from "react";
import AccessibleIcon from "@mui/icons-material/Accessible";
import { Link } from "react-router-dom";

function NewUser() {
  return (
    <div className="h-screen overflow-hidden">
      <div className="bg-emerald-400 px-2 py-2 flex justify-between ">
        <img
          className="h-12 px- rounded-xl"
          src="https://akm-img-a-in.tosshub.com/lingo/itne/images/story/202206/guvi_logo.png"
        />
        <div>
          <p className="ml-10">GST NO: 33AAFCG7941Q121</p>{" "}
          <p>CIN NO:U74120TN2014PTC097963</p>
        </div>
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-blue-400 rounded-xl  w-[28rem]  ">
          <div className="align-center mx-auto flex flex-col">
            <p className="text-2xl font-bold text-black flex justify-center items-center mt-8">
              SignUp
            </p>
            <form className="px-12 text-black py-6 space-y-5">
              <input
                type="text"
                className=" font-semibold px-4 py-2 rounded-md w-[22rem]"
                placeholder="Name"
              />
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
              <input
                type="password"
                className=" font-semibold px-4 py-2 rounded-md w-[22rem]"
                placeholder="Confirm Password"
              />
              <div>
                <Link
                  to="/login"
                  className="bg-blue-900 text-white font-semibold px-4 py-2 rounded-md w-[22rem] "
                >
                  SignUp
                </Link>
                {/* <div className='flex justify-between'>
            <p></p><p>b</p>
          </div> */}
              </div>
              <p className="flex justify-center">
                Already Have an Account?
                <button className="font-semibold pl-1"> LogIn</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewUser;
