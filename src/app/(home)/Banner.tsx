import React from "react";
import Image from "next/image";
import PaperBg from "../../../public/paper-bg.jpg";
import BookImg from "../../../public/book.png";

const Banner = () => {
  return (
    <section className="max-w-4xl mx-auto relative mt-9">
      <div className="relative h-52 w-full">
        <Image
          src={PaperBg}
          alt="paperbag"
          className="h-[100%] w-[100%] object-cover rounded-lg"
        />
        <div className="absolute top-0 h-full w-full rounded-lg z-20">
          <div className="flex justify-between items-center h-full w-full">
            <h1 className="w-2/3 text-3xl font-bold text-50 px-9">Connect, Share and Trade Your Favourite Reads...</h1>
            <Image
              src={BookImg}
              alt="Bookpng"
              className="h-[200px] w-[200px] object-contain rounded-lg absolute bottom-0 right-0"
            />
          </div>
        </div>
        <div className="absolute top-0 h-full w-full rounded-lg opacity-30 bg-slate-900 z-10">

        </div>
      </div>
    </section>
  );
};

export default Banner;
