import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter, LoaderFunction } from "react-router-dom";
import "./index.css";
import NewPost, { action as newPostAction } from "./routes/NewPost.tsx";
import RootLayout from "./routes/RootLayout.tsx";
import Posts, { loader as postsLoader } from "./routes/Posts.tsx";
import PostDetails, { loader as postDetailsLoader } from "./routes/PostDetails.tsx";

const router = createBrowserRouter([
 {
  path: "/",
  element: <RootLayout />,
  children: [
   {
    path: "/",
    element: <Posts />,
    loader: postsLoader,
    children: [
     { path: "create-post", element: <NewPost />, action: newPostAction },
     { path: ":id", element: <PostDetails />, loader: postDetailsLoader as unknown as LoaderFunction },
    ],
   },
  ],
 },
]);

createRoot(document.getElementById("root")!).render(
 <StrictMode>
  <RouterProvider router={router} />
 </StrictMode>,
);
