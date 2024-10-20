import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#7A6CCB',
        },
        secondary: {
            main: '#dc004e',
        },
        background:{
            default:'#FFFFFF',
            paper:'#E9D3EB'
        },
        text:{
            primary:'#000000',
            secondary:'#5442BD',
            disabled:'#000000AB',
        },
        common:{
            black:'#000000',
            white:'#FFFFFF',
        },
        divider:'#ABABAB',
        mode:'light',
    },
    typography: {
        body2:{
            backgroundColor:'red',
        },
        fontFamily: 'Arial, sans-serif',
        h1        : {
            fontWeight: 700,
            fontSize  : '2rem',
        },
        body1: {
            fontSize: '1rem',
        },
    },
});

export default theme;
