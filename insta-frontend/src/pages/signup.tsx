import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';
import { IconButton, InputAdornment } from "@mui/material";

const signup = () => {
    const [showPassword, setShowPassword] = useState(false);

  return (
    <div id="signup" >
        <div style={{display:"flex", justifyContent:"center", alignContent:"center" }}>
            <Card sx={{ width: 350, margin:'20px auto' }}>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div" align='center' fontFamily={'cursive'}>
                        Instagram
                    </Typography>
                    <Typography variant='body1' fontFamily={'inherit'} align="center">
                        Sign up to see photos and videos from your friends.   
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<FacebookIcon />} // Add FacebookIcon as startIcon
                        fullWidth
                        style={{ margin: '10px', textTransform: 'none', textAlign:"center"}} // Adjust styling as needed
                    >
                        Log in with Facebook
                    </Button>
                    <div style={{display:"flex", margin:"5px 10px"}}>
                        <Divider variant='middle' style={{ width: '42%', margin: '10px' }} />
                        <Typography variant="body2" style={{paddingTop:"5px"}}>OR</Typography>
                        <Divider variant='inset' style={{ width: '42%', margin: '10px' }} />
                    </div>
                    <TextField
                        id="email"
                        label="Mobile number or email address"
                        type="email"
                        variant="filled"
                        fullWidth
                        required
                        style={{margin:"4px 10px"}}
                        InputLabelProps={{
                            style: { fontSize: 15 } // Adjust the font size as needed
                        }}
                    />
                    <TextField
                        id="name"
                        label="Full Name"
                        type="name"
                        variant="filled"
                        fullWidth
                        required
                        style={{margin:"4px 10px"}}
                        InputLabelProps={{
                            style: { fontSize: 15 } // Adjust the font size as needed
                        }}
                    />
                    <TextField
                        id="userName"
                        label="Username"
                        type="name"
                        variant="filled"
                        fullWidth
                        required
                        style={{margin:"4px 10px"}}
                        InputLabelProps={{
                            style: { fontSize: 15 } // Adjust the font size as needed
                        }}
                    />
                    <TextField
                        id="password"
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        variant="filled"
                        fullWidth
                        required
                        style={{margin:"4px 10px"}}
                        InputLabelProps={{
                            style: { fontSize: 15 }, // Adjust the font size as needed
            
                        }}
                        InputProps={{
                            endAdornment: (
                            <InputAdornment position="end">
                                <IconButton size="small" onClick={() => {
                                setShowPassword((prevShowPassword) => !prevShowPassword);
                                }} edge="end" style={{ marginRight: '-10px' }}>
                                {showPassword ? 'Hide' : 'Show'}
                                </IconButton>
                            </InputAdornment>
                            ),
                        }}
                    />
                    <Typography variant='subtitle2' align="center" style={{margin:'10px'}}>
                        People who use our service may have uploaded your contact information to Instagram.{' '}
                        <a href="https://www.instagram.com/accounts/emailsignup/" target='_blank' rel="noopener noreferrer">
                            Learn more
                        </a> 
                    </Typography>
                    <Typography variant='subtitle2' align="center" style={{margin:'10px'}}>
                        By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.{' '}
                        <a href='https://help.instagram.com/581066165581870/?locale=en_GB' target='_blank' rel="noopener noreferrer"> Terms,{' '}</a>
                        <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        style={{ margin: '10px', textTransform: 'none', textAlign:"center"}} // Adjust styling as needed
                    >
                        Sign Up
                    </Button>
                    
                </CardContent>
            </Card>
        </div>
        <div style={{display:"flex", justifyContent:"center", alignContent:"center" }}>
            <Card sx={{ width: 350, margin:'5px' }}>
                <CardContent>
                <Typography variant='body2' align='center'>Have an account?{' '}
                <Link href="/">
                    Log In
                </Link>
                </Typography>
                </CardContent>
            </Card>
        </div> 
    </div>
  )
}

export default signup