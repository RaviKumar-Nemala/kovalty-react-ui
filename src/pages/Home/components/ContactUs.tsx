import { FacebookRounded, Instagram, LinkedIn, X, YouTube } from '@mui/icons-material';
import { Box, Button, styled, Typography } from '@mui/material';
import React from 'react';

// padding: 100px 30px 0px 30px;

const StyledServicesContainer = styled(Box)`
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

const socialLinks = [
  {
    icon: <FacebookRounded />,
    link: 'https://facebook.com',
  },
  {
    icon: <YouTube />,
    link: 'https://facebook.com',
  },
  {
    icon: <Instagram />,
    link: 'https://facebook.com',
  },
  {
    icon: <LinkedIn />,
    link: 'https://facebook.com',
  },
  {
    icon: <X />,
    link: 'https://facebook.com',
  },
];

const ContactUs = () => {
  const onClickLink = (link: string) => {
    window.open(link, '_blank'); // Opens the link in a new tab
  };

  return (
    <StyledServicesContainer id="contact">
      {/* <StyledTitle>Contact Us</StyledTitle> */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
      >
        {socialLinks.map((social, key) => (
          <Button
           style = {{margin:'0px 5px',marginRight:'10px'}}
            variant="contained"
            key={key}
            onClick={() => onClickLink(social.link)}
          >
            {social.icon}
          </Button>
        ))}
      </Box>
    </StyledServicesContainer>
  );
};

export default ContactUs;
