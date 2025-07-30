import React from "react";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../context/appContext";

function Login() {
  const { isUserStarted, setIsUserStarted } = useAppContext();
  return (
    <div>
      <div>
        <img className="w-[100px] md:w-[150px]" src={assets.logo} alt="" />
        <div className="flex flex-col md:flex-row items-center justify-between mt-16 gap-8">
          {/* FORM FIRST */}
          <div className="w-full md:w-1/2">
            {isUserStarted ? (
              <div>
                <h1 className="mb-4 text-gray-600 md:text-3xl text-2xl font-bold">
                  Get Started With Us
                </h1>
                <p className="text-gray-500 font-bold text-sm">
                  Hello 👋 welcome to Bookly
                </p>

                <div className="mt-6">
                  <div className="mt-4">
                    <p className="text-gray-400 text-xs">Username</p>
                    <input
                      className="w-full p-2 border border-gray-200 bg-indigo-50 rounded-sm"
                      type="text"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-400 text-xs">Email address</p>
                    <input
                      className="w-full p-2 border border-gray-200 bg-indigo-50 rounded-sm"
                      type="email"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-400 text-xs">Password</p>
                    <input
                      className="w-full p-2 border border-gray-200 bg-indigo-50 rounded-sm"
                      type="password"
                    />
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <input type="checkbox" />
                  <p className="text-gray-400 text-xs">
                    I agree to the terms and conditions of Bookly.com
                  </p>
                </div>

                <button
                  onClick={() => setIsUserStarted(!isUserStarted)}
                  className="mt-4 bg-primary rounded-sm shadow-sm w-full py-2 text-white"
                >
                  Get Started
                </button>
                <p className="mt-6 text-xs">
                  Already have an account?{" "}
                  <a
                    href="#"
                    onClick={() => setIsUserStarted(!isUserStarted)}
                    className="text-primary "
                  >
                    Log in
                  </a>
                </p>
              </div>
            ) : (
              <div>
                <h1 className="mb-4 text-gray-600 md:text-3xl text-2xl font-bold">
                  Welcome Back!
                </h1>
                <p className="text-gray-500 font-bold text-sm">
                  Hello 👋 & welcome back!
                </p>

                <div className="mt-6">
                  <div className="mt-4">
                    <p className="text-gray-400 text-xs">Email address</p>
                    <input
                      className="w-full p-2 border border-gray-200 bg-indigo-50 rounded-sm"
                      type="email"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-400 text-xs">Password</p>
                    <input
                      className="w-full p-2 border border-gray-200 bg-indigo-50 rounded-sm"
                      type="password"
                    />
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <input type="checkbox" />
                  <p className="text-gray-400 text-xs">Remember me</p>
                </div>

                <button className="mt-4 bg-primary rounded-sm shadow-sm w-full py-2 text-white">
                  Login
                </button>

                <p className="mt-6 text-xs">
                  Dont have an account{" "}
                  <a
                    href="#"
                    onClick={() => setIsUserStarted(!isUserStarted)}
                    className="text-primary "
                  >
                    sign in
                  </a>
                </p>
              </div>
            )}
          </div>

          {/* IMAGE SECOND — STAYS RIGHT */}
          <div className="w-full md:w-1/2">
            <img
              className="w-full md:block md:w-[400px] hidden"
              src={assets.objects}
              alt="Bookly Illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
