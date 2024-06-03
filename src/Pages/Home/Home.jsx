import React from "react";


const Home = () => {
  return (
    <div className=" flex flex-col justify-center items-center bg-[url('/bg-main.jpg')] bg-cover bg-center h-screen">
      <div className='flex flex-col justify-center items-center'>
        <h1 className=" text-3xl md:text-7xl md:tracking-wide text-white font-bold pt-20">AMARA <span className="text-[#D31010]">LA MUÑECA POSEIDA</span></h1>
        <p className="text-[#D31010] text-lg md:text-5xl pt-5">MAPA TRANSMEDIA</p>
      </div>
      <div className="p-8 mt-5 mx-4 rounded-2xl bg-[#00000080] backdrop-blur-sm">
        <img src="./mapa.png" alt="map" className='w-[750px]' />
      </div>
    </div>
  );
};

export default Home;
