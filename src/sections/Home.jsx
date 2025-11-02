import ParticleBackground from "../components/ParticleBackground";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import RotatingTitle from "../components/RotatingTitle";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Gradient Circles */}
      <div className="absolute -top-18 -left-18 w-96 h-96 max-w-[500px] max-h-[500px] bg-gradient-to-r from-pink-800 via-purple-800 to-blue-800 rounded-full blur-3xl opacity-70 animate-pulse" />
      <div className="absolute bottom-12 right-20 w-50 h-50 max-w-[500px] max-h-[500px] bg-gradient-to-r from-pink-800 via-purple-800 to-blue-800 rounded-full blur-3xl opacity-70 animate-pulse" />

      {/* Content */}
      <div className="w-full relative z-10 flex items-start justify-center min-h-scree px-20 pt-5 md:px-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 w-full max-w-6xl">
          {/* Left: Text Content */}
          <div className="flex-1 pt-20 md:pt-24 flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:space-y-6 md:ml-6 lg:ml-12">
            {/* Developer on top */}
            <h2 className="text-2xl md:text-3xl mb-2 font-semibold">
              <RotatingTitle />
            </h2>

            {/* Hello + Name */}
            <div>
              <span className="text-green-400 font-bold text-xl md:text-4xl">
                Hello, I'm
              </span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
                Dayanand
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl">
              I am a Front-End Developer fresher currently pursuing a Bachelor
              of Computer Applications (BCA) from IGNOU. I enjoy learning new
              technologies and continuously improving my skills in HTML, CSS,
              JavaScript, and React.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="w-full sm:w-auto px-4 py-2 md:px-6 md:py-3 rounded-full bg-pink-500 hover:bg-pink-600 transition-colors font-semibold text-base md:text-lg">
                View My Work
              </button>
              <button className="w-full sm:w-auto px-5 py-2.5 md:px-6 md:py-3 rounded-full border border-pink-500 hover:bg-pink-500 hover:text-white transition-colors font-semibold text-base md:text-lg">
                My Resume
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 text-gray-400 text-2xl">
              <a
                href="#"
                className="hover:text-pink-500 transition-all duration-300 hover:shadow-pink-400/50 hover:shadow-lg hover:ring-2 hover:ring-pink-500 rounded-full p-1"
              >
                <FaGithub />
              </a>
              <a
                href="#"
                className="hover:text-pink-500 transition-all duration-300 hover:shadow-pink-400/50 hover:shadow-lg hover:ring-2 hover:ring-pink-500 rounded-full p-1"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="hover:text-pink-500 transition-all duration-300 hover:shadow-pink-400/50 hover:shadow-lg hover:ring-2 hover:ring-pink-500 rounded-full p-1"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex-1 justify-center md:justify-end hidden md:flex">
            <img
              src="./avator.png"
              alt="Avatar"
              className="w-55 md:w-96 lg:w-[400px] rounded-xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
