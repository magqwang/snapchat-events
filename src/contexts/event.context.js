import { useState } from "react";
import { createContext } from "react";

export const EventContext = createContext({
  eventName: "",
  hostName: "",
  startTime: "",
  startDate: "",
  endTime: "",
  endDate: "",
  street: "",
  suburb: "",
  state: "",
  postcode: "",
  eventPhoto: "",
});

export const EventProvider = ({ children }) => {
  const [eventDetails, setEventDetails] = useState({
    eventName: "",
    hostName: "",
    startTime: "",
    startDate: "",
    endTime: "",
    endDate: "",
    street: "",
    suburb: "",
    state: "",
    postcode: "",
    eventPhoto: "",
  });

  const value = { eventDetails, setEventDetails };
  return (
    <EventContext.Provider value={value}>{children}</EventContext.Provider>
  );
};
