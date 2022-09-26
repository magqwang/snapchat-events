import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CreateEvent = ({ eventDetails, setEventDetails }) => {
  const navigate = useNavigate();

  const handleChange = (event) => {
    setEventDetails({
      ...eventDetails,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <Typography
        sx={{
          fontSize: "36px",
          fontWeight: 700,
          color: "#240D57",
          lineHeight: "41px",
          mt: "60px",
          mb: "20px",
        }}
      >
        Create Event
      </Typography>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 2, width: "80%" },
        }}
      >
        <TextField
          required
          variant="outlined"
          label="Event Name"
          name="eventName"
          onChange={handleChange}
        />
        <TextField
          required
          variant="outlined"
          label="Host Name"
          name="hostName"
          onChange={handleChange}
        />
        <TextField
          required
          variant="outlined"
          label="Start Time"
          name="startTime"
          type="time"
          onChange={handleChange}
        />
        <TextField
          required
          variant="outlined"
          label="Start Date"
          name="startDate"
          type="date"
          onChange={handleChange}
        />
        <TextField
          required
          variant="outlined"
          label="End Time"
          name="endTime"
          type="time"
          onChange={handleChange}
        />
        <TextField
          required
          variant="outlined"
          label="End Date"
          name="endDate"
          type="date"
          onChange={handleChange}
        />
        <TextField
          required
          variant="outlined"
          label="street"
          name="street"
          onChange={handleChange}
        />
        <TextField
          required
          variant="outlined"
          label="suburb"
          name="suburb"
          onChange={handleChange}
        />
        <TextField
          required
          variant="outlined"
          label="state"
          name="state"
          onChange={handleChange}
        />
        <TextField
          required
          variant="outlined"
          label="postcode"
          name="postcode"
          onChange={handleChange}
        />
        <TextField
          required
          variant="outlined"
          label="Event Photo"
          name="eventPhoto"
          onChange={handleChange}
        />
      </Box>
      <Button
        variant="contained"
        onClick={() => navigate("/event")}
        sx={{
          textTransform: "none",
          backgroundImage:
            "linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%);",
          padding: "16px",
          borderRadius: "10px",
          fontSize: "16px",
          width: "187px",
          height: "50px",
        }}
        type="submit"
      >
        Next
      </Button>
    </>
  );
};

export default CreateEvent;
