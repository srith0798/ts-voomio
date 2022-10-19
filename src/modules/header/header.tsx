import React, { useState } from "react";
import { tokens } from "../../constants";

interface BoolStruct {
  [key: string]: boolean | string;
}

interface State {
  name: string;
  male: boolean;
}

interface Props {
  state: State;
}

const Header = (props: Props) => {
  const [tokenValue, setTokenValue] = useState<string>(tokens[0]);
  const boolValues: BoolStruct = {
    token: false,
    menu: false,
    wallet: props.state.male,
    name: props.state.name,
  };

  const [boolStates, setBoolStates] = useState<BoolStruct>(boolValues);

  const toggleEvents = (value: string, condition?: boolean) => {
    if (!condition)
      setBoolStates((preState) => ({
        ...preState,
        [value]: !preState[value],
      }));
    else
      setBoolStates((preState) => ({
        ...preState,
        [value]: condition,
      }));
  };

  return (
    <div
      className={`${
        boolStates.menu
          ? "bg-pink-20"
          : boolStates.wallet
          ? "bg-white"
          : "bg-blue-150"
      } flex relative z-2 px-5 justify-center shadow-lg ${
        boolStates.wallet
          ? "lg:bg-white text-black-200"
          : "lg:bg-blue-150 text-white"
      } `}
    >
      <div className="w-full max-w-1400 py-5.5">
        {/* Desktop */}
        <div className="hidden lg:flex items-center">
          <img className="w-11.5" src="/images/logoIcon.svg" alt="/" />
          <p className="ml-3 font-TerminaBold text-ft-22">VOOMIO</p>
          <div className="w-129.5 hidden lg:flex rounded-50 border-2 border-violet-50 bg-white ml-8">
            <div className="ml-5.5 flex py-4.5 w-full">
              <img className="mr-5.5" src="/images/searchIcon.svg" alt="/" />
              <input
                className="bg-transparent focus:outline-none w-full placeholder:opacity-40 text-black-200 text-ft-18 font-normal font-NeueHaasMedium"
                type="search"
                placeholder="Search for assets or collections..."
              />
            </div>
            <div className="border-l cursor-pointer custom_width border-opacity-20 border-black-200 text-black-200 text-ft-16 font-NeueHaasBold relative flex items-center pl-4">
              <div
                onClick={() => {
                  toggleEvents("token");
                }}
                className="flex items-center gap-1"
              >
                <span className="uppercase">{tokenValue}</span>
                <img src="/images/arrowDown.svg" alt="/" />
              </div>
              {/* drop */}
              {boolStates.token && (
                <div className="flex w-22 z-10 rounded-md shadow border-2 border-violet-50 bg-white top-17.5 left-0 absolute flex-col">
                  {tokens.map((item, ind) => (
                    <span
                      onClick={() => {
                        setTokenValue(tokens[ind]);
                        toggleEvents("token", false);
                      }}
                      className="text-violet-50 p-2 w-full uppercase"
                      key={ind}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="lg:flex hidden ml-8 xl:ml-11 font-NeueHaasLight font-bold text-ft-18 gap-8 xl:gap-45px">
            <h3 className="cursor-pointer">Explore</h3>
            <h3 className="cursor-pointer">Ranking</h3>
            <h3 className="cursor-pointer">Resources</h3>
            <h3 className="cursor-pointer">Create</h3>
          </div>
          {!boolStates.wallet ? (
            <button
              onClick={() => {
                toggleEvents("wallet", true);
              }}
              className="hidden lg:block ml-53px rounded-full w-52.5 h-13  bg-gradient-to-r text-white from-violet-50 to-green-60"
            >
              Connect Wallet
            </button>
          ) : (
            <div className="flex justify-evenly w-52.5">
              <div className="relative">
                <img
                  className="z-2 absolute"
                  src="/images/bellBadge.svg"
                  alt="/"
                />
                <img
                  className="cursor-pointer"
                  src="/images/bellIcon.svg"
                  alt="/"
                />
              </div>
              <img
                className="cursor-pointer"
                src="/images/cartIcon.svg"
                alt="/"
              />
              <img
                className="cursor-pointer"
                src="/images/smileIcon.svg"
                alt="/"
              />
            </div>
          )}
        </div>
        {/* Mobile */}
        <div className="flex justify-between lg:hidden items-center">
          <div className="flex gap-3 items-center">
            <img className="w-11.5" src="/images/logoIcon.svg" alt="/" />
            <p
              className={`${
                boolStates.menu
                  ? "text-black-200"
                  : boolStates.wallet
                  ? "text-black-200"
                  : "text-white"
              } ml-3 font-TerminaBold text-ft-22`}
            >
              VOOMIO
            </p>
          </div>
          <div className="flex lg:hidden text-white">
            <img className="mr-5.5" src="/images/searchIcon.svg" alt="/" />
            <svg
              onClick={() => {
                toggleEvents("menu");
              }}
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.66699 10H33.3337M6.66699 20H33.3337M21.667 30H33.3337"
                stroke={
                  boolStates.menu
                    ? "#7B61FF"
                    : boolStates.wallet
                    ? "#7B61FF"
                    : "#fff"
                }
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* Popup */}
      {boolStates.menu && (
        <div className="absolute z-1 gap-5 py-5 text-black-200 text-ft-36 font-NeueHaasLight font-bold shadow flex flex-col justify-evenly items-center lg:hidden top-20 left-0 bg-pink-20 w-full h-150">
          <h3 className="cursor-pointer">Explore</h3>
          <h3 className="cursor-pointer">Ranking</h3>
          <h3 className="cursor-pointer">Resources</h3>
          <h3 className="cursor-pointer">Create</h3>
          <button className="rounded-full text-ft-20 w-52.5 h-13  bg-gradient-to-r text-white from-violet-50 to-green-60">
            Connect Wallet
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
