import React from "react";

const ExploreRest = () => {
  const Explore = [
    { name: "Explore Restaurants Near Me" },
    { name: "Explore Top Rated Restaurants Near Me" },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="font-bold py-2 text-[20px] sm:text-[25px]">
          Explore Every Restaurant Near Me
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-3">
          {Explore.map((item) => (
            <div
              key={item.name}
              className="flex text-[14px] sm:text-[15px] items-center justify-center font-bold cursor-pointer border rounded-[15px] border-gray-200 p-4 shadow-sm hover:bg-[#fc8019] transition-shadow duration-300"
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <hr className="my-6 border-[1px]" />

      <div className="bg-gray-100 py-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-items-center px-4 md:px-0">
          <div className="text-lg md:text-xl font-bold text-center md:text-left">
            For a better experience, download <br />
            the Swiggy app now
          </div>
          <div className="flex w-[100%] space-x-4 mt-4 md:mt-0 justify-center md:justify-start px-4 md:px-0">
            <a
              href="https://play.google.com/store/apps/details?id=in.swiggy.android"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
                alt="Google Play Store"
                className="h-10 md:h-12"
              />
            </a>
            <a
              href="https://apps.apple.com/us/app/swiggy-food-order-delivery/id989540920"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-10 md:h-12"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreRest;
