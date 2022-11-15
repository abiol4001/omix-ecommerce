import React from 'react'
import Locations from './Locations';

const Inspo = () => {
    const images = [
      {
        id: 5,
        src: "Frame 5.png",
      },
      {
        id: 6,
        src: "Frame 6.png",
      },
      {
        id: 7,
        src: "Frame 7.png",
      },
      {
        id: 8,
        src: "Frame 8.png",
      },
      {
        id: 1,
        src: "Frame 1.png",
      },
      {
        id: 2,
        src: "Frame 2.png",
      },
      {
        id: 3,
        src: "Frame 3.png",
      },
      {
        id: 4,
        src: "Frame 4.png",
      },
    ];

  return (
    <div className='w-full pb-14'>
      <article className="flex flex-row bg-pink-800 justify-between items-center px-16 py-3 mt-20">
        <div className="flex items-center justify-center w-32">
          <img src="Mbtoken.svg" />
          <p className="text-white font-bold md:text-4xl">MBToken</p>
        </div>
        <div className="flex gap-2">
          <img src="Metamask-icon.svg" alt="" />
          <img className="w-32 md:h-10" src="Metamask.svg" />
        </div>
        <div className="flex gap-2 items-center">
          <img className="h-10" src="Opensea.svg" />
          <p className="text-white font-bold text-3xl">OpenSea</p>
        </div>
      </article>
      <div>
        <div className='mx-auto text-center mt-8'>
          <p className="text-[48px] font-[700]">
            Inspiration for your next adventure
          </p>
        </div>
        <div className="max-w-screen">
          <section className="w-[90%] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9 mt-[40px] mx-auto place-items-center">
            {images.map((image, id) => (
              <Locations key={image.id} img={image.src} />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}

export default Inspo