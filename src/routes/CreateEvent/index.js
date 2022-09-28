import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { EventContext } from "../../contexts/event.context";
import { Box, Button, TextField, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const CreateEvent = ({ mediaType }) => {
  const navigate = useNavigate();
  const { eventDetails, setEventDetails } = useContext(EventContext);

  const handleChange = (event) => {
    setEventDetails({
      ...eventDetails,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Box sx={{ position: "absolute" }}>
      <Typography
        sx={{
          fontSize: "36px",
          fontWeight: 700,
          color: "#240D57",
          lineHeight: "41px",
          mt: "60px",
        }}
      >
        Create Event
      </Typography>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/event");
        }}
      >
        <Box
          sx={{
            "& .MuiTextField-root": {
              m: 2,
              width: mediaType === "laptop" ? "40%" : "75%",
            },
          }}
        >
          {Object.keys(eventDetails).map((key) => {
            if (!key.includes("Time")) {
              return (
                <TextField
                  key={key}
                  required
                  variant="outlined"
                  label={key}
                  name={key}
                  type="text"
                  InputLabelProps={{ shrink: true }}
                  value={eventDetails[key]}
                  onChange={handleChange}
                />
              );
            } else {
              return (
                <LocalizationProvider key={key} dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    required
                    label={key}
                    name={key}
                    value={eventDetails[key]}
                    onChange={(newValue) =>
                      setEventDetails({
                        ...eventDetails,
                        [key]: newValue,
                      })
                    }
                  />
                </LocalizationProvider>
              );
            }
          })}
        </Box>
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            backgroundImage:
              "linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%);",
            padding: "16px",
            borderRadius: "10px",
            fontSize: "16px",
            width: "187px",
            height: "50px",
            mx: "auto",
          }}
          type="submit"
        >
          Next
        </Button>
      </form>
    </Box>
  );
};

export default CreateEvent;
