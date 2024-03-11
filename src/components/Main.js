import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ReactCountryFlag from "react-country-flag";
import { useState } from "react";

export default function Main() {
  const [clicked, setClicked] = useState(false);

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: " rgba(0, 0, 0, 0.1) 0px 4px 12px",
    transition: " background-color 0.3s ease",
    paddingTop: "50px",
    paddingBottom: "50px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "30px",
    "&:hover": {
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      backgroundColor: "#DAA520",
      cursor: "pointer",
    },
    [theme.breakpoints.down("sm")]: {
      // Media query for screens smaller than 'sm' breakpoint
      paddingTop: "50px",
      paddingBottom: "50px",
    },
  }));

  const ItemPerson = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: " rgba(0, 0, 0, 0.1) 0px 4px 12px",
    transition: " background-color 0.3s ease",

    height: "100vh",
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    "&:hover": {},
    [theme.breakpoints.down("sm")]: {},
  }));

  const handleClick = () => {
    console.log("hello");
    setClicked(true);
  };

  return (
    <React.Fragment>
      {!clicked ? (
        <Box
          sx={{
            padding: {
              md: "50px",
              sm: "20px",
              xs: "10px",
            },
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
                  src="https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg"
                  alt="description_of_your_image"
                  width="150px"
                  height="150px"
                />
                <h1>Niaz</h1>
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
                  src="https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg"
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
                  src="https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg"
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
              </Item>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Item>
                <img
                  src="https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg"
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
          </Grid>
        </Box>
      ) : (
        <Box>
          <Grid item xs={6} sm={4} md={3}>
            <ItemPerson>
              <h1>Sumair</h1>
            </ItemPerson>
          </Grid>
        </Box>
      )}
    </React.Fragment>
  );
}
