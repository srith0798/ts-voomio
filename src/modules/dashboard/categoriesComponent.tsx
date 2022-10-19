import React, { useState } from "react";
import { timeValues, collectionTabs, chainItems } from "../../constants";
import Carousel from "@itseasy21/react-elastic-carousel";

interface DisplayDrop {
  [key: string]: string | boolean;
}

const trendingCards = [
  {
    name: "Bored Ape Yacht Club",
    imgCard: "/images/boredApe.png",
    volume: "657.2K",
    floor: 70,
  },
  {
    name: "CryptoPunks",
    imgCard: "/images/cryptoPunk.png",
    volume: "657.2K",
    floor: 70,
  },
  {
    name: "Doodles",
    imgCard: "/images/puker.png",
    volume: "657.2K",
    floor: 70,
  },
  {
    name: "Moonbirds",
    imgCard: "/images/moonBird.png",
    volume: "657.2K",
    floor: 70,
  },
];

const creatorCards = [
  {
    name: "Gordon Gonner",
    signId: "@gordongonner",
    following: 12,
    followers: "1.2 M",
    collections: 15,
    address: "0x007..373xys..",
    imgCard: "/images/laserMonkey.png",
  },
  {
    name: "Gordon Gonner",
    signId: "@gordongonner",
    following: 12,
    followers: "1.2 M",
    collections: 15,
    address: "0x007..373xys..",
    imgCard: "/images/laserMonkey.png",
  },
  {
    name: "Gordon Gonner",
    signId: "@gordongonner",
    following: 12,
    followers: "1.2 M",
    collections: 15,
    address: "0x007..373xys..",
    imgCard: "/images/laserMonkey.png",
  },
  {
    name: "Gordon Gonner",
    signId: "@gordongonner",
    following: 12,
    followers: "1.2 M",
    collections: 15,
    address: "0x007..373xys..",
    imgCard: "/images/laserMonkey.png",
  },
  {
    name: "Gordon Gonner",
    signId: "@gordongonner",
    following: 12,
    followers: "1.2 M",
    collections: 15,
    address: "0x007..373xys..",
    imgCard: "/images/laserMonkey.png",
  },
  {
    name: "Gordon Gonner",
    signId: "@gordongonner",
    following: 12,
    followers: "1.2 M",
    collections: 15,
    address: "0x007..373xys..",
    imgCard: "/images/laserMonkey.png",
  },
];

const collectionCards = [
  {
    name: "Bored Ape Yacht Club",
    imgCard: "/images/boredApe.png",
    collectionBanner: "/images/apeCollection.png",
  },
  {
    name: "CryptoPunks",
    imgCard: "/images/cryptoPunk.png",
    collectionBanner: "/images/punkCollection.png",
  },
  {
    name: "Doodles",
    imgCard: "/images/puker.png",
    collectionBanner: "/images/doodlesCollection.png",
  },
  {
    name: "Moonbirds",
    imgCard: "/images/moonBird.png",
    collectionBanner: "/images/moonbirdsCollection.png",
  },
];

const tableData = [
  {
    title: "Sample Collection",
    imgCard: "/images/boredApe.png",
    volume: 134,
    time24: +13.13,
    time7: +13.13,
    floorPrice: 134,
  },
  {
    title: "Sample Collection",
    imgCard: "/images/puker.png",
    volume: 134,
    time24: +13.13,
    time7: +13.13,
    floorPrice: 134,
  },
  {
    title: "Sample Collection",
    imgCard: "/images/cryptoPunk.png",
    volume: 134,
    time24: +13.13,
    time7: +13.13,
    floorPrice: 134,
  },
  {
    title: "Sample Collection",
    imgCard: "/images/moonBird.png",
    volume: 134,
    time24: +13.13,
    time7: +13.13,
    floorPrice: 134,
  },
  {
    title: "Sample Collection",
    imgCard: "/images/boredApe.png",
    volume: 134,
    time24: +13.13,
    time7: +13.13,
    floorPrice: 134,
  },
  {
    title: "Sample Collection",
    imgCard: "/images/puker.png",
    volume: 134,
    time24: +13.13,
    time7: -1.13,
    floorPrice: 134,
  },
  {
    title: "Sample Collection",
    imgCard: "/images/cryptoPunk.png",
    volume: 134,
    time24: +13.13,
    time7: -1.13,
    floorPrice: 134,
  },
  {
    title: "Sample Collection",
    imgCard: "/images/moonBird.png",
    volume: 134,
    time24: +13.13,
    time7: +13.13,
    floorPrice: 134,
  },
];

function CategoriesComponent() {
  const [timeFilterValue, setTimeValue] = useState(timeValues[0]);
  const [showTimeFilter, toggleTimeFilter] = useState(false);
  const [collectionFilterValue, setCollectionValue] =
    useState("All categories");
  const [showCollectionFilter, toggleCollectionFilter] = useState(false);

  return (
    <div className="w-full mt-32.5 flex justify-center">
      <div className="w-full px-4 max-w-1400">
        {/* Trending */}
        <div className="mb-20 flex flex-col">
          <div className="flex flex-col xsm:flex-row mb-20 gap-7.5 xsm:gap-4 xsm:justify-between">
            <h1 className="text-ft-44 font-TerminaBold">Trending</h1>
            {/* Filter */}
            <div className="w-full xsm:w-261px text-ft-18_1 font-NeueHaasMedium relative">
              <div
                onClick={() => {
                  toggleTimeFilter((pre) => !pre);
                }}
                className={`${
                  showTimeFilter
                    ? " bg-gradient-to-r from-violet-50 to-green-60"
                    : "border-2 border-violet-50"
                } w-full absolute cursor-pointer z-2 flex items-center justify-between px-5.5 h-13.5 rounded-10 `}
              >
                <p
                  className={`${
                    showTimeFilter ? "text-white" : "text-violet-50"
                  }`}
                >
                  {timeFilterValue}
                </p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 9L12 16L5 9"
                    stroke={`${showTimeFilter ? "#fff" : "#6549F6"}`}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              {showTimeFilter && (
                <div className="rounded-10 rounded-t-none w-full absolute z-1 top-11.5 bg-gradient-to-r p-0.5 from-violet-50 to to-green-60">
                  <div className="w-full rounded-10 rounded-t-none bg-white">
                    <div className="w-full  flex flex-col">
                      {timeValues.map((value, index) => (
                        <p
                          onClick={() => {
                            setTimeValue(timeValues[index]);
                            toggleTimeFilter(false);
                          }}
                          className="w-full flex items-center hover:text-violet-50 cursor-pointer px-5.5 h-13.5"
                          key={index}
                        >
                          {value}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Cards */}
          <div className="h-106 flex flex-wrap gap-4 gap-y-6 justify-evenly">
            <TrendCards />
          </div>
          <button className="w-65 self-center mt-20 text-white text-ft-26 font-NeueHaasMedium rounded-full h-15 bg-gradient-to-r from-violet-10 to-violet-20">
            Load More
          </button>
        </div>
        {/* Creators */}
        <div className="mb-80">
          <h1 className="text-ft-44 mb-20 font-TerminaBold">Top Creators</h1>
          <div className="h-128">
            {/* Cards */}
            <CreatorCards />
          </div>
        </div>
        {/* Collectors */}
        <div className="mb-80">
          <div className="flex flex-col xmd:flex-row mb-20 gap-7.5 xmd:gap-4 xmd:justify-between">
            <h1 className="text-ft-44 font-TerminaBold">Top Collectors</h1>
            {/* Filter */}
            <div className="w-full xmd:mt-0 xmd:w-261px text-ft-18_1 font-NeueHaasMedium relative">
              <div
                onClick={() => {
                  toggleCollectionFilter((pre) => !pre);
                }}
                className={`${
                  showCollectionFilter
                    ? " bg-gradient-to-r from-violet-50 to-green-60"
                    : "border-2 border-violet-50"
                } w-full absolute cursor-pointer z-3 flex items-center justify-between px-5.5 h-13.5 rounded-10 `}
              >
                <p
                  className={`${
                    showCollectionFilter ? "text-white" : "text-violet-50"
                  }`}
                >
                  {collectionFilterValue}
                </p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 9L12 16L5 9"
                    stroke={`${showCollectionFilter ? "#fff" : "#6549F6"}`}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              {showCollectionFilter && (
                <div className="rounded-10 rounded-t-none w-full absolute z-2 top-11.5 bg-gradient-to-r p-0.5 from-violet-50 to to-green-60">
                  <div className="w-full rounded-10 rounded-t-none bg-white">
                    <div className="w-full  flex flex-col">
                      {collectionTabs.map((value, index) => (
                        <p
                          onClick={() => {
                            setCollectionValue(collectionTabs[index]);
                            toggleCollectionFilter(false);
                          }}
                          className={`${
                            index < collectionTabs.length - 1
                              ? "border border-grey-20"
                              : ""
                          } w-full flex items-center hover:text-violet-50 cursor-pointer px-5.5 h-13.5`}
                          key={index}
                        >
                          {value}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* cards */}
          <div className="h-81">
            <CollectionCards />
          </div>
        </div>
        {/* Stats */}
        <StatsNetwork />
      </div>
    </div>
  );
}

function TrendCards() {
  return (
    <>
      {trendingCards.map((card, index) => (
        <div
          key={index}
          className="w-80 rounded-12 font-NeueHaasMedium rounded-t-none shadow-md"
        >
          <img
            className="w-80 rounded-10 shadow-md h-80"
            src={card.imgCard}
            alt="/"
          />
          <div className="p-4">
            <div className="flex mb-1.5 items-center gap-2.5">
              <h1 className="text-ft-20">{card.name}</h1>
              <img src="/images/badgeCheck.svg" alt="/" />
            </div>
            <div className="flex text-ft-18_2 justify-between">
              <div className="flex items-center gap-1">
                <span className="text-grey-10">Vol</span>
                <img className="" src="/images/ethereumCoin.svg" alt="/" />
                <span>{card.volume}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-grey-10">Floor</span>
                <img className="" src="/images/ethereumCoin.svg" alt="/" />
                <span>{card.floor}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

function CreatorCards() {
  const breakPoints = [
    { width: 1, itemsToShow: 1, itemPadding: [2] },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, itemPadding: [5] },
    { width: 850, itemsToShow: 3, itemPadding: [5] },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2, itemPadding: [10] },
  ];
  return (
    <div>
      <Carousel pagination={false} breakPoints={breakPoints}>
        {creatorCards.map((card, index) => (
          <div
            key={index}
            className="w-345px h-full rounded-10 bg-orange-10 bg-opacity-40"
          >
            <div className="w-full font-PoppinsBold rounded-10 h-74.5 flex flex-col justify-evenly items-center">
              <img
                className="rounded-full border-2 border-white w-147px h-147px"
                src={card.imgCard}
                alt="/"
              />
              <h1 className="text-white text-ft-24">{card.name}</h1>
              <p className="w-187px flex justify-center items-center h-37px bg-white rounded-full text-ft-16">
                {card.signId}
              </p>
            </div>
            <div className="w-full flex flex-col card_height  bg-white rounded-10 shadow-md">
              <div className="flex font-PoppinsBold pt-3 justify-evenly">
                <div className="flex gap-0.5 flex-col">
                  <span className="text-ft-22">{card.following}</span>
                  <span className="text-ft-14 font-PoppinsMedium">
                    Following
                  </span>
                </div>
                <div className="flex gap-0.5 flex-col">
                  <span className="text-ft-22">{card.followers}</span>
                  <span className="text-ft-14 font-PoppinsMedium">
                    Followers
                  </span>
                </div>
                <div className="flex gap-0.5 flex-col">
                  <span className="text-ft-22">{card.collections}</span>
                  <span className="text-ft-14 font-PoppinsMedium">
                    Collection
                  </span>
                </div>
              </div>
              <div className="text-ft-15 mt-27px flex flex-col items-center gap-4 justify-center">
                <div className="font-PoppinsBold cursor-pointer flex items-center justify-center gap-2 text-white rounded-full w-173px h-43px bg-gradient-to-r from-violet-10 to-violet-20">
                  <img src="/images/addIcon.svg" alt="/" />
                  <span>Follow</span>
                </div>
                <button className="w-173px font-PoppinsMedium h-43px text-violet-20 rounded-full bg-violet-20 bg-opacity-40">
                  {card.address}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

function CollectionCards() {
  const breakPoints = [
    { width: 1, itemsToShow: 1, itemPadding: [2] },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, itemPadding: [5] },
    { width: 850, itemsToShow: 3, itemPadding: [5] },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2, itemPadding: [10] },
  ];
  return (
    <>
      <Carousel pagination={false} breakPoints={breakPoints}>
        {collectionCards.map((card, index) => (
          <div key={index} className="w-80 rounded-10 rounded-t-none shadow-md">
            <img
              className="w-80 h-55.5 rounded-10"
              src={card.collectionBanner}
              alt="/"
            />
            <div className="flex gap-2.5 px-2 items-start">
              <img
                className="rounded-full w-95px h-95px relative -top-7.5 z-1"
                src={card.imgCard}
                alt="/"
              />
              <div className="flex font-NeueHaasMedium relative top-5 gap-2.5">
                <h3 className="text-ft-16">{card.name}</h3>
                <img src="/images/badgeCheck.svg" alt="/" />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
}

function StatsNetwork() {
  const [timeFilterValue, setTimeValue] = useState(timeValues[0]);
  const displayFilter: DisplayDrop = {
    time: false,
    collection: false,
    chain: false,
    settings: false,
  };
  const [viewFilter, toggleViewFilter] = useState<DisplayDrop>(displayFilter);
  // const [showTimeFilter, toggleTimeFilter] = useState(false);
  const [collectionFilterValue, setCollectionValue] =
    useState("All categories");
  // const [showCollectionFilter, toggleCollectionFilter] = useState(false);
  const [chainFilterValue, setChainValue] = useState("");
  // const [showChainFilter, toggleChainFilter] = useState(false);
  const handleFilter = (key: string, condition?: boolean) => {
    if (!condition) {
      toggleViewFilter((pre) => ({
        ...pre,
        [key]: !pre[key],
      }));
    } else {
      toggleViewFilter((pre) => ({
        ...pre,
        [key]: false,
      }));
    }
  };
  return (
    <div className="bg-white px-4 pt-17.5 flex flex-col items-center w-full shadow-lg rounded-10 h-auto lg:h-1298">
      <h1 className="hidden lg:block text-ft-44 mb-15 font-TerminaBold">
        Top NFTs
      </h1>
      {/* Filters */}
      <div className="hidden lg:flex flex-wrap mb-15 gap-y-16 justify-center gap-4.5">
        {/* Time */}
        <div className="w-261px text-ft-18_1 font-NeueHaasMedium relative">
          <div
            onClick={() => {
              handleFilter("time");
            }}
            className={`${
              viewFilter.time
                ? " bg-gradient-to-r from-violet-50 to-green-60"
                : "border-2 border-violet-50"
            } w-full absolute cursor-pointer z-8 flex items-center justify-between px-5.5 h-13.5 rounded-10 `}
          >
            <p
              className={`${viewFilter.time ? "text-white" : "text-violet-50"}`}
            >
              {timeFilterValue}
            </p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 9L12 16L5 9"
                stroke={`${viewFilter.time ? "#fff" : "#6549F6"}`}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          {viewFilter.time && (
            <div className="rounded-10 rounded-t-none w-full absolute z-7 top-11.5 bg-gradient-to-r p-0.5 from-violet-50 to to-green-60">
              <div className="w-full rounded-10 rounded-t-none bg-white">
                <div className="w-full  flex flex-col">
                  {timeValues.map((value, index) => (
                    <p
                      onClick={() => {
                        setTimeValue(timeValues[index]);
                        handleFilter("time", false);
                      }}
                      className="w-full flex items-center hover:text-violet-50 cursor-pointer px-5.5 h-13.5"
                      key={index}
                    >
                      {value}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Categories */}
        <div className="w-261px text-ft-18_1 font-NeueHaasMedium relative">
          <div
            onClick={() => {
              handleFilter("collection");
            }}
            className={`${
              viewFilter.collection
                ? " bg-gradient-to-r from-violet-50 to-green-60"
                : "border-2 border-violet-50"
            } w-full absolute cursor-pointer z-6 flex items-center justify-between px-5.5 h-13.5 rounded-10 `}
          >
            <p
              className={`${
                viewFilter.collection ? "text-white" : "text-violet-50"
              }`}
            >
              {collectionFilterValue}
            </p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 9L12 16L5 9"
                stroke={`${viewFilter.collection ? "#fff" : "#6549F6"}`}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          {viewFilter.collection && (
            <div className="rounded-10 rounded-t-none w-full absolute z-5 top-11.5 bg-gradient-to-r p-0.5 from-violet-50 to to-green-60">
              <div className="w-full rounded-10 rounded-t-none bg-white">
                <div className="w-full  flex flex-col">
                  {collectionTabs.map((value, index) => (
                    <p
                      onClick={() => {
                        setCollectionValue(collectionTabs[index]);
                        handleFilter("collection", false);
                      }}
                      className={`${
                        index < collectionTabs.length - 1
                          ? "border border-grey-20"
                          : ""
                      } w-full flex items-center hover:text-violet-50 cursor-pointer px-5.5 h-13.5`}
                      key={index}
                    >
                      {value}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Chains */}
        <div className="w-261px text-ft-18_1 font-NeueHaasMedium relative">
          <div
            onClick={() => {
              handleFilter("chain");
            }}
            className={`${
              viewFilter.chain
                ? " bg-gradient-to-r from-violet-50 to-green-60"
                : "border-2 border-violet-50"
            } w-full absolute cursor-pointer z-4 flex items-center justify-between px-5.5 h-13.5 rounded-10 `}
          >
            <p
              className={`${
                viewFilter.chain ? "text-white" : "text-violet-50"
              }`}
            >
              All chains
            </p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 9L12 16L5 9"
                stroke={`${viewFilter.chain ? "#fff" : "#6549F6"}`}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          {viewFilter.chain && (
            <div className="rounded-10 rounded-t-none w-full absolute z-3 top-11.5 bg-gradient-to-r p-0.5 from-violet-50 to to-green-60">
              <div className="w-full rounded-10 rounded-t-none bg-white">
                <div className="w-full  flex flex-col">
                  {chainItems.map((value, index) => (
                    <div
                      onClick={() => {
                        setChainValue(chainItems[index]);
                        handleFilter("chain", false);
                      }}
                      className={`${
                        index < chainItems.length - 1
                          ? "border border-grey-20"
                          : ""
                      } w-full flex items-center gap-4 hover:text-violet-50 cursor-pointer px-5.5 h-13.5`}
                      key={index}
                    >
                      <img
                        className=""
                        src={
                          chainFilterValue === chainItems[index]
                            ? "/images/activeRadio.svg"
                            : "/images/unActiveRadio.svg"
                        }
                        alt="/"
                      />
                      <p
                        className={`${
                          chainFilterValue === chainItems[index]
                            ? "text-violet-50"
                            : ""
                        }`}
                      >
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Mobile Header */}
      <div className="flex lg:hidden mb-15 items-center gap-11 justify-between">
        <h1 className="text-ft-34 font-TerminaBold">Top NFTs</h1>
        <img
          onClick={() => {
            handleFilter("settings");
          }}
          src={
            viewFilter.settings
              ? "/images/closeIcon.svg"
              : "/images/settings.svg"
          }
          alt="/"
        />
      </div>
      {/*Mobile Filter */}
      {viewFilter.settings && (
        <div className="lg:hidden flex flex-wrap mb-15 gap-y-16 justify-center gap-4.5">
          {/* Time */}
          <div className="w-261px text-ft-18_1 font-NeueHaasMedium relative">
            <div
              onClick={() => {
                handleFilter("time");
              }}
              className={`${
                viewFilter.time
                  ? " bg-gradient-to-r from-violet-50 to-green-60"
                  : "border-2 border-violet-50"
              } w-full absolute cursor-pointer z-8 flex items-center justify-between px-5.5 h-13.5 rounded-10 `}
            >
              <p
                className={`${
                  viewFilter.time ? "text-white" : "text-violet-50"
                }`}
              >
                {timeFilterValue}
              </p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 9L12 16L5 9"
                  stroke={`${viewFilter.time ? "#fff" : "#6549F6"}`}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            {viewFilter.time && (
              <div className="rounded-10 rounded-t-none w-full absolute z-7 top-11.5 bg-gradient-to-r p-0.5 from-violet-50 to to-green-60">
                <div className="w-full rounded-10 rounded-t-none bg-white">
                  <div className="w-full  flex flex-col">
                    {timeValues.map((value, index) => (
                      <p
                        onClick={() => {
                          setTimeValue(timeValues[index]);
                          handleFilter("time", false);
                        }}
                        className="w-full flex items-center hover:text-violet-50 cursor-pointer px-5.5 h-13.5"
                        key={index}
                      >
                        {value}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Categories */}
          <div className="w-261px text-ft-18_1 font-NeueHaasMedium relative">
            <div
              onClick={() => {
                handleFilter("collection");
              }}
              className={`${
                viewFilter.collection
                  ? " bg-gradient-to-r from-violet-50 to-green-60"
                  : "border-2 border-violet-50"
              } w-full absolute cursor-pointer z-6 flex items-center justify-between px-5.5 h-13.5 rounded-10 `}
            >
              <p
                className={`${
                  viewFilter.collection ? "text-white" : "text-violet-50"
                }`}
              >
                {collectionFilterValue}
              </p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 9L12 16L5 9"
                  stroke={`${viewFilter.collection ? "#fff" : "#6549F6"}`}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            {viewFilter.collection && (
              <div className="rounded-10 rounded-t-none w-full absolute z-5 top-11.5 bg-gradient-to-r p-0.5 from-violet-50 to to-green-60">
                <div className="w-full rounded-10 rounded-t-none bg-white">
                  <div className="w-full  flex flex-col">
                    {collectionTabs.map((value, index) => (
                      <p
                        onClick={() => {
                          setCollectionValue(collectionTabs[index]);
                          handleFilter("collection", false);
                        }}
                        className={`${
                          index < collectionTabs.length - 1
                            ? "border border-grey-20"
                            : ""
                        } w-full flex items-center hover:text-violet-50 cursor-pointer px-5.5 h-13.5`}
                        key={index}
                      >
                        {value}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Chains */}
          <div className="w-261px text-ft-18_1 font-NeueHaasMedium relative">
            <div
              onClick={() => {
                handleFilter("chain");
              }}
              className={`${
                viewFilter.chain
                  ? " bg-gradient-to-r from-violet-50 to-green-60"
                  : "border-2 border-violet-50"
              } w-full absolute cursor-pointer z-4 flex items-center justify-between px-5.5 h-13.5 rounded-10 `}
            >
              <p
                className={`${
                  viewFilter.chain ? "text-white" : "text-violet-50"
                }`}
              >
                All chains
              </p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 9L12 16L5 9"
                  stroke={`${viewFilter.chain ? "#fff" : "#6549F6"}`}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            {viewFilter.chain && (
              <div className="rounded-10 rounded-t-none w-full absolute z-3 top-11.5 bg-gradient-to-r p-0.5 from-violet-50 to to-green-60">
                <div className="w-full rounded-10 rounded-t-none bg-white">
                  <div className="w-full  flex flex-col">
                    {chainItems.map((value, index) => (
                      <div
                        onClick={() => {
                          setChainValue(chainItems[index]);
                          handleFilter("chain", false);
                        }}
                        className={`${
                          index < chainItems.length - 1
                            ? "border border-grey-20"
                            : ""
                        } w-full flex items-center gap-4 hover:text-violet-50 cursor-pointer px-5.5 h-13.5`}
                        key={index}
                      >
                        <img
                          className=""
                          src={
                            chainFilterValue === chainItems[index]
                              ? "/images/activeRadio.svg"
                              : "/images/unActiveRadio.svg"
                          }
                          alt="/"
                        />
                        <p
                          className={`${
                            chainFilterValue === chainItems[index]
                              ? "text-violet-50"
                              : ""
                          }`}
                        >
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {/* Table */}
      <StatsTable tableData={tableData} />
      <MobileStatsTable tableData={tableData} />
      <button className="w-65 self-center mt-20 text-white text-ft-26 font-NeueHaasMedium rounded-full h-15 bg-gradient-to-r from-violet-10 to-violet-20">
        Load More
      </button>
    </div>
  );
}

interface Props {
  tableData: typeof tableData;
}

function StatsTable(props: Props) {
  return (
    <>
      <table className="w-full hidden lg:table font-NeueHaasMedium max-w-1210">
        <thead className="h-22 text-ft-22 pl-7 w-full items-center flex">
          <th className="w-2/5 text-left">Collection</th>
          <th className="flex items-center gap-7.5 w-1/5">
            <span>Volume</span>
            <img
              className="w-4 cursor-pointer h-4"
              src="/images/tableArrow.svg"
              alt="/"
            />
          </th>
          <th className="w-1/5 text-left">24hr</th>
          <th className="w-1/5 text-left">7d</th>
          <th className="w-1/5 text-left">Floor Price</th>
        </thead>
        <tbody className="w-full">
          {props.tableData.map((item, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-grey-30" : "bg-white"
              } h-22 pl-7 w-full items-center flex rounded-10`}
            >
              <td className="flex text-ft-24 w-2/5 gap-6">
                <img
                  className="w-13 h-13 border-2 focus-within: rounded-full"
                  src={item.imgCard}
                  alt="/"
                />
                <div className="flex gap-2.5 items-center">
                  <h3>{item.title}</h3>
                  <img src="/images/badgeCheck.svg" alt="/" />
                </div>
              </td>
              <td className="flex gap-5 text-ft-27 text-violet-60 w-1/5 items-center">
                <img src="/images/ethereumCoin.svg" alt="/" />
                <span>{item.volume}</span>
              </td>
              <td className="w-1/5 text-ft-22">
                <span
                  className={`${
                    item.time24 < 0
                      ? "bg-red-10 text-red-10"
                      : "bg-green-10 text-green-10"
                  }  p-2 rounded-full bg-opacity-10`}
                >
                  {item.time24} %
                </span>
              </td>
              <td className="w-1/5 text-ft-22">
                <span
                  className={`${
                    item.time7 < 0
                      ? "bg-red-10 text-red-10"
                      : "bg-green-10 text-green-10"
                  }  p-2 bg-opacity-10 rounded-full`}
                >
                  {item.time7} %
                </span>
              </td>
              <td className="flex gap-5 text-ft-27 text-violet-60 w-1/5 items-center">
                <img src="/images/ethereumCoin.svg" alt="/" />
                <span>{item.floorPrice}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function MobileStatsTable(props: Props) {
  return (
    <div className="w-full mt-6 flex lg:hidden justify-center max-w-1210 flex-wrap gap-4">
      {props.tableData.map((item, index) => (
        <div className="w-72.5 h-32.5 flex flex-col justify-evenly text-ft-22_2 items-center font-NeueHaasMedium rounded-10 shadow-lg">
          <div className="flex gap-2.5 items-center">
            <img
              className="w-13 h-13 border-2 focus-within: rounded-full"
              src={item.imgCard}
              alt="/"
            />
            <div className="flex gap-1 items-center">
              <h1 className="text-ft-20">{item.title}</h1>
              <img src="/images/badgeCheck.svg" alt="/" />
            </div>
          </div>
          <div className="grid w-full grid-cols-3 place-items-center">
            <div className="flex gap-1.5">
              <img src="/images/ethereumCoin.svg" alt="/" />
              <div>
                <h3 className="text-ft-12">Floor</h3>
                <p>{item.floorPrice}</p>
              </div>
            </div>
            <div
              className={`${item.time24 < 0 ? "text-red-10" : "text-green-10"}`}
            >
              <h3 className="text-ft-12">24 hr</h3>
              <p>{item.time24}%</p>
            </div>
            <div
              className={`${item.time7 < 0 ? "text-red-10" : "text-green-10"}`}
            >
              <h3 className="text-ft-12">7d</h3>
              <p>{item.time7}%</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoriesComponent;
