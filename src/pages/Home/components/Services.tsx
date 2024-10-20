import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";

const DescriptionOne = '"We excel in crafting bespoke web applications that align perfectly with your business goals, leveraging cutting-edge technologies for seamless functionality and user experience."'

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

const CardsContainer = styled(Stack)`
  flex-direction: row;
  flex: wrap;
  margin-bottom:20px;
  justify-content:space-between;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledCard = styled(Card)`
  width: 30%;
  margin:15px;
  background-color:#FFFFFF;
  font-size:20px;
  @media (max-width: 900px) {
    width: 60%;
  font-size:18px;
  }
  @media (max-width: 500px) {
    width: 95%;
  font-size:16px;
  }
`;

const StyledContainer = styled(Box)`
  width: 100%;
  margin-top: 10px;
  border-radius: 0px 30px 0px 30px;
  background-color: #e9d3eb;
  border: 1px solid #00000033;
  padding: 15px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled(Box)`
  min-width: 320px;
  border-radius: 10px 0px 0px 0px;
`;

const ActionAreaCard = ({ img, description }: { img: string,description:string }) => {
  return (
    <StyledCard>
      <CardActionArea>
        <CardMedia component="img" image={img} width="100%" />
        <CardContent>
          <Typography fontWeight={500}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
};

const Services = () => {
  return (
    <StyledServicesContainer id="services">
      <StyledTitle fontWeight={500}>Our Services</StyledTitle>
      <CardsContainer>
        <ActionAreaCard
          img="/assets/OurServicesCard1.png"
          description={DescriptionOne}
        />
        <ActionAreaCard
          img="/assets/OurServicesCard2.png"
          description={DescriptionOne}
        />
        <ActionAreaCard
          img="/assets/OurServicesCard3.png"
          description={DescriptionOne}
        />
      </CardsContainer>
      <StyledTitle fontWeight={500} fontSize={22}>
        Build your project with us
      </StyledTitle>
      <StyledContainer>
        <ImageContainer>
          <Box
            component="img"
            src="/assets/ContactUsImage.png"
            alt="Kovalty Technologies"
            style={{ height: "100%", width: "100%" }}
          />
        </ImageContainer>
        <Box>
          <Typography
            fontWeight={500}
            textAlign="center"
            paddingX={5}
            color="#00000090"
          >
            Kovalty streamlines project management with intuitive tools,
            fostering efficient collaboration and tracking for smoother project
            execution. Its insightful analytics empower informed
            decision-making, ensuring projects stay on track and achieve optimal
            outcomes.
          </Typography>
          <Box width="100%" display="flex" justifyContent="center" mt={1}>
            <Button variant="contained" sx={{ alignSelf: "center" }} onClick={()=>{
              window.location.hash = '';
              window.location.hash = 'contact';
            }}>
              Contact Us
            </Button>
          </Box>
        </Box>
      </StyledContainer>
    </StyledServicesContainer>
  );
};

export default Services;
