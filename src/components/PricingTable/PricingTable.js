import React from "react";
import PriceSingle from "../PriceSingle/PriceSingle";

const PricingTable = () => {
  const pricings = [
    {
      name: "Basic",
      price: 0,
      feature: [
        "10 users included",
        "2 GB of storage",
        "Email support",
        "Help center access",
      ],
    },
    {
      name: "Standard",
      price: 29.99,
      feature: [
        "100 users included",
        "20 GB of storage",
        "Email  & Tele support",
        "Help center access",
      ],
    },
    {
      name: "Premium",
      price: 99.99,
      feature: [
        "unlimited users included",
        "200 GB of storage",
        "Live support",
        "Help center access",
      ],
    },
  ];
  return (
    <div>
      <h1 className="font-bold text-6xl bg-slate-300 p-7 rounded-lg m-9 te text-gray-800 ">
        Explore Our Pricing
      </h1>
      <div className="price-container grid md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
        {pricings.map((option, idx) => (
          <PriceSingle key={idx} price={option}></PriceSingle>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
