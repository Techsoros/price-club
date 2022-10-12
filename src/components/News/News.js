import axios from "axios";
import React, { useEffect, useState } from "react";

const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/news/category/08")
      .then((data) => {
        const allNews = data.data.data;
        const newsFormatted = allNews.map((newsSingle) => {
          const newsData = {
            id: newsSingle._id,
            name: newsSingle.title,
            view: newsSingle.total_view,
          };
          return newsData;
        });
        setNews(newsFormatted);
      });
  }, []);
  return (
    <div className="">
      <h1 className="font-bold text-6xl bg-slate-300 p-7 rounded-lg m-9 te text-gray-800 ">
        Our News
      </h1>
      <div className="news-card grid md:grid-cols-3 gap-8  container mx-auto my-10">
        {news.map((newsSingle) => (
          <div className=" p-5 border-2 rounded-md border-blue-100 shadow-lg ">
            <h2>{newsSingle.name}</h2>
            <p>{newsSingle.view}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
