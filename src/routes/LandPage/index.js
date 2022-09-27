import { Box, Button, Stack, Typography } from "@mui/material";
// import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LandingImage from "../../assets/Landing-page-image.svg";
import "./index.css";

const LandPage = ({ mediaType }) => {
  const navigate = useNavigate();

  return (
    <main>
      <Stack
        spacing={2}
        direction={mediaType === "laptop" ? "row-reverse" : "column"}
        sx={{
          justifyContent: "space-around",
          alignItems: "center",
          mt: "60px",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <Box sx={{ textAlign: mediaType === "laptop" ? "right" : "center" }}>
          <Typography
            sx={{
              fontSize: mediaType === "mobile" ? "36px" : "64px",
              lineHeight: mediaType === "mobile" ? "36px" : "64px",
              fontWeight: 700,
              color: "#240D57",
            }}
          >
            Imagine If
          </Typography>
          <Typography
            sx={{
              fontSize: mediaType === "mobile" ? "36px" : "64px",
              lineHeight: mediaType === "mobile" ? "41px" : "73px",
              fontWeight: 700,
              backgroundImage: `linear-gradient(90deg, #8456EC 24.2%, #E87BF8 120.46%);`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            Snapchat
          </Typography>
          <Typography
            sx={{
              fontSize: mediaType === "mobile" ? "36px" : "64px",
              lineHeight: mediaType === "mobile" ? "36px" : "64px",
              fontWeight: 700,
              color: "#240D57",
            }}
          >
            had events.
          </Typography>
          <Typography
            sx={{
              fontSize: mediaType === "mobile" ? "16px" : "24px",
              lineHeight: mediaType === "mobile" ? "18px" : "27px",
              width: mediaType === "mobile" ? "321px" : "521px",
              fontWeight: 300,
              color: "#4f4f4f",
            }}
          >
            Easily host and share events with your friends across any social
            media.
          </Typography>
          {mediaType === "laptop" && (
            <Button
              variant="contained"
              onClick={() => navigate("/create")}
              sx={{
                textTransform: "none",
                backgroundImage:
                  "linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%);",
                padding: "16px",
                borderRadius: "10px",
                fontSize: "20px",
                fontWeight: 700,
                width: "320px",
                height: "55px",
                mt: "52px",
              }}
            >
              🎉 Create my event
            </Button>
          )}
        </Box>
        <img className="landing-image" src={LandingImage} alt="Landing" />
        {mediaType !== "laptop" && (
          <Button
            variant="contained"
            onClick={() => navigate("/create")}
            sx={{
              textTransform: "none",
              backgroundImage:
                "linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%);",
              padding: "16px",
              borderRadius: "10px",
              fontWeight: 700,
              fontSize: mediaType === "mobile" ? "16px" : "20px",
              width: mediaType === "mobile" ? "187px" : "320px",
              height: mediaType === "mobile" ? "50px" : "55px",
              letterSpacing: "-0.01em",
            }}
          >
            🎉 Create my event
          </Button>
        )}
      </Stack>
    </main>
  );
};

export default LandPage;
