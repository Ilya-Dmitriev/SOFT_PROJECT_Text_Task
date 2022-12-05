import { AuthRoute, ProtectedRoute } from "components";
import { lazy } from "react";
import { CleanLayout } from "../layouts/CleanLayout/CleanLayout";
import { NavLayout } from "../layouts/NavLayout/NavLayout";

const AutorisationLazy = lazy(
  () => import("../pages/Authorization/Authorization"),
);
const PostsLazy = lazy(() => import("../pages/Posts/Posts"));
const AlbumsLazy = lazy(() => import("../pages/Albums/Albums"));
const TodosLazy = lazy(() => import("../pages/Todos/Todos"));

export const routesInLayouts = [
  {
    key: "clean_layout",
    element: <CleanLayout />,
    routes: [
      {
        key: "auth",
        element: (
          <AuthRoute path="/posts">
            <AutorisationLazy />
          </AuthRoute>
        ),
        path: "/",
      },
    ],
  },
  {
    key: "nav_layout",
    element: <NavLayout />,
    routes: [
      {
        key: "posts",
        element: (
          <ProtectedRoute>
            <PostsLazy />
          </ProtectedRoute>
        ),
        path: "/posts/*",
      },
      {
        key: "adbums",
        element: (
          <ProtectedRoute>
            <AlbumsLazy />
          </ProtectedRoute>
        ),
        path: "/albums/*",
      },
      {
        key: "todos",
        element: (
          <ProtectedRoute>
            <TodosLazy />
          </ProtectedRoute>
        ),
        path: "/todos",
      },
    ],
  },
];
