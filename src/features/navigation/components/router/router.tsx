import { AppLayout, NotFound } from "@components";
import { ROUTES } from "../../constants";
import { Home, Person } from "@pages";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: ROUTES.NOT_FOUND,
        element: <NotFound />,
      },
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.PERSON,
        element: <Person />,
      },
    ],
  },
]);
