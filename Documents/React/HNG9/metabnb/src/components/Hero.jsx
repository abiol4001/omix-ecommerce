import React from 'react'

const Hero = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row py-14 justify-between px-14 lg:mt-20">
      <div className="lg:w-[58%] h-full px-5 md:px-10 flex flex-col justify-center place-self-center">
        <p className="text-[45px] md:text-[56px] text-[#434343] leading-[78px]">
          Rent a <span className="text-[#A02279]">Place</span> away from{" "}
          <span className="text-[#A02279]">Home</span> in the{" "}
          <span className="text-[#A02279]">Metaverse</span>
        </p>
        <p className="text-[24px] my-11">
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        <div>
          <input
            type="text"
            name=""
            id="location"
            className="border border-[#A3A3A3] rounded-tl-[8px] rounded-bl-[8px] p-4 w-2/3 placeholder-[#B8B8B8] text-gray-600 outline-none focus:border-blue-400"
            placeholder="search for location"
          />
          <button className="border border-[#A02279] rounded-tr-[8px] rounded-br-[8px] p-4 bg-gradient-to-r from-[#A02279] to-[#A02279] text-white w-1/3">
            Search
          </button>
        </div>
      </div>
      <div className="flex h-[500px] gap-3 mb-5 p-3 justify-center ">
        <div className="place-self-end flex flex-col gap-3">
          <img src="image 4.png" alt="" className="w-[234px] h-[176px]" />
          <img src="image 6.png" alt="" className="w-[234px] h-[176px]" />
        </div>
        <div className="place-self-center flex flex-col gap-3">
          <img src="image 3.png" alt="" className="w-[234px] h-[176px]" />
          <img src="image 5.png" alt="" className="w-[234px] h-[176px]" />
        </div>
      </div>
    </div>
  );
}

export default Hero