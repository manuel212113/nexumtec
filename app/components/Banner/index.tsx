import Image from "next/image";

const Banner = () => {
  return (
    <div className="mx-auto max-w-7xl my-10 sm:py-10 px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 my-16">
        {/* COLUMN-1 */}

        <div className="mx-auto sm:mx-0">
        
          <div className="py-3 text-center lg:text-start">
            <h1 className="text-6xl lg:text-80xl font-bold text-darkpurple">
              Hacemos realidad <br /> tus ideas.
            </h1>
          </div>

          <div className="my-7 text-center lg:text-start">
            <button className="text-sm md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-hoblue">
              Comenzar
            </button>
          </div>
        </div>

        {/* COLUMN-2 */}

        <div className="lg:-m-24 lg:pt-10 hidden lg:block">
          <Image
            src="/images/banner/fondo_persona.jpg"
            alt="hero-image"
            width={800}
            height={642}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
