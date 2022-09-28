import dayjs from "dayjs";
import { useState } from "react";
import { createContext } from "react";

export const EventContext = createContext({
  EventName: "",
  HostName: "",
  StartTimeDate: "",
  EndTimeDate: "",
  Street: "",
  Suburb: "",
  State: "",
  Postcode: "",
  EventPhoto: "",
});

export const EventProvider = ({ children }) => {
  const [eventDetails, setEventDetails] = useState({
    EventName: "",
    HostName: "",
    StartTimeDate: dayjs(),
    EndTimeDate: dayjs(),
    Street: "",
    Suburb: "",
    State: "",
    Postcode: "",
    EventPhoto: "",
  });

  const value = { eventDetails, setEventDetails };
  return (
    <EventContext.Provider value={value}>{children}</EventContext.Provider>
  );
};
