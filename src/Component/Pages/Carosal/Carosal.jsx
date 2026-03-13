import React from "react";










const Carosal = () => {
  return (
    <section className="py-12">

      <h2 className="text-3xl font-bold text-center mb-10">
        📚 Featured Books
      </h2>

      <div className="grid grid-cols-3 gap-8 items-center">

        {/* Left Article */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Why Reading Matters</h3>

          <p className="text-gray-600">
            Reading books expands knowledge, improves vocabulary,
            and strengthens imagination. A good book can inspire new
            ideas and help you understand the world in different ways.
          </p>

          <p className="text-gray-600">
            Whether you enjoy fiction, history, or science,
            reading regularly builds focus and creativity.
          </p>
        </div>

        {/* Carousel */}
        <div>
          <div className="carousel carousel-vertical rounded-box h-96">

            <div className="carousel-item h-full">
              <img className="w-64" src="https://i.ibb.co/fdyjvPcT/download-3.jpg" />
            </div>

            <div className="carousel-item h-full">
              <img className="w-64" src="https://i.ibb.co/4Z7xgT1T/download-2.jpg" />
            </div>

            <div className="carousel-item h-full">
              <img className="w-64" src="https://i.ibb.co/Hp2zbVpS/download-1.jpg" />
            </div>

            <div className="carousel-item h-full">
              <img className="w-64" src="https://i.ibb.co/q3Rsw9wR/download.jpg" />
            </div>

            <div className="carousel-item h-full">
              <img className="w-64" src="https://i.ibb.co/cSZ66BM8/images-1.jpg " />
            </div>

          </div>
        </div>

        {/* Right Article */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Find Your Next Favorite Book</h3>

          <p className="text-gray-600">
            Explore a wide range of books from different genres and
            discover stories that match your interests and passion.
          </p>

          <p className="text-gray-600">
            Our collection includes bestselling novels, timeless classics,
            and inspiring educational books for every reader.
          </p>
        </div>

      </div>

    </section>
  );
};

export default Carosal;