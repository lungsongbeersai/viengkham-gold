import React, { useState } from 'react'

function Login() {

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <>
      <div className="mx-auto mt-4 mb-4 flex w-full flex-col items-center justify-center px-4 sm:mt-16 sm:max-w-md">
        <div className="w-[290px] rounded border border-gray-300 bg-white shadow-lg sm:w-[350px]">

          <div className="my-8 space-y-2 text-center">
            <div className="text-center justify-center">
             <center><img src="../assets/img/logo/logo.png" className='w-25 text-center' alt="" /></center> 
            </div>
            <h1 className="old pt-1 text-2xl">Sign In</h1>
          </div>
          <div className="space-y-8 px-3 pb-10">
            <form className="space-y-6">
              <div className="relative z-0 w-full">
                <input
                  type="text"
                  className="peer focus:border-primary-600 block w-full  border-t-0 border-r-0 border-l-0 border-b-2 border-gray-400 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:outline-none focus:ring-0"
                  placeholder=" " />
                <label for="sign-in-email" className="peer-focus:text-primary-600 absolute top-2 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                >Email address <span className="font-semibold text-red">*</span></label>
              </div>
              <div className="relative z-0 w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  className="peer block w-full border-t-0 border-r-0 border-l-0 border-b-2 border-gray-400 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:outline-none focus:ring-0"
                  placeholder=" " />
                <span className="hover:text-primary-800 absolute inset-y-0 right-0 float-right flex cursor-pointer items-center p-1 pr-3 pl-3 text-xs" onClick={togglePasswordVisibility}
                >
                  {showPassword ? "ປິດ" : "ສະແດງ"}</span >
                <label for="sign-in-password"
                  className="peer-focus:text-primary-600 absolute top-2 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                >Password <span className="font-semibold text-red">*</span></label>
              </div>
              <div className="flex justify-between text-sm">
                <div className="flex items-center">
                  <input
                    aria-describedby="checkout-remember-me"
                    type="checkbox"
                    className="nk-checkbox-input"
                  />
                  <label for="checkout-remember-me" className="nk-checkbox-label">Remember me</label>
                </div>
                <div>
                </div>
              </div>
              <button className="btn-gradient btn-full">Sign In</button>
              <div className="flex w-full flex-row items-center">
                <span className="w-2/5 border-b"></span>
                <span className="w-1/5 text-center">or</span>
                <span className="w-2/5 border-b"></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login