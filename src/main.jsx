import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import CoursePage from "./pages/CoursePage.jsx";
import HomePage from "./pages/HomePage.jsx";
import SignUpAdminPage from "./pages/SignUpAdminPage.jsx";
import SignUpInstructorPage from "./pages/SignUpInstructorPage.jsx";
import SignUpUserPage from "./pages/SignUpUserPage.jsx";

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
