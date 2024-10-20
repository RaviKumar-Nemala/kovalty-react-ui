import { Box, styled, Typography } from '@mui/material';
import React from 'react'

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
  height: 220px;
  width:300px;
  border-radius:5px;
  overflow:hidden;
`;

const ClientImages = ({ img }: { img: string }) => {
return (
  <ImageContainer>
    <Box
      component="img"
      src={img}
      alt="Kovalty Technologies"
      style={{ height: "100%", width: "100%" }}
    />
  </ImageContainer>
);
};


const Industries = () => {
  return (
    <StyledServicesContainer id="industries">
      <StyledTitle>Industries</StyledTitle>
      <ClientImages img="/assets/client-1.png"/>
    </StyledServicesContainer>
  );
}

export default Industries