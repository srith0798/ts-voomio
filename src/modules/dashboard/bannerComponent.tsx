import React from "react";
function BannerComponent() {
  return (
    <div className="w-full overflow-hidden relative bg-hero bg-cover h-192 md:h-300 flex">
      <div className="relative hidden xl:block w-104 top-153px">
        <div className="relative translate_y -left-40 rounded-20 p-0.5 w-128 h-128 bg-gradient-to-r from-violet-50 to-green-60">
          <div className="bg-white rounded-20 w-full h-full">
            <img
              className="w-full rounded-20 h-full"
              src="/images/degenToonz.png"
              alt="/"
            />
          </div>
        </div>
        <div className="absolute translate_x rounded-20 p-0.5 z-7 w-54 h-54 left-27.5 top-94.5 bg-gradient-to-r from-violet-50 to-green-60">
          <div className="bg-white rounded-20 w-full h-full">
            <img
              className="w-full rounded-20 h-full"
              src="/images/CyberKongs.png"
              alt="/"
            />
          </div>
        </div>
      </div>
      <div className="w-full px-27px pt-143px grow flex max-w-1400">
        <div className="w-full flex flex-col items-center md:items-start">
          <h1 className="text-ft-45 w-full md:text-ft-125 font-TerminaBold text-transparent bg-clip-text bg-gradient-to-r to-green-60 from-violet-50">
            One place, <br className="hidden lg:block" />
            it’s all here.
          </h1>
          <p className="text-ft-16_1 md:text-ft-22_1 mt-7.5 max-w-753 font-PoppinsMedium md:font-NeueHaasLight">
            Voomio is an omni-friendly shop for buying and selling NFTs. With
            everything from multi-wallet purchasing to gassless minting we’re
            sure you’re going to love it here.
          </p>
          <div className="flex flex-wrap justify-center gap-10 mt-12 pl-10 font-NeueHaasMedium text-ft-32">
            <button className="w-80 h-20 rounded-full bg-gradient-to-r text-white from-green-60 to-violet-50">
              Explore
            </button>
            <div className="w-80 h-20 bg-gradient-to-r p-1 from-green-60 to-violet-50 rounded-full">
              <div className="w-full h-full rounded-full bg-white">
                <button className=" w-full h-full text-transparent bg-clip-text bg-gradient-to-r from-green-60 to-violet-50">
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 hidden xl:block">
        <div className="absolute translate_x -right-7 rounded-20 p-0.5 top-100 w-91.5 h-91.5 bg-gradient-to-r from-violet-50 to-green-60">
          <div className="bg-white rounded-20 w-full h-full">
            <img
              className="rounded-20 w-ful h-full"
              src="/images/Moonbirds.png"
              alt="/"
            />
          </div>
        </div>
        <div className="absolute translate_y -right-16 z-10 rounded-20 top-44 p-0.5 w-315px h-315px  bg-gradient-to-r from-violet-50 to-green-60">
          <div className="bg-white rounded-20 w-full h-full">
            <img
              className="rounded-20 w-ful h-full"
              src="/images/CloneX.png"
              alt="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerComponent;
