"use client";
import { useState } from "react";
import floorplan from "../assets/floorplan.png"   
import { CircleArrowRightIcon } from "lucide-react";
import Form from "./Form";

const FloorPlan = () => {
  const [active, setActive] = useState("3 BHK");
  const [open,setOpen] = useState(false);

  const plans = [
    { title: "3 BHK Apartments" },
    { title: "4 BHK Apartments" },
    { title: "5 BHK Apartments" },
  ];

  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-black relative inline-block">
            Floor Plan
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-green-700 rounded-full"></span>
          </h2>

          <p className="mt-6 text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Your Vision, Our Floor Plans
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mt-14">
          {plans.map((plan, index) => (
            <button
              key={index}
              onClick={() => setActive(plan.title)}
              className={`px-8 py-3 rounded-full text-lg font-medium transition-all duration-300
                ${
                  active === plan.title
                    ? "bg-green-700 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {plan.title}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="mt-16">
          <div className="bg-gray-50 rounded-3xl shadow-xl p-8 md:p-12 text-center">

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
              {active}
            </h3>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Spacious layouts designed for comfort, functionality, and modern living.
              Detailed floor plan images can be displayed here.
            </p>

            {/* Placeholder Image Area */}
            <div className="relative mt-10 aspect-16/10 bg-white border border-gray-200 rounded-2xl flex items-center justify-center text-gray-400 text-lg backdrop-blur-2xl">
              <img src={floorplan} alt="floorplan" className="opacity-10"/>
              {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
              <div className="absolute inset-0 flex items-center justify-center ">
                <div className="bg-green-700 px-6 py-2 rounded-full flex items-center gap-2 cursor-pointer hover:bg-green-600 transition-all duration-300" onClick={()=>setOpen(true)}>
                  <button className="text-white text-lg font-semibold ">Floor Plan</button>
                  <CircleArrowRightIcon className="text-white"  />
                </div>
              </div>
            </div>

          </div>
        </div>
        <Form open={open} setOpen={setOpen}/>
      </div>
    </section>
  );
};

export default FloorPlan;