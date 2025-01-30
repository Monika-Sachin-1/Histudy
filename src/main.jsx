import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import About from "./Pages/About.jsx";
import Blog from "./Pages/Blog.jsx";
import Contact from "./Pages/Contact.jsx";
import Course from "./Pages/Course.jsx";
import Home from "./Pages/Home.jsx";
import SignUpAdmin from "./Pages/SignUpAdmin.jsx";
import SignUpInstructor from "./Pages/SignUpInstructor.jsx";
import SignUpUser from "./Pages/SignUpUser.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/blog", element: <Blog /> },
      { path: "/contact", element: <Contact /> },
      { path: "/courses", element: <Course /> },
      { path: "/signup/admin", element: <SignUpAdmin /> },
      { path: "/signup/instructor", element: <SignUpInstructor /> },
      { path: "/signup/user", element: <SignUpUser /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
