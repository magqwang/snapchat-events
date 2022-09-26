import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ErrorPage from "./routes/ErrorPage";
import LandPage from "./routes/LandPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandPage />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
