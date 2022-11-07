import React from "react";
import imgas from "../Images/FinanceappMonochromatic.png";

const CustomerReview = () => {
  return (
    <>
      <div className="my-20 font-nunito select-none">
        <p className="font-bold text-center text-4xl pb-5 mobile:text-2xl">
          Here’s what our customer's think :
        </p>
        <div className="min-w-full flex items-center gap-10 py-10 whitespace-nowrap scrollbar-hide animated-scroll">
          <div className="p-2 h-60 min-w-1/3 laptop:min-w-2/5 tablet:min-w-full mobile:min-w-full flex items-center bg-gray-200 rounded-lg shadow-xl border border-gray-300">
            <img
              className="h-40 w-40 bg-red-300 rounded-full"
              src={imgas}
              alt="user profi"
            />
            <div className="my-4 mx-2 flex flex-col whitespace-normal">
              <h1 className="text-xl font-bold">Rahul Shinde.</h1>
              <p className="text-gray-500 font-medium">Mumbai, India.</p>

              <p className="font-semibold">
                In this busy world, The instant deposits and withdrawals have
                made Online currencies stock my go-to Online currencies stock platform.
              </p>
            </div>
          </div>
          <div className="p-2 h-60 min-w-1/3 laptop:min-w-2/5 tablet:min-w-full mobile:min-w-full flex items-center bg-gray-200 rounded-lg shadow-xl border border-gray-300">
            <img
              className="h-40 w-40 bg-red-300 rounded-full"
              src={imgas}
              alt="user profi"
            />
            <div className="my-4 mx-2 flex flex-col whitespace-normal">
              <h1 className="text-xl font-bold">Abdul basit.</h1>
              <p className="text-gray-500 font-medium">lahore, pakistan.</p>

              <p className="font-semibold">
                Being an ardent stock trader, I made my way into
                Online currencies through Online currencies stock the live charts and information
                have helped me make informed choices.
              </p>
            </div>
          </div>
          <div className="p-2 h-60 min-w-1/3 laptop:min-w-2/5 tablet:min-w-full mobile:min-w-full flex items-center bg-gray-200 rounded-lg shadow-xl border border-gray-300">
            <img
              className="h-40 w-40 bg-red-300 rounded-full"
              src={imgas}
              alt="user profi"
            />
            <div className="my-4 mx-2 flex flex-col whitespace-normal">
              <h1 className="text-xl font-bold">Muhammad ALI</h1>
              <p className="text-gray-500 font-medium">Islamabad, Pakistan.</p>

              <p className="font-semibold">
                I have been reading docs for some time now and have found
                Online currencies stock to be the simplest way to trade in Online currencies stock.
              </p>
            </div>
          </div>
          <div className="p-2 h-60 min-w-1/3 laptop:min-w-2/5 tablet:min-w-full mobile:min-w-full flex items-center bg-gray-200 rounded-lg shadow-xl border border-gray-200">
            <img
              className="h-40 w-40 bg-red-300 rounded-full"
              src={imgas}
              alt="user profi"
            />
            <div className="my-4 mx-2 flex flex-col whitespace-normal">
              <h1 className="text-xl font-bold">Aslam Saleem.</h1>
              <p className="text-gray-500 font-medium">Karachi, Pakistan.</p>

              <p className="font-semibold">
                I like how the interface is so user friendly; it handheld me at
                every step of making my first Online currencies stock. Well done Online currencies stock
                team.
              </p>
            </div>
          </div>

          <div className="p-2 h-60 min-w-1/3 laptop:min-w-2/5 tablet:min-w-full mobile:min-w-full flex items-center bg-gray-200 rounded-lg shadow-xl border border-gray-200">
            <img
              className="h-40 w-40 bg-red-300 rounded-full"
              src={imgas}
              alt="user profi"
            />
            <div className="my-4 mx-2 flex flex-col whitespace-normal">
              <h1 className="text-xl font-bold">sami ul rehamn.</h1>
              <p className="text-gray-500 font-medium">Hyderabad, pakistan.</p>

              <p className="font-semibold">
                The very first website where I was really impressed just because
                of their security and privacy settings. They don't hide anything
                and they are providing every option which is forcing me to
                believe that they are really working a lot on security.
              </p>
            </div>
          </div>

          <div className="p-2 h-60 min-w-1/3 laptop:min-w-2/5 tablet:min-w-full mobile:min-w-full flex items-center bg-gray-200 rounded-lg shadow-xl border border-gray-200">
            <img
              className="h-40 w-40 bg-red-300 rounded-full"
              src={imgas}
              alt="user profi"
            />
            <div className="my-4 mx-2 flex flex-col whitespace-normal">
              <h1 className="text-xl font-bold">saud salman.</h1>
              <p className="text-gray-500 font-medium">rawalpindi, pakistan.</p>

              <p className="font-semibold">
                I don't know much about Online currencies stock, trading, and their
                analysis but Online currencies stock made this easier by providing news, charts,
                tables, docs, easy buy-sell processes, and much more things.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerReview;
