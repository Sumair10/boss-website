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
import { useNavigate } from "react-router-dom";

const INVESTORS = [
  {
    initialId: 1,
    investmentId: "RCI1705001",
    name: "Mr. Mouadh Ben Ameur",
    nationality: "France",
    countryCode: 'FR',
    emiratedId: "784-1972-996383-6",
    passportNo: "19FF87012",
    resident: "UAE",
    phone: "+243 858 792 703",
    email: "benameurmouadh@gmail.com",
    bank: "ADIB bank",
    accountNumber: "28785206",
    iban: "AE810500000000028785206",
    investedAmoutnt: "100,000 USD",
    startDate: "6th May 2024",
  },
  {
    initialId: 2,
    investmentId: "RCI1705002",
    name: "Mr. Karim Achoura",
    nationality: "Tunisia",
    countryCode: 'TN',
    emiratedId: "784-1977-3060476-2",
    passportNo: "H393790",
    resident: "UAE",
    phone: "+971 50 425 7310 ",
    email: "Kachoura@yahoo.fr",
    bank: "EMIRATES NBD",
    accountNumber: "1104105102301",
    iban: "AE120260001104105102301",
    investedAmoutnt: "367,000 AED",
    startDate: "6th May 2024",
  },
  {
    initialId: 3,
    investmentId: "RCI1705003",
    name: "Ms. Karin Barbara Brosch",
    nationality: "Germany",
    countryCode: 'DE',
    emiratedId: "784-1972-6960904-2",
    passportNo: "C4KNL5LRJ",
    resident: "UAE",
    phone: "050 350 7653",
    email: "Karin.Brosch@gmail.com",
    bank: "EMIRATES NBD",
    accountNumber: "0214201053101",
    iban: "AE360260000214201053101",
    investedAmoutnt: "200,000 AED",
    startDate: "10th May 2024",
  },
  {
    initialId: 4,
    investmentId: "RCI1705004",
    name: "Mr. Mouadh Ben Ameur",
    nationality: "France",
    countryCode: 'FR',
    emiratedId: "784-1972-996383-6",
    passportNo: "19FF87012",
    resident: "UAE",
    phone: "+243 858 792 703",
    email: "benameurmouadh@gmail.com",
    bank: "ADIB bank",
    accountNumber: "28785206",
    iban: "AE810500000000028785206",
    investedAmoutnt: "376,000 AED",
    startDate: "15th May 2024",
  },
  {
    initialId: 5,
    investmentId: "RCI1705005",
    name: "Mr. Karim Achoura",
    nationality: "Tunisia",
    countryCode: 'TN',
    emiratedId: "784-1977-3060476-2",
    passportNo: "H393790",
    resident: "UAE",
    phone: "+971 50 425 7310 ",
    email: "Kachoura@yahoo.fr",
    bank: "EMIRATES NBD",
    accountNumber: "1104105102301",
    iban: "AE120260001104105102301",
    investedAmoutnt: "376,000 AED",
    startDate: "15th May 2024",
  },
  {
    initialId: 6,
    investmentId: "RCI1705006",
    name: "Ms. Lynn Kamal El Hariri El Rifai",
    nationality: "Lebanon",
    countryCode: 'LB',
    emiratedId: "784-1997-6977554-7",
    passportNo: "LR3717958",
    resident: "UAE",
    phone: "+971 52 7822 700",
    email: "haririlynn@gmail.com ",
    bank: "EMIRATES NBD",
    accountNumber: "1015784679001",
    iban: "AE650260001015784679001",
    investedAmoutnt: "5,000 USD",
    startDate: "22th May 2024",
  },
];

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
      margin: "10px",
      fontSize: "10px",
    },
  }));

  const handleClick = () => {
    const someId = 1;
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
          backgroundColor: "#f3f6fa",
          minHeight: "100vh",
        }}
      >
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          className="main"
        >
          {INVESTORS.map((investor) => (
            <>
              <Grid item xs={6} sm={4} md={3}>
                <Item onClick={handleClick}>
                  {/* <img
                    src={profile2}
                    alt="description_of_your_image"
                    width="150px"
                    height="150px"
                  /> */}
                  <h3>{investor.investmentId}</h3>
                  <h1>{investor.name}</h1>
                  <ReactCountryFlag
                    countryCode={investor.countryCode}
                    svg
                    cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                    cdnSuffix="svg"
                    title="TN"
                    style={{
                      fontSize: "3em",
                    }}
                  />
                  
                  <Alert
                    sx={{
                      width: {
                        lg: "90%",
                        md: "80%",
                        xs: "70%",
                      },
                      position: "relative",
                      bottom: -30,
                      textAlign: "center",
                    }}
                    severity="success"
                  >
                    Start Date: {investor.startDate}
                  </Alert>
                </Item>
              </Grid>
            </>
          ))}
        </Grid>
      </Box>
    </React.Fragment>
  );
}
