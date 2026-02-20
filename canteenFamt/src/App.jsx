export default function App() {
  return (
    <>
      <div className="main">
        <div className="h-[10dvh] w-full bg-[#0F6657] flex justify-between items-center py-[2rem] px-[4rem]">
          <h1 className="text-[1.8vw] font-bold text-[#F8FAFC]">
            FAMT<span className="text-[#FBA808]">CANTEEN</span>
          </h1>

          <div className="flex gap-5 text-[#FBA808] font-medium h-[10dvh]">
            <button className="px-4 py-1 text-[1.2vw] border-b-3 border-transparent hover:border-b-[#EF8E91]">Login</button>
            <button className="px-4 py-1 text-[1.2vw] border-b-3 border-transparent hover:border-b-[#EF8E91]">Sign Up</button>
          </div>
        </div>

        <div className="bg-[#F8FAFC] h-[calc(100dvh-10dvh)]  flex flex-col justify-center items-center">
          <div className="bg-[#0F6657] w-[23vw] pt-[2vw] rounded-[0.6vw]">
            <h1 className="text-[1.7vw] leading-[2.5vw] mb-[1.2vw] pl-[2.2vw] font-semibold text-[#F8FAFC]">
              Sign in to <br />
              FAMT<span className="text-[#FBA808]">CANTEEN</span>
            </h1>

            <div className="bg-[#F8FAFC] rounded-[0.4vw] flex flex-col gap-4 p-[1.5vw] m-[1.3vw] pt-[2vw]">
              <div>
                <h2 className="text-[1vw] mb-[0.6vw] font-[400] text-gray-500">Username</h2>
                <input
                  type="text"
                  className="bg-gray-200 w-[100%] p-[0.6vw] text-[0.8vw] rounded-lg outline-none"
                />
              </div>

              <div>
                <h2 className="text-[1vw] mb-[0.6vw] font-[400] text-gray-500">Password</h2>
                <input
                  type="password"
                  className="bg-gray-200 w-[100%] p-[0.6vw] text-[0.8vw] rounded-lg outline-none"
                />
              </div>

              <button className="bg-[#FBA808]  p-[0.52vw] rounded-lg text-[1vw] text-[#F8FAFC]">
                Sign in
              </button>

              <div>
                <h2 className="text-[1vw] text-center font-medium text-[#0F6657]">
                  Forgot Password?
                </h2>
              </div>
            </div>

            <div className="mt-[2vw] mb-[1vw] text-center">
              <h1 className="text-[0.85vw] text-[#F8FAFC]">
                Don't have an account?{" "}
                <span className="font-[600] text-[#FBA808]">Sign up</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}