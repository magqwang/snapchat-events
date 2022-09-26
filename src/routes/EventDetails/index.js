import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { EventContext } from "../../contexts/event.context";

import {
  Box,
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

const EventDetails = () => {
  const navigate = useNavigate();
  const { eventDetails } = useContext(EventContext);

  return (
    <Stack
      spacing={2}
      sx={{
        textAlign: "left",
        bgColor: "#dddddd",
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
      }}
    >
      <img src={BirthdayCake} alt="event" style={{ width: "100%" }} />
      <Typography
        sx={{
          fontSize: "28px",
          fontWeight: 700,
          color: "#240D57",
          lineHeight: "32px",
          textAign: "left",
          px: "20px",
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
          textAign: "left",
          px: "20px",
        }}
      >
        Hosted by {eventDetails.hostName}
      </Typography>
      <Box sx={{ width: "100%", px: "34px" }}>
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
      </Box>
    </Stack>
  );
};

export default EventDetails;
