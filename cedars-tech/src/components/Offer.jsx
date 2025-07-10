import React from "react";
import Anghami from "../assets/anghami-icon.svg";
import Shahid from "../assets/shahid-icon.svg";
import Osn from "../assets/osn-icon.svg";
import Netflix from "../assets/netflix-icon.svg";
import Item from "./Item";
import { TbBrandDisney } from "react-icons/tb";

const Offer = () => {
  return (
    <section className="flex flex-col items-center text-center gap-6 py-25">
      <h1 className="text-4xl font-bold">What We Offer</h1>
      <p className="text-gray-400 max-w-xl">
        Get all your favorite channels, movies, and live sports — for less.
      </p>

      <div className="flex lg:flex-row flex-col">
        <Item imgUrl={Netflix} imgWidth="50"/>
        <Item imgUrl={Anghami} imgWidth="50"/>
        <Item imgUrl={Shahid} imgWidth="120"/>
        <Item imgUrl={Osn} imgWidth="70"/>
        
      </div>
      
    </section>
  );
};

export default Offer;
