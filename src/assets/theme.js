import { createTheme } from "@mui/material";
export const theme = createTheme({
 
    typography: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      p:{
        textAlign: 'justify'
      },
      h1: {
        fontSize: '2rem',
        fontWeight: 700,
        marginTop: '1.5rem'   

      },
      h2: {
        fontSize: '1.6rem',
        fontWeight: 700,
        marginTop: '1.5rem', 
        color: '#b8a8d2' 
      }, 
    },
    palette: {
      primary:{
        main: '#b8a8d2',
        light: '#c6b9db',
        dark:'#807593'
      },
      secondary: {
        main:'#97ceed',
        light:'#abd7f0',
        dark:'#6990a5'
      }
    },
  
  });