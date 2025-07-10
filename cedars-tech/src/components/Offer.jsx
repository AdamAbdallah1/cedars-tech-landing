import React from "react";
import { SiNetflix } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";
import Anghami from "../assets/anghami-icon.svg";
import Shahid from "../assets/shahid-icon.svg";
import Osn from "../assets/osn-icon.svg";

const Offer = () => {
  return (
    <section className="flex flex-col items-center text-center gap-6 py-25">
      <h1 className="text-4xl font-bold">What We Offer</h1>
      <p className="text-gray-600 max-w-xl">
        Get all your favorite channels, movies, and live sports — for less.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-10 w-full max-w-6xl px-4">
        <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
          <div className="flex items-center justify-center mb-4">
            <SiNetflix size={40} className="text-red-600" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">Netflix</h2>
          <p className="text-gray-700 mb-2 font-semibold">Prices:</p>
          <ul className="text-gray-600">
            <li>1 Month: $3</li>
            <li>3 Months: $8</li>
            <li>12 Months: $25</li>
          </ul>
        </div>

        <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
          <div className="flex items-center justify-center mb-4">
            <img width={45} src={Anghami} alt="" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">Anghami</h2>
          <p className="text-gray-700 mb-2 font-semibold">Prices:</p>
          <ul className="text-gray-600">
            <li>1 Month: $3</li>
            <li>3 Months: $8</li>
            <li>12 Months: $25</li>
          </ul>
        </div>

        <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
          <div className="flex items-center justify-center mb-4">
            <img width={80} src={Shahid} alt="" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">Shahid VIP</h2>
          <p className="text-gray-700 mb-2 font-semibold">Prices:</p>
          <ul className="text-gray-600">
            <li>1 Month: $3</li>
            <li>3 Months: $8</li>
            <li>12 Months: $25</li>
          </ul>
        </div>

        <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
          <div className="flex items-center justify-center mb-4">
            <img width={50} src={Osn} alt="" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">OSN Plus</h2>
          <p className="text-gray-700 mb-2 font-semibold">Prices:</p>
          <ul className="text-gray-600">
            <li>1 Month: $3</li>
            <li>3 Months: $8</li>
            <li>12 Months: $25</li>
          </ul>
        </div>

        
      </div>
    </section>
  );
};

export default Offer;
