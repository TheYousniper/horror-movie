import React from 'react'

const Book = () => {
  return (
    <div className=" flex flex-col justify-center items-center bg-[url('/bg-main-reverse.png')] bg-cover bg-center h-screen">
    <div className='flex flex-col justify-center items-center'>
      <h1 className=" text-3xl md:text-7xl md:tracking-wide text-[#D31010] text-shadow-white text-center font-bold pt-20 ">AMARA LA MUÑECA POSEIDA: <span className="text-[#D31010] text-shadow-white">LA BUSQUEDA</span></h1>
     
    </div>
    <div className="flex flex-col md:flex-row items-center p-4 mt-4 mx-4 rounded-2xl bg-[#00000080] backdrop-blur-sm md:w-[70%] ">
    <img src="/libro.png" alt="movie" className=" w-[75%] md:w-[50%]" />
       <p className="text-white text-[15px] text-justify md:text-4xl text-shadow-red">Han pasado 5 años desde lo sucedido con Mía Rodríguez. Ahora vive en una nueva casa con sus padres adoptivos, José Perales y María Coveñas, y su hermanastro, Hugo Perales. Con el tiempo, Alice es dada de alta y visita a su hermana Mía, gracias a la intervención de su psicólogo, Gerardo Ruiz, quien ha estado tratando su caso. Amara, la muñeca, intenta nuevamente convencer a Mía y ahora también a Alice de asesinar a su hermanastro. Esta vez, la muñeca no solo manipula a Mía, sino también a Alice, logrando que ambas maten a Hugo. Después del asesinato, las hermanas Rodríguez escapan de la casa.</p>
    </div>
  </div>
  )
}

export default Book