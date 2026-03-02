const Location = () => {
  const advantages = [
    "Easy accessibility to Delhi, Ghaziabad and Faridabad via FNG Corridor",
    "Quick connectivity via multi-modal transport system",
    "In proximity to Delhi Metro and Aqua Line metro stations",
    "Minutes away from Amity University and Lotus Valley International School",
    "Near to Express Trade Tower and Noida-Greater Noida Expressway",
  ];

  return (
    <section className="w-full bg-linear-gradient-to-b from-white to-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-black relative inline-block">
            Location Advantages
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-green-700 rounded-full"></span>
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Discover Your Perfect Place in the Perfect Location
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12 mt-14 items-start">

          {/* Advantages List */}
          <div className="bg-white shadow-xl rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Key Connectivity Highlights
            </h3>

            <ul className="space-y-4">
              {advantages.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700 text-lg">
                  <span className="mt-2 w-2 h-2 bg-green-700 rounded-full shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a href="https://nsventures.tech/LnT_Greenreserve_Noida/" target="_blank">
                <button className="mt-8 bg-green-700 hover:bg-green-800 transition-all duration-300 text-white px-8 py-3 rounded-full text-lg shadow-md hover:shadow-lg">
                  Virtual Tour
                </button>
            </a>
          </div>

          {/* Map */}
          <div className="w-full h-full">
            <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-xl aspect-16/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1813.5991451778848!2d77.35920251580771!3d28.522687863195287!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce70043c259bf%3A0xdbefc6f96bb90b80!2sL%26T%20Green%20Reserve!5e1!3m2!1sen!2sin!4v1772265644306!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;