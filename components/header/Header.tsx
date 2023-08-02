import React, { useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../store/searchSlice";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const searchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value || "");
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(setSearchQuery(value));
  };

  return (
    <header className="bg-white border border-black flex justify-start py-1">
      <p className="font-bold mx-4 text-black">
        <span className="text-red">Red</span>Connect
      </p>
      <div className="relative">
        <form onSubmit={handleSearch}>
          <input
            className="bg-gray rounded-large focus:outline-none px-1 pl-7 text-black"
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
    </header>
  );
};

export default Header;