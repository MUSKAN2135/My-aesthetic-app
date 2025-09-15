import heroimg from "../../images/soon.webp";

export default function Herosection() {
  return (
    <div className="flex md:flex-row  flex-col justify-center items-center lg:pt-24 pt-8 lg:pb-18 pb-8 font-[Montserrat]">
      <div className="hero-text flex flex-col items-center text-left">
        <div className="p-5 flex" >
          <h2 className="md:text-5xl sm:text-3xl text-3xl" data-aos="zoom-out-right" data-aos-duration="2000">Welcome to </h2>
          <div className="flex flex-col">
            <h2 className="md:text-5xl sm:text-3xl text-3xl pl-2" data-aos="zoom-out-left" data-aos-duration="2000"> ALA</h2>
            <span className="text-xs px-2 text-[#b18b5e]" data-aos="fade-up" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="3000"> Estetik Estilo</span>
          </div>
        </div>
        <button className="bg-[#b18b5e] cursor-pointer transition duration-150 text-white hover:bg-white hover:border hover:border-[#b18b5e] hover:text-gray-400 py-3 px-8 shadow-md rounded" data-aos="zoom-out" data-aos-duration="2000">
          Buy Now
        </button>
      </div>
      <div className="hero-img p-5">
        <img src={heroimg} className="h-70 rounded-full" />
      </div>
    </div>
  );
}
