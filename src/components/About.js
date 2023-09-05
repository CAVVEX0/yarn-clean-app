import React from "react";
import { Img3 } from "../assets";

const About = () => {
  return (
    <div className=" h-[860px] w-full ">
      <div className="relative container w-full h-full mx-auto mt- flex flex-col lg:flex-row  justify-between items-center">
        <div className=" w-screen h-full flex items-center ">
          <div className="right -ml-[3rem] py-[11rem] w-full lg:w-[80%] h-[75%] bg-[#fcf5f5] px-[4rem]">
            <div className="flex flex-col w-[80%] p-4 mb-6 justify-center  h-full space-y-4">
              <h1 className="text-[#62acef]">About Us</h1>
              <h2 className="text-[4rem] leading-[72px] font-primary font-base">
                Beauty That’s <br /> Natural
              </h2>
              <p className="font-tertiary text-black/60 w-[80%]">
                I know everything about massage. I know what kinds of massage
                may benefit every client. I communicate with clients throughout
                session to find what works best for them. <br /> <br /> As a
                wholesaler and distributor, we can offer you the lowest prices
                guaranteed no matter what other’s are offering. By all means, if
                there is a product another company is advertising for less on
                the same exact products as well as the manufacturers name of the
                products, we will match it or even beat it.
              </p>
            </div>
            <button className="btn btn-lg btn-primary ml-4 mt-28 ">
              Read more
            </button>
          </div>
        </div>
        <div className="left w-[580px] h-[700px] bg-blue-200 lg:absolute -right-[2rem]">
          <div className="h-full w-full ">
            <img className="w-full h-full object-cover" src={Img3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
