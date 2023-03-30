import React from "react";
import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "./error-page";
import App from "./App";
import Photos from "./components/Photos";

import { photoLoader } from "./helpers/helper-photos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/:tag",
        element: <Photos />,
        loader: async ({ params }) => {
          const photos = await photoLoader(params);
          return { photos, params };
        }
      }
    ]
  }
]);

export default router;
