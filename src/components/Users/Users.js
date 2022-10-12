import React from "react";
import { useLoaderData } from "react-router-dom";
import UserSingle from "../UserSingle/UserSingle";

const Users = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div className="">
      <h1 className="font-bold text-6xl bg-slate-300 p-7 rounded-lg m-9 te text-gray-800 ">
        See Our Clients : {users.length}
      </h1>
      <div className="container user-box mx-auto my-10 grid md:grid-cols-3 gap-10 ">
        {users.map((user) => (
          <UserSingle key={user.id} user={user}></UserSingle>
        ))}
      </div>
    </div>
  );
};

export default Users;
