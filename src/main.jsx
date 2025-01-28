import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import BlogPage from "./Pages/BlogPage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import CoursePage from "./Pages/CoursePage.jsx";
import HomePage from "./Pages/HomePage.jsx";
import SignUpAdminPage from "./Pages/SignUpAdminPage.jsx";
import SignUpInstructorPage from "./Pages/SignUpInstructorPage.jsx";
import SignUpUserPage from "./Pages/SignUpUserPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/blog", element: <BlogPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/courses", element: <CoursePage /> },
      { path: "/signup/admin", element: <SignUpAdminPage /> },
      { path: "/signup/instructor", element: <SignUpInstructorPage /> },
      { path: "/signup/user", element: <SignUpUserPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
