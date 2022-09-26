import { Container } from "@mui/material";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateEvent from "./routes/CreateEvent";
import ErrorPage from "./routes/ErrorPage";
import EventDetails from "./routes/EventDetails";
import LandPage from "./routes/LandPage";

function App() {
  const [eventDetails, setEventDetails] = useState({
    eventName: "",
    hostName: "",
    startTime: "",
    endTime: "",
    street: "",
    suburb: "",
    state: "",
    postcode: "",
    eventPhoto: "",
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/create",
      element: (
        <CreateEvent
          eventDetails={eventDetails}
          setEventDetails={(e) => setEventDetails(e)}
        />
      ),
    },
    {
      path: "/event",
      element: <EventDetails eventDetails={eventDetails} />,
    },
  ]);

  return (
    <Container sx={{ textAlign: "center" }}>
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
