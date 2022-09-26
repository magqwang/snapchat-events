import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import BirthdayCake from "../../assets/Birthday-cake.png";
import { ImCalendar, ImLocation } from "react-icons/im";

const EventDetails = ({ eventDetails }) => {
  return (
    <Stack spacing={2} textAlign="left" backGroundColor="ede5ff">
      <img src={BirthdayCake} alt="event" style={{ width: "100%" }} />
      <Typography
        sx={{
          fontSize: "28px",
          fontWeight: 700,
          color: "#240D57",
          lineHeight: "32px",
          textAign: "left",
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
        }}
      >
        Hosted by {eventDetails.hostName}
      </Typography>
      <Box sx={{ width: "100%", px: "14px" }}>
        <List>
          <ListItem disablePadding>
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
                  {eventDetails.startTime}
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
                  to {eventDetails.endTime}
                </Typography>
              }
            />
          </ListItem>
          <ListItem disablePadding>
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
                  {eventDetails.suburb} {eventDetails.state}
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
