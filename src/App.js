import "./App.css";
import PricingTable from "./components/PricingTable/PricingTable";
import BestBatter from "./components/BestBatter/BestBatter";
import News from "./components/News/News";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Error404 from "./components/Error404/Error404";
import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import Blogs from "./components/Blogs/Blogs";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import BlogDetails from "./components/BlogDetails/BlogDetails";
// ..
AOS.init();
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: (
            <div className="">
              <BestBatter></BestBatter>
              <PricingTable></PricingTable>
              <News></News>
            </div>
          ),
        },
        { path: "pricing", element: <PricingTable></PricingTable> },
        { path: "batsman", element: <BestBatter></BestBatter> },
        { path: "information", element: <News></News> },

        {
          path: "blog",
          loader: () => {
            return fetch("https://jsonplaceholder.typicode.com/posts");
          },

          element: <Blogs></Blogs>,
        },
        {
          path: "blog/:blogId",
          loader: ({ params }) => {
            return fetch(
              `https://jsonplaceholder.typicode.com/posts/${params.blogId}`
            );
          },

          element: <BlogDetails></BlogDetails>,
        },

        {
          path: "user",
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/users");
          },

          element: <Users></Users>,
        },
        {
          path: "user/:userId",
          loader: async ({ params }) => {
            return fetch(
              `https://jsonplaceholder.typicode.com/users/${params.userId}`
            );
          },

          element: <UserDetails></UserDetails>,
        },

        { path: "/*", element: <Error404></Error404> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
