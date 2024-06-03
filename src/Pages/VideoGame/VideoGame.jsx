import React from "react";

const VideoGame = () => {
  return (
    <div className=" flex flex-col justify-center items-center bg-[url('/bg-main-reverse.png')] bg-cover bg-center h-screen">
      <div className="flex flex-col justify-center items-center">
        <h1 className=" text-3xl md:text-7xl md:tracking-wide text-[#D31010] text-shadow-white text-center font-bold pt-20 ">
          AMARA LA MUÑECA POSEIDA:{" "}
          <span className="text-[#D31010] text-shadow-white">EL DESPERTAR</span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center p-4 mt-4 mx-4 rounded-2xl bg-[#00000080] backdrop-blur-sm md:w-[70%] ">
      <img src="/juego.png" alt="movie" className=" w-[75%] md:w-[50%] floating-image" />
        <p className="text-white text-base text-justify md:text-4xl text-shadow-red">
          Los jugadores tomarán el control de las hermanas para poder escapar
          fuera de la ciudad y esconderse de la policía ellas podrán esconderse
          en diferentes lugares como casas y podrán usar uso de sus poderes de
          posesión de cuerpo. Donde el jugador toma el control de la policía e
          investigadores los cuales tendrán que usar armamentos de captura y
          también el otro rol de investigación trabajar en equipo para poder
          ubicar y capturar a las hermanas y a la muñeca.
        </p>
      </div>
    </div>
  );
};

export default VideoGame;
