import Locations from "./Locations";
import images from "./images";
import {IoMdOptions} from "react-icons/io"

const Places = () => {
  const locations = [
    {
      id: 1,
      place: "Restaurant",
    },
    {
      id: 2,
      place: "Cottage",
    },
    {
      id: 3,
      place: "Castle",
    },
    {
      id: 4,
      place: "Fantast city",
    },
    {
      id: 5,
      place: "beach",
    },
    {
      id: 6,
      place: "Carbins",
    },
    {
      id: 7,
      place: "Off-grid",
    },
    {
      id: 8,
      place: "Farm",
    },
  ];
  return (
    <div className="py-[100px] max-w-screen mx-auto">
      <div className="mx-auto">
        <div className="">
          <div className="flex flex-wrap mx-auto w-[100%] items-center justify-center">
            {locations.map(({ place, id, index }) => (
              <a
                href="#"
                key={id}
                className={`text-[#434343] text-[15px] sm:text-[16px] md:text-[20px] ${
                  index === locations.length - 1 ? `mr-0` : `mr-3 md:mr-8`
                } hover:text-opacity-70`}
              >
                {place}
              </a>
            ))}

            <div className="flex items-center gap-4 rounded-[8px] px-4 py-2 border-2">
              <button className="">Location</button>
              <IoMdOptions  />
            </div>
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
    </div>
  );
};

export default Places;
