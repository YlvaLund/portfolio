import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
import ErrorPage from "./pages/ErrorPage";
import Loading from "./components/Loading";
const Process = lazy(() => import("./pages/Process"));
const Landing = lazy(() => import("./pages/Landing"));
const Projects = lazy(() => import("./pages/Projects"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Landing />
          </Suspense>
        ),
      },
      {
        path: "/projects",
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Projects />
          </Suspense>
        ),
      },
      {
        path: "/projects/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <Projects />
          </Suspense>
        ),
      },
      {
        path: "/process",
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Process />
          </Suspense>
        ),
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
