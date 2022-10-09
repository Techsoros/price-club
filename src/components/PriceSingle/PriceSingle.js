import React from "react";
import { CheckCircleIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
const PriceSingle = ({ price }) => {
  return (
    <div className="">
      <div className="price-card-main rounded-md grid gap-y-5 bg-gray-200">
        <div className="card-head bg-slate-300 py-3 rounded-t-md">
          <h2 className="text-2xl">{price.name}</h2>
        </div>
        <div className="card-price">
          <span className="text-5xl font-bold text-gray-800">
            ${price.price}
          </span>
          <span className="text-2xl">/month</span>
        </div>
        <div className="feature mx-auto">
          {price.feature.map((adv) => (
            <ul>
              <li className="text-[20px] text-gray-700 flex items-center ">
                <CheckCircleIcon className="w-8 mr-2"></CheckCircleIcon>
                {adv}
              </li>
            </ul>
          ))}
        </div>
        <div className="card-footer w-100">
          <button className="bg-green-500 rounded-lg  duration-300 hover:bg-green-700 hover:text-yellow-300 w-3/4 mx-auto block my-3 text-yellow-50 mb-8 py-3  ">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceSingle;
