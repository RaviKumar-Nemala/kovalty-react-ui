import { Box, styled, Typography } from '@mui/material';
import React from 'react'

const StyledCareersContainer = styled(Box)`
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

const Careers = () => {
  return (
    <StyledCareersContainer id="careers">
      <StyledTitle>Careers</StyledTitle>
      <Typography fontWeight={900} fontSize='18px'>Everyone has an opportunity to grow in their career through our Kovalty </Typography>
    </StyledCareersContainer>
  )
}

export default Careers