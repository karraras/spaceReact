import React from "react";
import moon from "../assets/image-moon.png";
const Home = () => {
  return (
    <div className="flex  flex-col items-center   lg:flex-row  ">
      <div className="md:px-14 px-0 py-8 flex-1 flex p-0 lg:flex-initial flex-col items-center w-full lg:w-1/2">
        <div className="w-full">
          <h1 className="text-white mb-5 text-left my-12">
            01 PICK YOUR DESTINATION
          </h1>
        </div>
        <img src={moon} alt="" className=" w-52 " />
      </div>
      <div className="flex-1 pt-20 flex flex-col items-center w-9/12 text-center lg:w-1/2">
        <ul className="text-white flex -mx-2">
          <li className="py-2  mx-2">MOON</li>
          <li className="py-2  mx-2">MARS</li>
          <li className="py-2  mx-2">EUROPA</li>
          <li className="py-2  mx-2">TITAN</li>
        </ul>
        <h1 className="text-white text-6xl my-5">MOON</h1>
        <p className="text-slate-400 mb-9">
          See our planet as you've never ssen it before. A perfect relaxing trip
          away to hero regain perspective and come back refreshed. While you're
          therwe, take in some history by vistiting the Luna 2 and Apollo 11
          landing sites.
        </p>
        <div className="flex mt-5 border-t border-slate-400 pt-9  w-full justify-center  flex-col lg:flex-row">
          <div className="text-white lg:mr-14 mb-10">
            <p className="text-slate-400">Avg.distance</p>
            <h1>384,400 KM</h1>
          </div>
          <div className="text-white lg:ml-14">
            <p className="text-slate-400">Est,travel time </p>
            <h1>3 DAYS</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
