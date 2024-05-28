import * as React from "react";
import Box from "@mui/material/Box";
import profile3 from "../assets/p4.png";
import degree from "../assets/degree.jpeg";
import pass from "../assets/pass.jpeg";
import id from "../assets/id.jpg";
import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

export default function Details() {
  const params = useParams();
  console.log(params);
  const { id } = params;
  console.log(id);
  return (
    <React.Fragment>
      <Box className="upperBorder"></Box>
      <Box className="detailContainer">
        <Box className="detailNameBox">

          <img
            src={profile3}
            alt="description_of_your_image"
            width="150px"
            height="150px"
          />
          <h1>Sumair Zahid</h1>
        </Box>
        <Box className="personalInfoContainer">
          <Box className="personalInfoInnerContainer">PERSONAL DETAILS</Box>
        </Box>
        <Box className="details">
          <Box className="innerDetails">
            <Grid
              container
            >
              <Grid item xs={4}>
                <p className="title">Full Name</p>
              </Grid>
              <Grid item xs={8}>
                <p className="desc">Sumair Zahid</p>
              </Grid>
              <Grid item xs={12}>
                <Box style={{ borderBottom: '1px solid #e2ecf9' }}></Box>
              </Grid>
              <Grid item xs={4}>
                <p className="title">Email</p>
              </Grid>
              <Grid item xs={8}>
                <p className="desc">sumairzahid123@gmail.com</p>
              </Grid>
              <Grid item xs={12}>
                <Box style={{ borderBottom: '1px solid #e2ecf9' }}></Box>
              </Grid>
              <Grid item xs={4}>
                <p className="title">Phone No.</p>
              </Grid>
              <Grid item xs={8}>
                <p className="desc">+971 56 591 4956</p>
              </Grid>
              <Grid item xs={12}>
                <Box style={{ borderBottom: '1px solid #e2ecf9' }}></Box>
              </Grid>
              <Grid item xs={4}>
                <p className="title">Nationality</p>
              </Grid>
              <Grid item xs={8}>
                <p className="desc">Pakistan</p>
              </Grid>
              <Grid item xs={12}>
                <Box style={{ borderBottom: '1px solid #e2ecf9' }}></Box>
              </Grid>
              <Grid item xs={4}>
                <p className="title">Age</p>
              </Grid>
              <Grid item xs={8}>
                <p className="desc">26</p>
              </Grid>
              <Grid item xs={12}>
                <Box style={{ borderBottom: '1px solid #e2ecf9' }}></Box>
              </Grid>
              <Grid item xs={4}>
                <p className="title">Job Title</p>
              </Grid>
              <Grid item xs={8}>
                <p className="desc">App Developer</p>
              </Grid>
              <Grid item xs={12}>
                <Box style={{ borderBottom: '1px solid #e2ecf9' }}></Box>
              </Grid>
              <Grid item xs={4}>
                <p className="title">Address</p>
              </Grid>
              <Grid item xs={8}>
                <p className="desc">Flat abc, Al-Nadha, Dubai</p>
              </Grid>
              <Grid item xs={12}>
                <Box style={{ borderBottom: '1px solid #e2ecf9' }}></Box>
              </Grid>
              <Grid item xs={4}>
                <p className="title">City</p>
              </Grid>
              <Grid item xs={8}>
                <p className="desc">Dubai</p>
              </Grid>
              <Grid item xs={12}>
                <Box style={{ borderBottom: '1px solid #e2ecf9' }}></Box>
              </Grid>
              <Grid item xs={4}>
                <p className="title">Date of Birth</p>
              </Grid>
              <Grid item xs={8}>
                <p className="desc">18 December 1999</p>
              </Grid>
              <Grid item xs={12}>
                <Box style={{ borderBottom: '1px solid #e2ecf9' }}></Box>
              </Grid>
              <Grid item xs={4}>
                <p className="title">Work Address</p>
              </Grid>
              <Grid item xs={8}>
                <p className="desc">Suite #1705, Festival Tower, Dubai Festival City</p>
              </Grid>
              <Grid item xs={12}>
                <Box style={{ borderBottom: '1px solid #e2ecf9' }}></Box>
              </Grid>
              <Grid item xs={4}>
                <p className="title">Start Date</p>
              </Grid>
              <Grid item xs={8}>
                <p className="desc">11 March 2024</p>
              </Grid>
              <Grid item xs={12}>
                <Box style={{ borderBottom: '1px solid #e2ecf9' }}></Box>
              </Grid>
              <Grid item xs={4}>
                <p className="title">Employment Status</p>
              </Grid>
              <Grid item xs={8}>
                <p className="desc">Full Time</p>
              </Grid>


            </Grid>
          </Box>
        </Box>

        <Box className="personalInfoContainer">
          <Box className="personalInfoInnerContainer " sx={{marginTop : '50px'}} >DOCUMENT DETAILS</Box>
        </Box>
        <Box>
          <Box className="details">
            <Box className="innerDetails" style={{ marginTop: '50px' }}>
              <Grid
                container
              >
                <Grid item xs={12} md={4}  style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginTop: '10px' }}>
                  <img
                    src={degree}
                    alt="description_of_your_image"
                    width="90%"
                  />
                </Grid>
                <Grid item xs={12} md={4} style={{ display: 'flex', justifyContent: 'center' , alignItems: 'flex-start', marginTop: '10px' }}>
                  <img
                    src={pass}
                    alt="description_of_your_image"
                    width="90%"
                  />
                </Grid>
                <Grid item xs={12} md={4} style={{ display: 'flex', justifyContent: 'center' , alignItems: 'flex-start', marginTop: '10px' }}>
                  <img
                    src={id}
                    alt="description_of_your_image"
                    width="90%"
                  />
                </Grid>

              </Grid>
            </Box>
          </Box>

        </Box>

      </Box>
    </React.Fragment>
  );
}
