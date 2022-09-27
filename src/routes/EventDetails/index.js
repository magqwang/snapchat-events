import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { EventContext } from "../../contexts/event.context";

import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import BirthdayCake from "../../assets/Birthday-cake.png";
import { ImCalendar, ImLocation } from "react-icons/im";
import { AiOutlineRight } from "react-icons/ai";

import "./index.css";

const EventDetails = ({ mediaType }) => {
  const navigate = useNavigate();
  const { eventDetails } = useContext(EventContext);

  return (
    <Stack
      spacing={mediaType === "laptop" ? 10 : 2}
      direction={mediaType === "laptop" ? "row-reverse" : "column"}
      sx={{
        justifyContent: mediaType === "laptop" && "space-around",
        alignItems: mediaType === "laptop" ? "start" : "center",
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        mt: mediaType !== "mobile" && "88px",
        mx: "auto",
        width:
          mediaType === "tablet"
            ? "593px"
            : mediaType === "laptop"
            ? "500px"
            : "100%",
      }}
    >
      <img className="event-photo" src={BirthdayCake} alt="event" />
      <Stack
        spacing={2}
        sx={{
          width: "100%",
          textAlign: "left",
          px:
            mediaType === "mobile" ? "20px" : mediaType === "tablet" && "50px",
        }}
      >
        <Typography
          sx={{
            fontSize: "28px",
            fontWeight: 700,
            color: "#240D57",
            lineHeight: "32px",
            width: "333px",
          }}
        >
          {eventDetails.eventName}
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 700,
            color: "#828282",
            lineHeight: "16px",
          }}
        >
          Hosted by {eventDetails.hostName}
        </Typography>
        <List>
          <ListItem
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="edit"
                sx={{ color: "#BDBDBD" }}
                onClick={() => navigate("/create")}
              >
                <AiOutlineRight />
              </IconButton>
            }
          >
            <ListItemIcon sx={{ color: "#8456EC" }}>
              <ImCalendar />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#240D57",
                    lineHeight: "18px",
                  }}
                >
                  {eventDetails.startDate} {eventDetails.startTime}
                </Typography>
              }
              secondary={
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#4F4F4F",
                    lineHeight: "16px",
                  }}
                >
                  to {eventDetails.endDate} {eventDetails.endTime}
                </Typography>
              }
            />
          </ListItem>
          <ListItem
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="edit"
                sx={{ color: "#BDBDBD" }}
                onClick={() => navigate("/create")}
              >
                <AiOutlineRight />
              </IconButton>
            }
          >
            <ListItemIcon sx={{ color: "#8456EC" }}>
              <ImLocation />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#240D57",
                    lineHeight: "18px",
                  }}
                >
                  {eventDetails.street}
                </Typography>
              }
              secondary={
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#4F4F4F",
                    lineHeight: "16px",
                  }}
                >
                  {eventDetails.suburb} {eventDetails.state}{" "}
                  {eventDetails.postcode}
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};

export default EventDetails;
