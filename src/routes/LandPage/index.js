import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LandingImage from "../../assets/Landing-page-image.svg";
import "./index.css";

const LandPage = () => {
  const navigate = useNavigate();
  return (
    <Stack
      spacing={2}
      justifyContent="center"
      alignItems="center"
      mt="60px"
      mx="27px"
    >
      <Box>
        <Typography
          sx={{
            fontSize: "36px",
            fontWeight: 700,
            color: "#240D57",
            lineHeight: "41px",
          }}
        >
          Imagine If
        </Typography>
        <Typography
          sx={{
            fontSize: "36px",
            fontWeight: 700,
            backgroundImage: `linear-gradient(90deg, #8456EC 24.2%, #E87BF8 120.46%);`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
            lineHeight: "41px",
          }}
        >
          SnapChat
        </Typography>
        <Typography
          sx={{
            fontSize: "36px",
            fontWeight: 700,
            color: "#240D57",
            lineHeight: "41px",
          }}
        >
          had events.
        </Typography>
        <Typography
          sx={{
            color: "#4f4f4f",
            fontSize: "16px",
            lineHeight: "18px",
            mt: "16px",
          }}
        >
          Easily host and share events with your friends across any social
          media.
        </Typography>
      </Box>
      <img className="landing-image" src={LandingImage} alt="Landing" />
      <Button
        variant="contained"
        onClick={() => navigate("/create")}
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
      >
        🎉 Create my event
      </Button>
    </Stack>
  );
};

export default LandPage;
