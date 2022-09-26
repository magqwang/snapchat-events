import { Container } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { EventProvider } from "./contexts/event.context";
import CreateEvent from "./routes/CreateEvent";
import ErrorPage from "./routes/ErrorPage";
import EventDetails from "./routes/EventDetails";
import LandPage from "./routes/LandPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/create",
      element: <CreateEvent />,
    },
    {
      path: "/event",
      element: <EventDetails />,
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
