import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import Home from "./pages/Home";
import About from "./pages/About";
import Article from "./pages/Article";

const getWeatherOfTheDay = () => {
  return "sunny";
};


const getSomeData = (id) => {
  const allData = {
    42: {
      title: "Lorem Ipsum",
      content: "Lorem ipsum dolor sit amet",
    },
    123: {
      title: "Schnapsum",
      content: "Lorem Elsass ipsum Salut bisamme",
    },
    666: {
      title: "Cupcake Ipsum",
      content: "Tiramisu pastry wafer brownie soufflé",
    },
  };

  return allData[id];
};

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => {
          return getWeatherOfTheDay();
        },
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/articles/:id",
        element: <Article />,
        loader: ({ params }) => {
          return getSomeData(params.id);
        },
      },
    ], 
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
