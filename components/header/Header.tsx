import React, { useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../store/searchSlice";
import { setFilterState } from "../store/filterSlice";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [buttonsState, setButtonsState] = useState({hot: true, new: false})

  const searchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value || "");
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(setSearchQuery(value));
  };

  const handleButtonClick = (buttonName: string): void => {
    setButtonsState({
      hot: buttonName === 'hot',
      new: buttonName === 'new'
    })

    dispatch(setFilterState(buttonName));
  }

  return (
    <header className="bg-white border border-black flex justify-start py-1">
      <p className="font-bold mx-4 text-black">
        <span className="text-customRed">Red</span>Connect
      </p>
      <div className="relative">
        <form onSubmit={handleSearch}>
          <input
            className="bg-customGray rounded-large focus:outline-none px-1 pl-7 text-black"
            value={value}
            onChange={searchChange}
          />
        </form>
        <Image
          className="h-4 w-4 absolute top-1/2 left-2 transform -translate-y-1/2"
          src="/img/482631.png"
          alt="search image"
          width={24}
          height={24}
        />
      </div>
      <div className="flex items-center">
        <button className="ml-4 px-2 border border-black rounded-large" onClick={() => handleButtonClick('hot')}><p className={buttonsState.hot ?  'text-sm font-bold text-customRed' : 'text-sm font-bold text-gray-500'}>Hot</p></button>
        <button className="ml-4 px-2 border border-black rounded-large" onClick={() => handleButtonClick('new')}><p className={buttonsState.new ?  'text-sm font-bold text-customRed' : 'text-sm font-bold text-gray-500'}>New</p></button>
      </div>
    </header>
  );
};

export default Header;