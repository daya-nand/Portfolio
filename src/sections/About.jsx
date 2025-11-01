import React from "react";

const About = () => {
  const stats = [
    { title: "Experience", value: "1+ years" },
    { title: "Projects", value: "5+" },
    { title: "Focus", value: "Performance & UI" },
  ];

  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Gradient Backgrounds */}
      <div className="absolute -top-10 -left-10 w-48 sm:w-60 h-48 sm:h-60 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-[100px] animate-pulse opacity-70 z-0" />
      <div className="absolute top-1/2 left-1/2 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-[120px] animate-pulse opacity-60 -translate-x-1/2 -translate-y-1/2 z-0" />
      <div className="absolute bottom-10 right-10 w-48 sm:w-60 h-48 sm:h-60 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-[100px] animate-pulse opacity-70 z-0" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-center pt-20 md:pt-28 pb-16 px-4 sm:px-8 md:px-16 gap-8 md:gap-12">
        {/* Image */}
        <div className="w-32 h-32 sm:w-40 sm:h-40 lg-hidden md:w-52 md:h-52 rounded-3xl overflow-hidden border-4 border-white shadow-lg flex-shrink-0">
          <img
            src="/d.png"
            alt="Dayanand Vishwakarma"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left max-w-xl mt-6 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 tracking-tight">
            Dayanand Vishwakarma
          </h1>
          <p className="text-base sm:text-lg text-gray-200 font-medium mb-2">
            Full Stack Developer
          </p>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3">
            I am a Front-End Developer currently pursuing a Bachelor of Computer
            Applications (BCA) from IGNOU. I love learning new technologies and
            continuously improving my skills in HTML, CSS, JavaScript, and React.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 mb-5">
            {stats.map((item, index) => (
              <div
                key={index}
                className="px-4 sm:px-5 py-3 w-32 sm:w-40 mt-1 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <p className="text-gray-400 text-[11px] sm:text-[12px] font-bold uppercase tracking-wide">
                  {item.title}
                </p>
                <h1 className="text-base sm:text-lg font-semibold">
                  {item.value}
                </h1>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 mt-2">
            <button className="px-5 sm:px-6 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform text-sm sm:text-base">
              View Projects
            </button>
            <button className="px-5 sm:px-6 py-2 rounded-xl border border-white/20 text-white hover:bg-white/10 hover:scale-105 transition-transform text-sm sm:text-base">
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="relative z-10 w-full flex flex-col items-start justify-center px-4 sm:px-8 md:px-20 mb-16 max-w-5xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          About Me
        </h1>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3">
          I am a passionate Full Stack Developer with a keen interest in building
          dynamic and responsive web applications. My journey in the tech world
          has been fueled by a love for problem-solving and a desire to create
          seamless user experiences.
        </p>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          I love turning ideas into reality through code and design. My goal is
          to create applications that not only function well but also provide an
          enjoyable user experience.
        </p>
      </div>
    </section>
  );
};

export default About;
