import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { EventProvider } from "./contexts/event.context";
import CreateEvent from "./routes/CreateEvent";
import ErrorPage from "./routes/ErrorPage";
import EventDetails from "./routes/EventDetails";
import LandPage from "./routes/LandPage";

function App() {
  const [mediaType, setMediaType] = useState("mobile");

  useEffect(() => {
    const smallDevice = window.matchMedia("(max-width: 767px)");
    const medianDevice = window.matchMedia(
      "(min-width: 768px) and (max-width: 1023px)"
    );

    const handleDeviceChange = () => {
      if (smallDevice.matches) setMediaType("mobile");
      else if (medianDevice.matches) setMediaType("tablet");
      else setMediaType("laptop");
    };

    window.addEventListener("resize", handleDeviceChange);
    handleDeviceChange();
    return () => window.removeEventListener("resize", handleDeviceChange);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandPage mediaType={mediaType} />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/create",
      element: <CreateEvent mediaType={mediaType} />,
    },
    {
      path: "/event",
      element: <EventDetails mediaType={mediaType} />,
    },
  ]);

  return (
    <EventProvider>
      <Container maxWidth="xl" sx={{ textAlign: "center" }}>
        <RouterProvider router={router} />
      </Container>
    </EventProvider>
  );
}

export default App;
