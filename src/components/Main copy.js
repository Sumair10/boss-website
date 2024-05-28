import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Alert } from "@mui/material";
import ReactCountryFlag from "react-country-flag";
import { useState } from "react";
import profile1 from "../assets/profile1.png";
import profile3 from "../assets/p4.png";
import profile4 from "../assets/p2.jpeg";
import profile2 from "../assets/p3.png";
import profile5 from "../assets/p1.jpeg";
import { useNavigate } from 'react-router-dom';

export default function Main() {
  const navigation = useNavigate();
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: " rgba(0, 0, 0, 0.1) 0px 4px 4px",
    transition: " background-color 0.3s ease",
    paddingTop: "50px",
    paddingBottom: "50px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "30px",
    transition: "1s",
    "&:hover": {
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      cursor: "pointer",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "50px",
      paddingBottom: "50px",
      margin: '10px',
      fontSize: '10px'
    },
  }));


  const handleClick = () => {
    const someId = 1
    navigation(`/details/${someId}`);
  };

  return (
    <React.Fragment>
      <Box className="upperBorder"></Box>

      <Box
        sx={{
          padding: {
            md: "50px",
            sm: "20px",
            xs: "10px",
          },
          backgroundColor: '#f3f6fa',
          minHeight: '100vh'
        }}
      >
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          className="main"
        >
          <Grid item xs={6} sm={4} md={3}>
            <Item onClick={handleClick}>
              <img
                src={profile1}
                alt="description_of_your_image"
                width="150px"
                height="150px"
              />
              <h1>Niyas</h1>
              <ReactCountryFlag
                countryCode="IN"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title="IN"
                style={{
                  fontSize: "3em",
                }}
              />
              <Alert sx={{
                width: {
                  lg: '90%',
                  md: '80%',
                  xs: '70%'
                }, position: 'relative', bottom: -30, textAlign: 'center'
              }} severity="error">
                SOMETHING WENT WRONG
              </Alert>
            </Item>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Item onClick={handleClick}>
              <img
                src={profile2}
                alt="description_of_your_image"
                width="150px"
                height="150px"
              />
              <h1>Eyman</h1>
              <ReactCountryFlag
                countryCode="TN"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title="TN"
                style={{
                  fontSize: "3em",
                }}
              />
              <Alert sx={{
                width: {
                  lg: '90%',
                  md: '80%',
                  xs: '70%'
                }, position: 'relative', bottom: -30, textAlign: 'center'
              }} severity="success">
                ALL GOOD
              </Alert>
            </Item>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Item>
              <img
                src={profile4}
                alt="description_of_your_image"
                width="150px"
                height="150px"
              />
              <h1>Sumayya</h1>
              <ReactCountryFlag
                countryCode="IN"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title="IN"
                style={{
                  fontSize: "3em",
                }}
              />
            </Item>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Item>
              <img
                src={profile3}
                alt="description_of_your_image"
                width="150px"
                height="150px"
              />
              <h1>Sumair</h1>
              <ReactCountryFlag
                countryCode="PK"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title="PK"
                style={{
                  fontSize: "3em",
                }}
              />
            </Item>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Item>
              <img
                src={profile5}
                alt="description_of_your_image"
                width="150px"
                height="150px"
              />
              <h1>Reem</h1>
              <ReactCountryFlag
                countryCode="TN"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title="TN"
                style={{
                  fontSize: "3em",
                }}
              />
            </Item>
          </Grid>
        </Grid>
      </Box>

    </React.Fragment>
  );
}
