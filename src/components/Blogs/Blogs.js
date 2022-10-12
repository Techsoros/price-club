import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const Blogs = () => {
  const blogs = useLoaderData();
  console.log(blogs);

  const navigate = useNavigate();
  const setUrl = (id) => {
    navigate(`${id}`);
  };

  return (
    <div>
      <h1
        data-aos="fade-down"
        className="font-bold text-6xl bg-slate-300 p-7 rounded-lg m-9 te text-gray-800   "
      >
        Read our Blog
      </h1>
      <p>Total {blogs.length} article found!</p>
      <div className="container my-5 mx-auto grid md:grid-cols-3  gap-12 ">
        {blogs.map((blog) => (
          <article
            key={blog.id}
            data-aos="zoom-in-up"
            className=" flex flex-col justify-between shadow-lg border-2 rounded p-5 border-stone-300 space-y-10 "
          >
            <div className="body">
              <h2 className="font-bold">Title :: {blog.title}</h2>
              <p className="">{blog.title} ...</p>
            </div>

            <button
              onClick={() => setUrl(blog.id)}
              className="py-3 px-6 bg-slate-600 duration-300 hover:font-semibold hover:border-2 hover:border-green-800 text-slate-200 rounded-lg hover:bg-blue-500"
            >
              See more
            </button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
