import Form from "./Form";

import { useState } from "react";
import {CircleArrowRight} from "lucide-react";

const Highlights = () => {

  const [open,setOpen] = useState(false);

  const highlights = [
    "Panoramic Golf Course View",
    "Clubhouse in over 60,000 sq.ft.",
    "Art Deco Architecture & Spacious Layout",
    "Landscape Garden & Open Spaces",
    "Close to Noida and Delhi",
    "Quick proximity to FNG Corridor",
    "Timely construction ensures delivery without delays",
    "An abode built on stable grounds, lasting generations",
    "Backed by 8 decades of L&T legacy & strong in-house expertise",
  ];

  return (
    <section className="w-full bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-black relative inline-block">
            Highlights
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-green-700 rounded-full"></span>
          </h2>

          <p className="mt-6 text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Exceptional Properties. Exceptional Clients.
          </p>
        </div>

        {/* Highlight Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl 
                         transition-all duration-300 p-8 
                         border border-gray-100 hover:border-green-700"
            >
              <div className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 bg-green-700 rounded-full shrink-0"></span>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          <button className="flex items-center gap-2 bg-green-700 hover:bg-green-800 transition-all duration-300 text-white px-10 py-3 rounded-full text-lg shadow-md hover:shadow-lg" onClick={()=>setOpen(true)}>
            View More 
          <span className=""><CircleArrowRight/></span>
          </button>
        </div>
        <Form open={open} setOpen={setOpen}/>
      </div>
    </section>
  );
};

export default Highlights;