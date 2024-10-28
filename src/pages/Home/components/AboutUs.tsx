import { Box, Card, CardContent, CardMedia, styled, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const DescriptionOne =
  "At Kovalty team , we are passionate about transforming ideas into robust web solutions. With a focus on creativity and technical expertise, we strive to exceed client expectations through personalized service and a collaborative approach to every project.";

const DescriptionTwo =
  "Kovalty specializes in providing staffing and customized software solutions for enterprise clients, guided by core values of learning, innovation, quality, and customer satisfaction. Our skilled team, with extensive expertise across technology domains, helps us meet client needs and drive impactful results. We focus on delivering top talent supported by the latest technologies, offering ongoing training and career support to ensure success for both our clients and our talent.";


const StyledServicesContainer = styled(Box)`
  padding: 100px 30px 0px 30px;
  @media (max-width: 900px) {
    padding: 50px 30px 0px 30px;
  }
`;

const StyledTitle = styled(Typography)`
  font-size: 26px;
  color: #222222;
  @media (max-width: 900px) {
    font-size: 22px;
    text-align: center;
  }
`;

const AboutUs = () => {
  const theme = useTheme();
  const isSmOrLess = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <StyledServicesContainer id="about">
      <StyledTitle>About Us</StyledTitle>
      <Card
        sx={{
          display: "flex",
          flexDirection: isSmOrLess ? "column" : "row",
          alignItems: isSmOrLess ? "center" : "flex-start",
          margin: isSmOrLess ? "10px auto" :"10px 80px",
          backgroundColor:theme.palette.background.paper
        }}
      >
        <CardContent
          sx={{
            padding: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Typography variant="body1" color="text.primary">
            {DescriptionOne}
          </Typography>
        </CardContent>

        <CardMedia
          component="img"
          image="/assets/about-us-1.png"
          alt="Sample Image"
          sx={{
            width: isSmOrLess ? "100%" : 180,
            height: isSmOrLess ? 150 : 180,
          }}
        />
      </Card>
     
      <Typography
        fontStyle  = "italic"
        fontWeight = {800}
        textAlign  = "center"
        fontSize   = "18px"
        margin     = "30px 20px"
      >
        “Our team kovalty never disappoint a client , we follow guidelines
        throughout the completion of the project “ - Kovalty team{" "}
      </Typography>
      <Card
        sx={{
          display: "flex",
          flexDirection: isSmOrLess ? "column" : "row",
          alignItems: isSmOrLess ? "center" : "flex-start",
          margin: isSmOrLess ? "auto" :"auto 80px",
        }}
      >
        <CardMedia
          component="img"
          image="/assets/about-us-2.png"
          alt="Sample Image"
          sx={{
            width: isSmOrLess ? "100%" : 220,
            height: isSmOrLess ? 150 : 220,
          }}
        />
        <CardContent
          sx={{
            padding: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Typography variant="body1" color="text.primary">
            {DescriptionTwo}
          </Typography>
        </CardContent>
      </Card>
    </StyledServicesContainer>
  );
};

export default AboutUs;
