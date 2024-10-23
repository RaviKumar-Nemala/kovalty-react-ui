import { Box, Grid, Stack, styled, Typography } from '@mui/material';
import React from 'react'
import { navItems } from '../../../components/Layout/AppBar';
import { ApartmentRounded, Call, Mail } from '@mui/icons-material';

const StyledFotterContainer = styled(Box)`
  padding: 100px 30px;
  @media (max-width: 900px) {
    padding: 50px 30px;
  }
`;

const Fotter = () => {
  return (
    <StyledFotterContainer id="fotter">
      <Grid container>
        <Grid item xs={12} md={4}>
          <Typography color="#08126B" fontSize={18} fontWeight={400}>
            Quick links
          </Typography>
          {navItems.map(({ label, id }) => (
            <Typography
              key={id}
              fontSize={14}
              fontWeight={400}
              paddingBottom={1}
              onClick={() => {
                window.location.hash = "";
                window.location.hash = id;
              }}
              style={{cursor:'pointer'}}
            >
              {label}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={12} md={3} ml={1}>
          <Typography
            color="#08126B"
            fontSize={18}
            fontWeight={400}
            paddingLeft={5}
          >
            Contact
          </Typography>
          <Stack flexDirection="row">
            <ApartmentRounded />
            <Typography
              fontSize={14}
              fontWeight={400}
              textAlign="left"
              paddingLeft={1}
            >
              First Floor,
              <br />
              New Awfis space Building ,<br />
              Kothaguda Junction,
              <br />
              Hyderabad - 500 084,
              <br />
              Telangana, India.
            </Typography>
          </Stack>
          <a href={`tel:+91 45 2313 2341 / 42 / 43`}>
            <Stack flexDirection="row">
              <Call />
              <Typography
                fontSize={14}
                fontWeight={400}
                textAlign="left"
                paddingLeft={1}
              >
                +91 45 2313 2341 / 42 / 43
              </Typography>
            </Stack>
          </a>
          <a href={`mailto:info@kovalty.com`}>
            <Stack flexDirection="row">
              <Mail />
              <Typography
                fontSize={14}
                fontWeight={400}
                textAlign="left"
                paddingLeft={1}
              >
                info@kovalty.com
              </Typography>
            </Stack>
          </a>
        </Grid>
        {/* <Grid item xs={12} md={4}>
          <Typography
            color="#08126B"
            fontSize={18}
            fontWeight={400}
            textAlign="end"
          >
            Investors
          </Typography>
          <a
            href="https://location-services.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Typography
              fontSize={14}
              fontWeight={400}
              textAlign="right"
              paddingLeft={1}
            >
              Location Services
            </Typography>
          </a>
        </Grid> */}
      </Grid>
    </StyledFotterContainer>
  );
}

export default Fotter