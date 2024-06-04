import React, { useState } from "react";
import MovieModal from "../../components/Modal/MovieModal";


const Movie = () => {
  const images = [
    {
      name: "Iván Suárez",
      image: "/movieIvanSuarez.png",
    },
    {
      name: "Valeria García",
      image: "/movieValeriaGarcia.png",
    },
    {
      name: "Jhanna Torres",
      image: "/movieJhannaTorres.png",
    },
    {
      name: "Maximo Martinez",
      image: "/movieMaximoMartinez.png",
    },
    {
      name: "Amara",
      image: "/amara.png",
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className=" flex flex-col justify-between md:justify-center items-center bg-[url('/bg-main.jpg')] bg-cover bg-center h-screen">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-7xl xl:text-6xl 2xl:text-8xl md:tracking-wide text-[#D31010] text-shadow-white text-center font-bold pt-20">
          AMARA LA MUÑECA POSEIDA:{" "}
          <span className="text-[#D31010] text-shadow-white">EL ORIGEN</span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center p-4 m-4 rounded-2xl bg-[#00000080] backdrop-blur-sm md:w-[80%] ">
        <img
          src="/cd-cover.png"
          alt="movie"
          className=" w-[50%] md:w-[50%] floating-image"
        />
        <div className="flex flex-col md:flex-row justify-around items-center w-full h-full md:gap-8">
          <p className="text-white text-base text-justify md:text-4xl text-shadow-red md:w-full xl:text-2xl 2xl:text-4xl">
            Un grupo de amigos, Iván Suárez, Valeria García y Jhanna Torres,
            decide jugar a la ouija en una casa abandonada. Durante el juego,
            invocan a un demonio que posee el cuerpo de Iván, quien luego
            asesina a Valeria y Jhanna. En busca de ayuda, Iván acude a un
            sacerdote para que le realice un exorcismo en la misma casa
            abandonada con el objetivo de cerrar el portal. Aunque creen haber
            cerrado el portal, el demonio se traslada al cuerpo de una muñeca.
          </p>
          <button
            className="text-white md:text-2xl p-2 mx-2 rounded-lg bg-[#D31010] hover:bg-white hover:text-[#D31010] duration-200 ease"
            onClick={() => setOpen(true)}
          >
            Personajes
          </button>
          <MovieModal open={open} onClose={() => setOpen(false)}>
            <div className="grid grid-cols-2 gap-4 xl:flex xl:flex-wrap xl:justify-between xl:items-center ">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`flex flex-col justify-start items-center rounded-xl mt-1 ${
                    index === images.length - 1 ? "col-span-2" : ""
                  }`}
                >
                  <img
                    src={image.image}
                    alt={image.name}
                    className="w-[100px] h-[100px] xl:w-[180px] xl:h-[200px] object-cover rounded-xl border border-red-900"
                  />
                  <h2 className="text-[#D31010] text-base md:text-2xl text-center">
                    {image.name}
                  </h2>
                </div>
              ))}
            </div>
          </MovieModal>
        </div>
      </div>
    </div>
  );
};

export default Movie;

// si le agrego el boton de personajes

{
  /* <div className=" flex flex-col justify-between md:justify-center items-center bg-[url('/bg-main.jpg')] bg-cover bg-center h-screen">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-7xl xl:text-6xl 2xl:text-8xl md:tracking-wide text-[#D31010] text-shadow-white text-center font-bold pt-20">
          AMARA LA MUÑECA POSEIDA:{" "}
          <span className="text-[#D31010] text-shadow-white">EL ORIGEN</span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center p-4 m-4 rounded-2xl bg-[#00000080] backdrop-blur-sm md:w-[80%] ">
        <img src="/cd-cover.png" alt="movie" className=" w-[50%] md:w-[50%] floating-image" />
        <div className="flex flex-col md:flex-row justify-around items-center w-full h-full md:gap-8">
          <p className="text-white text-base text-justify md:text-4xl text-shadow-red md:w-full xl:text-2xl 2xl:text-4xl">
            Un grupo de amigos, Iván Suárez, Valeria García y Jhanna Torres,
            decide jugar a la ouija en una casa abandonada. Durante el juego,
            invocan a un demonio que posee el cuerpo de Iván, quien luego asesina a Valeria y Jhanna. En busca de ayuda, Iván acude a un sacerdote para que le realice un exorcismo en la misma casa abandonada con el objetivo de cerrar el portal. Aunque creen haber cerrado el portal, el demonio se traslada al cuerpo de una muñeca.
          </p>
          <button className="text-white md:text-2xl p-2 mx-2 rounded-lg bg-[#D31010] hover:bg-white hover:text-[#D31010] duration-200 ease">Personajes</button>
        </div>
      </div>
        
    </div> */
}

// sin el boton de personajes

// <div className=" flex flex-col justify-between md:justify-center items-center bg-[url('/bg-main.jpg')] bg-cover bg-center h-screen">
// <div className="flex flex-col justify-center items-center">
//   <h1 className="text-3xl md:text-7xl xl:text-6xl 2xl:text-8xl md:tracking-wide text-[#D31010] text-shadow-white text-center font-bold pt-20">
//     AMARA LA MUÑECA POSEIDA:{" "}
//     <span className="text-[#D31010] text-shadow-white">EL ORIGEN</span>
//   </h1>
// </div>
// <div className="flex flex-col md:flex-row items-center p-4 mt-4 mx-4 rounded-2xl bg-[#00000080] backdrop-blur-sm md:w-[80%] ">
//   <img src="/cd-cover.png" alt="movie" className=" w-[75%] md:w-[50%] floating-image" />
//   <p className="text-white text-base text-justify md:text-4xl text-shadow-red md:w-full xl:text-2xl 2xl:text-4xl">
//     Un grupo de amigos, Iván Suárez, Valeria García y Jhanna Torres,
//     decide jugar a la ouija en una casa abandonada. Durante el juego,
//     invocan a un demonio que posee el cuerpo de Iván, quien luego asesina a Valeria y Jhanna. En busca de ayuda, Iván acude a un sacerdote para que le realice un exorcismo en la misma casa abandonada con el objetivo de cerrar el portal. Aunque creen haber cerrado el portal, el demonio se traslada al cuerpo de una muñeca.
//   </p>
// </div>
// </div>
