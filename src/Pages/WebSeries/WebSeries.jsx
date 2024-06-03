import React from 'react'

const WebSeries = () => {
  return (
    <div className=" flex flex-col justify-center items-center bg-[url('/bg-main-reverse.png')] bg-cover bg-center h-screen">
    <div className='flex flex-col justify-center items-center'>
      <h1 className=" text-3xl md:text-7xl md:tracking-wide text-white font-bold pt-20 text-shadow-red">HISTORIA <span className="text-[#D31010] text-shadow-white">NUCLEAR</span></h1>
     
    </div>
    <div className=" p-4 mt-4 mx-4 rounded-2xl bg-[#00000080] backdrop-blur-sm md:w-[50%]">
       <p className="text-white text-base text-justify md:text-4xl text-shadow-red">La familia Rodríguez se muda a una casa nueva. Al llegar, Mía, de 7 años, encuentra una muñeca de felpa llamada Amara, que está poseída por un demonio. Mía pide a sus padres, Kamila Hernández y Fabio Rodríguez, quedarse con la muñeca, y ellos aceptan. Rápidamente, Mía forma un vínculo con Amara. Con el tiempo, Amara persuade a Mía para que mate a sus padres y a su hermana, Alice Rodríguez. Mía logra matar a sus padres, pero Alice intenta escapar y avisa a la policía. Sin embargo, la policía y el psicólogo no creen la historia de Alice y piensan que ella es la culpable de los asesinatos. Finalmente, un juez decide que Mía sea adoptada por una nueva familia.</p>
    </div>
  </div>
  )
}

export default WebSeries