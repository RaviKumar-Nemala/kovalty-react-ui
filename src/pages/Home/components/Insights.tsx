import { Box, styled, Typography } from '@mui/material';
import React from 'react'

const Description1 = '"Kovalty offers comprehensive project insights through advanced analytics and reporting tools. By analyzing key metrics and performance indicators, Kovalty enables teams to identify trends, pinpoint potential bottlenecks, and make data-driven decisions. These insights not only enhance project planning and execution but also optimize resource allocation and ensure projects meet their objectives efficiently."';

const StyledTitle = styled(Typography)`
  font-size: 26px;
  color: #222222;
  @media (max-width: 900px) {
    font-size: 22px;
    text-align: center;
  }
`;

const StyledInsightsContainer = styled(Box)`
  padding: 100px 30px 0px 30px;
  @media (max-width: 900px) {
    padding: 50px 30px 0px 30px;
  }
`;

const InsightTextContainer = ({
  title,
  description,
  bgColor,
}: {
  title: string;
  description: string;
  bgColor: string;
}) => (
  <Box bgcolor={bgColor} padding={3}>
    <Typography fontSize={24} color="white" pb={1}>
      {title}
    </Typography>
    <Typography fontSize={16} color="white">
      {description}
    </Typography>
  </Box>
);

const Insights = () => {
  return (
    <StyledInsightsContainer id="insights">
      <StyledTitle>Insights</StyledTitle>
      <Box borderRadius={1} overflow='hidden'>
        <InsightTextContainer
          bgColor="#7A6CCB"
          title="Insight 1"
          description={Description1}
        />
        <InsightTextContainer
          bgColor="#AD88C6"
          title="Insight 2"
          description={Description1}
        />
        <InsightTextContainer
          bgColor="#E9D3EB"
          title="Insight 3"
          description={Description1}
        />
      </Box>
    </StyledInsightsContainer>
  );
}

export default Insights