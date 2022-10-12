import React from "react";
import { Link } from "react-router-dom";
import "./User.css";

const UserSingle = ({ user }) => {
  return (
    <div className="user-card p-5 rounded-md  shadow-lg bg-slate-300 ">
      <div className="z-10">
        <h2 className="font-bold">{user.name}</h2>
        <p>email : {user.email}</p>
        <Link
          to={`/user/${user.id}`}
          className="text-sm text-blue-700 duration-300 font-light hover:font-bold hover:text-orange-600  }"
        >
          user id :{user.username}
        </Link>
      </div>
    </div>
  );
};

export default UserSingle;
