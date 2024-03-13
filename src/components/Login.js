import * as React from "react";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Alert, Box, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const navigation = useNavigate();
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [error, setError] = React.useState(false)

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (event) => {
    console.log('click',password)
    if(password === '1234'){
      navigation('/main');
    }
    else{
      setError(true)
    }
  };

  React.useEffect(() => {
    if(error){
      setTimeout(() => {
        setError(false)
      }, 2000);
    }
  }, [error])
  

  return (
    <React.Fragment>
       <Box className="upperBorder"></Box>
      <Box className="loginContainer">
        {
          error && <Alert severity="error">{password === '' ?"Please enter password" : "Wrong password"}</Alert>
        }
      

      <TextField
        id="password"
        label="Password"
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={handlePasswordChange}
        variant="outlined"
        fullWidth
        margin="normal"
        className="textfield"
        InputLabelProps={{
          style: { color: '#093505' } // Change 'blue' to the desired color
        }}
        sx={{
         
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#093505', // border color
            },
            '&:hover fieldset': {
              borderColor: '#093505', // border color on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: '#093505', // border color when focused
            },
            '& .MuiInputLabel-root': {
              color: '#093505', // label text color
            },
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleTogglePasswordVisibility}
                edge="end"
              >
                {showPassword ? <VisibilityOff color="#093505"/> : <Visibility color="#093505" />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button className="button" type="submit" variant="contained" color="primary" onClick={handleSubmit} sx={{
          width :'500px',
          backgroundColor : '#093505',
          color :'white',
          '&:hover': {
            backgroundColor: 'black',
          },
        }}> 
        Submit
      </Button>
      </Box>
    </React.Fragment>
  );
}
