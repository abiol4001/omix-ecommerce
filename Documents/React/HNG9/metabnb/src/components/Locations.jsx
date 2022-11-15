import React, {useState} from 'react'
import rating from "/rating.svg";
import Frame1 from "/Frame 1.png";
import { MdFavorite } from "react-icons/md";

const Locations = (props) => {
    const [fav, setFav] = useState(false);
    const handleFav = () => {
      setFav(!fav);
    };
  return (
  
        <div className="md:w-[292px] md:h-[372px] w-[322px] h-[400px] rounded-[15px] border-solid border-2  border-gray-200 overflow-hidden">
          <div className="relative md:w-[260px] md:h-[265px] w-[290px] h-[290px] rounded-[15px] mt-4 mx-auto hover:scale-105 duration-300 cursor-pointer">
            <img src={props.img} alt="frame--1" className="w-[100%]" />
            <div className="flex justify-between text-[#434343] my-2">
              <p className="text-[12px]">Desert king</p>
              <p className="text-[12px] font-bold">1MBT per night</p>
            </div>
            <div className="flex justify-between text-[#434343] mb-2">
              <p className="text-[12px] ">2345km away</p>
              <p className="text-[12px]">available for 2weeks stay</p>
            </div>
            <div>
              <img src={rating} alt="rating" className='cursor-pointer' />
            </div>
            <MdFavorite
              size={30}
              className="absolute top-2 right-1 ease-in-out duration-500 cursor-pointer"
              color={`${fav ? `red` : `#D7D7D7`}`}
              onClick={handleFav}
            />
          </div>
        </div>
  );
}

export default Locations