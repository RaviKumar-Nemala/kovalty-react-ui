import { Box, styled, Typography } from "@mui/material";
import React from "react";

const DescriptionOne =
  "At Kovalty teeam , we are passionate about transforming ideas into robust web solutions. With a focus on creativity and technical expertise, we strive to exceed client expectations through personalized service and a collaborative approach to every project.";

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

const ImageContainer = styled(Box)`
  height: 260px;
  width:400px;
  position: relative;
  top:-100%;
  right: -95%;
  z-index: -1;
  display: block;
  @media (max-width: 900px) {
    display: none;
    max-width: 0%;
  }
`;

const DescriptionBox = styled(Box)`
  background-color:#FFFFFF;
  border: 1px solid #00000033;
  box-shadow: 0px 4px 4px 0px #00000040;
  height: 170px;
  padding: 15px 30px;
  position: relative;
  left:50px;
`;

const CardContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 270px;
  margin:30px 0px;
`;

const CardItem = ({
  img,
  description,
}: {
  img: string;
  description: string;
}) => {
  return (
    <CardContainer >
      <DescriptionBox width="60%">
        <Typography>{description}</Typography>
        <ImageContainer>
          <Box
            component="img"
            src={img}
            alt="Kovalty Technologies"
            style={{ height: "100%", width: "100%" }}
          />
        </ImageContainer>
      </DescriptionBox>
    </CardContainer>
  );
};

const AboutUs = () => {
  return (
    <StyledServicesContainer id="about">
      <StyledTitle>About Us</StyledTitle>
      <CardItem description={DescriptionOne} img="/assets/about-us-1.png" />
      <CardItem description={DescriptionOne} img="/assets/about-us-2.png" />
      <Typography fontStyle="italic" fontWeight={900} textAlign='center' fontSize='18px'>
        “Our team kovalty never disappoint a client , we follow guidelines
        throughout the completion of the project “ - Kovalty team{" "}
      </Typography>
    </StyledServicesContainer>
  );
};

export default AboutUs;
