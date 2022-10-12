import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const details = useLoaderData();
  const { email, website, phone, name } = details;
  console.log(details);
  return (
    <div className="my-10  space-y-7">
      <p>Displaying the details of </p>
      <h1 className="text-6xl">{name}</h1>
      <p className="text-2xl">Contact : {phone} </p>
      <p className="text-2xl">website : {website} </p>
      <Link
        to="/user"
        className="bg-green-700 hover:bg-green-500 inline-block mt-10 text-white py-4 px-8 rounded-lg"
      >
        Back to user
      </Link>
    </div>
  );
};

export default UserDetails;
