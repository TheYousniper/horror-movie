import React from "react";

const Movie = () => {
  return (
    <div className=" flex flex-col justify-between md:justify-center items-center bg-[url('/bg-movie.png')] bg-cover bg-center h-screen">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-7xl md:tracking-wide text-[#D31010] text-shadow-white text-center font-bold pt-20">
          AMARA LA MUÑECA POSEIDA:{" "}
          <span className="text-[#D31010] text-shadow-white">EL ORIGEN</span>
        </h1>
      </div>
      <div className=" p-4 mt-4 mx-4 rounded-2xl bg-[#00000080] backdrop-blur-sm md:w-[50%]">
        <p className="text-white text-base text-justify md:text-4xl text-shadow-red">
          Un grupo de amigos, Iván Suárez, Valeria García y Jhanna Torres,
          decide jugar a la ouija en una casa abandonada. Durante el juego,
          invocan a un demonio que posee el cuerpo de Iván, quien luego asesina
          a Valeria y Jhanna. En busca de ayuda, Iván acude a un sacerdote para
          que le realice un exorcismo en la misma casa abandonada con el
          objetivo de cerrar el portal. Aunque creen haber cerrado el portal, el
          demonio se traslada al cuerpo de una muñeca.
        </p>
      </div>
    </div>
  );
};

export default Movie;
