import bcg from "../assets/ltbg.webp";
import bld from "../assets/bld.png";

const Home = () => {
  return (
    <div className=" relative w-full h-screen" style={{ backgroundImage: `url(${bcg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
      <div className="hidden md:block absolute left-1/12 top-1/4 min-w-86 min-h-auto bg-black/30 border-2 border-white rounded-2xl">
        <div className="flex flex-col items-center m-4">
          <h1 className="text-3xl font-bold text-white mt-2">
            L&T Green Reserve
          </h1>
          <p className="text-white">Sector 128, Noida</p>
          <div className="flex w-full flex-col items-start justify-center space-y-2 mt-4 ml-4">
            <div className="flex flex-row justify-between ">
              <div className="flex flex-row items-center justify-evenly bg-black rounded-2xl p-2">
                <img src={bld} alt="building-icon" className="w-8 h-8" />
                <p className="text-white">Land Parcel : 6.1 Acres</p>
              </div>
            </div>
            <button className="">
              <div className="flex flex-row items-center justify-evenly bg-black rounded-full p-2">
                <img src={bld} alt="building-icon" className="w-8 h-8" />
                <p className="text-white">Tower : 4</p>
              </div>
            </button>
            <button className="">
              <div className="flex flex-row items-center justify-evenly bg-black rounded-full p-2">
                <img src={bld} alt="building-icon" className="w-8 h-8" />
                <p className="text-white">No. of floors : 45</p>
              </div>
            </button>
          </div>
          <div className="flex w-full flex-col items-start gap-2 mt-8">
            <div className="rounded-2xl text-bold bg-white">
              <p className="text-black m-2">Golf View Appartment</p>
            </div>
            <div className="rounded-2xl text-bold bg-white">
              <p className="text-black m-2">3/4/5 BHK Luxury Residences</p>
            </div>
            <div className="rounded-2xl text-bold bg-white">
              <p className="text-black m-2">Best Price on Request</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;   