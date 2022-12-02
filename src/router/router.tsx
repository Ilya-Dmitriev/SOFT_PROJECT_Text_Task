import { lazy } from "react";
import { CleanLayout } from "../layouts/CleanLayout/CleanLayout";

const PostsLazy = lazy(() => import("../pages/Posts/Posts"));
const AlbomsLazy = lazy(() => import("../pages/Alboms/Alboms"));
const TodosLazy = lazy(() => import("../pages/Todos/Todos"));

export const routesInLayouts = [
  {
    key: "clean_layout",
    element: <CleanLayout />,
    routes: [
      {
        key: "posts",
        element: <PostsLazy />,
        path: "/posts/*",
      },
      {
        key: "adboms",
        element: <AlbomsLazy />,
        path: "/alboms/*",
      },
      {
        key: "todos",
        element: <TodosLazy />,
        path: "/todos/*",
      },
    ],
  },
];
