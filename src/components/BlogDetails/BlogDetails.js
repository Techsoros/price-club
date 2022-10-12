import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const { title, body, userId } = useLoaderData();
  const navigate = useNavigate();

  return (
    <div>
      <h1
        data-aos="fade-down"
        className="font-bold text-4xl bg-slate-300 p-7 rounded-lg m-9 te text-gray-800   "
      >
        {title}
      </h1>
      <p className="text-2xl max-w-xl mx-auto shadow-lg bg-slate-100 p-7 rounded-lg m-9 te text-gray-800">
        {body}
      </p>
      <div className="button-group">
        <div
          onClick={() => navigate("../blog")}
          className="btn-blog cursor-pointer bg-green-700 hover:bg-green-500 inline-block mt-5 mx-3 text-white py-4 px-8 rounded-lg"
        >
          See another Blog
        </div>
        <div
          onClick={() => navigate(`../../user/${userId}`)}
          className="btn-blog cursor-pointer bg-blue-700 hover:bg-blue-500 inline-block mt-5 mx-3 text-white py-4 px-8 rounded-lg"
        >
          See Author
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
