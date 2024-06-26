import * as React from "react";
import Box from "@mui/material/Box";
import profile3 from "../assets/p4.png";
import degree from "../assets/degree.jpeg";
import pass from "../assets/pass.jpeg";
import id from "../assets/id.jpg";
import { Grid, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { INVESTORS } from "./InvestorsData";

export default function Details() {
  const params = useParams();
  const navigate = useNavigate();

  const { id } = params;
  const investor = INVESTORS[parseInt(id) - 1];
  const handleBack = () => {
    navigate(-1);
  };

  function getImageSrc(id, imageIndex, extensions = ["png", "jpeg"]) {
    for (let ext of extensions) {
      try {
        return require(`../agreements/00${id}/${imageIndex}.${ext}`);
      } catch (err) {
        // Continue to the next extension if the image with the current extension is not found
      }
    }
    return null; // Return null if no image is found with the given extensions
  }

  const renderImage = (imageIndex) => {
    const extensions = ["png", "jpeg"];
    const src = getImageSrc(id, imageIndex, extensions);
    return src ? (
      <img src={src} width="90%" alt={`image-${imageIndex}`} />
    ) : null;
  };

  return (
    <React.Fragment>
      <Box className="upperBorder"></Box>
      <Box onClick={handleBack} style={{ padding: 20, cursor: "pointer" }}>
        go back
      </Box>
      <Box className="detailContainer">
        <Box className="detailNameBox">
          {/* <img
            src={profile3}
            alt="description_of_your_image"
            width="150px"
            height="150px"
          /> */}
          <h1>{investor.name}</h1>
        </Box>
        <Box className="personalInfoContainer">
          <Box className="personalInfoInnerContainer">PERSONAL DETAILS</Box>
        </Box>
        <Box className="details">
          <Box className="innerDetails">
            <Grid container>
              <Grid item xs={4}>
                <p className="title">Investment ID</p>
              </Grid>
              <Grid item xs={8}>
                <p className="desc">{investor.investmentId}</p>
              </Grid>
              <Grid item xs={12}>
                <Box style={{ borderBottom: "1px solid #e2ecf9" }}></Box>
              </Grid>
              <Grid item xs={4}>
                <p className="title">Full Name</p>
              </Grid>
              <Grid item xs={8}>
                <p className="desc">{investor.name}</p>
              </Grid>
              <Grid item xs={12}>
                <Box style={{ borderBottom: "1px solid #e2ecf9" }}></Box>
              </Grid>
              <Grid item xs={4}>
                <p className="title">Nationality</p>
              </Grid>
              <Grid item xs={8}>
                <p className="desc">{investor.nationality}</p>
              </Grid>
              <Grid item xs={12}>
                <Box style={{ borderBottom: "1px solid #e2ecf9" }}></Box>
              </Grid>
              <Grid item xs={4}>
                <p className="title">Emirated ID</p>
              </Grid>
              <Grid item xs={8}>
                <p className="desc">{investor.emiratedId}</p>
              </Grid>
              <Grid item xs={12}>
                <Box style={{ borderBottom: "1px solid #e2ecf9" }}></Box>
              </Grid>
              <Grid item xs={4}>
                <p className="title">Email Address</p>
              </Grid>
              <Grid item xs={8}>
                <p className="desc">{investor.email}</p>
              </Grid>
              <Grid item xs={12}>
                <Box style={{ borderBottom: "1px solid #e2ecf9" }}></Box>
              </Grid>
              <Grid item xs={4}>
                <p className="title">Phone No.</p>
              </Grid>
              <Grid item xs={8}>
                <p className="desc">{investor.phone}</p>
              </Grid>
              <Grid item xs={12}>
                <Box style={{ borderBottom: "1px solid #e2ecf9" }}></Box>
              </Grid>
              <Grid item xs={4}>
                <p className="title">Passport No.</p>
              </Grid>
              <Grid item xs={8}>
                <p className="desc">{investor.passportNo}</p>
              </Grid>
              <Grid item xs={12}>
                <Box style={{ borderBottom: "1px solid #e2ecf9" }}></Box>
              </Grid>
              <Grid item xs={4}>
                <p className="title">Bank</p>
              </Grid>
              <Grid item xs={8}>
                <p className="desc">{investor.bank}</p>
              </Grid>
              <Grid item xs={12}>
                <Box style={{ borderBottom: "1px solid #e2ecf9" }}></Box>
              </Grid>
              <Grid item xs={4}>
                <p className="title">Account No.</p>
              </Grid>
              <Grid item xs={8}>
                <p className="desc">{investor.accountNumber}</p>
              </Grid>
              <Grid item xs={12}>
                <Box style={{ borderBottom: "1px solid #e2ecf9" }}></Box>
              </Grid>
              <Grid item xs={4}>
                <p className="title">IBAN</p>
              </Grid>
              <Grid item xs={8}>
                <p className="desc">{investor.iban}</p>
              </Grid>
              <Grid item xs={12}>
                <Box style={{ borderBottom: "1px solid #e2ecf9" }}></Box>
              </Grid>
              <Grid item xs={4}>
                <p className="title">Agreement Date</p>
              </Grid>
              <Grid item xs={8}>
                <p className="desc">{investor.startDate}</p>
              </Grid>
              <Grid item xs={12}>
                <Box style={{ borderBottom: "1px solid #e2ecf9" }}></Box>
              </Grid>
              <Grid item xs={4}>
                <p className="title">Invested Amount</p>
              </Grid>
              <Grid item xs={8}>
                <p className="desc">{investor.investedAmoutnt}</p>
              </Grid>
              <Grid item xs={12}>
                <Box style={{ borderBottom: "1px solid #e2ecf9" }}></Box>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box className="personalInfoContainer">
          <Box
            className="personalInfoInnerContainer "
            sx={{ marginTop: "50px" }}
          >
            DOCUMENT DETAILS
          </Box>
        </Box>
        <Box>
          <Box className="details">
            <Box className="innerDetails" style={{ marginTop: '50px' }}>
              <Grid container>
                {[1, 2, 3, 4,5,6, 7].map(index => (
                  <Grid key={index} item xs={12} md={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginTop: '10px' }}>
                    {renderImage(index)}
                  </Grid>
                ))}
                {/* {(id === '2' || id === '4') && (
                  <Grid item xs={12} md={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginTop: '10px' }}>
                    {renderImage(5)}
                  </Grid>
                )} */}
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}
